<?php

declare(strict_types=1);

function recordContactSubmission(string $ipAddress, int $now, string $storagePath): array
{
    if ($ipAddress === '') {
        error_log('EasyTech contact form: client IP unavailable for rate limiting.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    $previousUmask = umask(0077);
    $handle = @fopen($storagePath, 'c+');
    umask($previousUmask);
    if ($handle === false) {
        error_log('EasyTech contact form: rate-limit storage could not be opened.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    if (!flock($handle, LOCK_EX) || !@chmod($storagePath, 0600)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        error_log('EasyTech contact form: rate-limit storage could not be secured.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    rewind($handle);
    $contents = stream_get_contents($handle);
    $entries = $contents === '' ? [] : json_decode($contents, true);
    if ($contents === false || !is_array($entries) || json_last_error() !== JSON_ERROR_NONE) {
        flock($handle, LOCK_UN);
        fclose($handle);
        error_log('EasyTech contact form: rate-limit storage contains invalid data.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    $cutoff = $now - 600;
    foreach ($entries as $hash => $timestamps) {
        if (!is_string($hash) || !preg_match('/\A[a-f0-9]{64}\z/', $hash) || !is_array($timestamps)) {
            flock($handle, LOCK_UN);
            fclose($handle);
            error_log('EasyTech contact form: rate-limit storage contains invalid entries.');
            return ['status' => 'unavailable', 'retryAfter' => 0];
        }

        foreach ($timestamps as $timestamp) {
            if (!is_int($timestamp)) {
                flock($handle, LOCK_UN);
                fclose($handle);
                error_log('EasyTech contact form: rate-limit storage contains invalid timestamps.');
                return ['status' => 'unavailable', 'retryAfter' => 0];
            }
        }

        $entries[$hash] = array_values(array_filter(
            $timestamps,
            static fn(int $timestamp): bool => $timestamp > $cutoff,
        ));
        if ($entries[$hash] === []) {
            unset($entries[$hash]);
        }
    }

    $key = hash('sha256', $ipAddress);
    $hits = $entries[$key] ?? [];
    $limited = count($hits) >= 5;
    $retryAfter = $limited ? max(1, min($hits) + 600 - $now) : 0;
    if (!$limited) {
        $entries[$key][] = $now;
    }

    $encoded = json_encode($entries);
    if ($encoded === false || !rewind($handle) || !ftruncate($handle, 0)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        error_log('EasyTech contact form: rate-limit storage could not be updated.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    $written = fwrite($handle, $encoded);
    $saved = $written === strlen($encoded) && fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    if (!$saved) {
        error_log('EasyTech contact form: rate-limit storage could not be saved.');
        return ['status' => 'unavailable', 'retryAfter' => 0];
    }

    return ['status' => $limited ? 'limited' : 'allowed', 'retryAfter' => $retryAfter];
}
