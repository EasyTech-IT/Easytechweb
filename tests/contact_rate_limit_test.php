<?php

declare(strict_types=1);

require_once __DIR__ . '/../api/contact_rate_limit.php';

$storagePath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'easytech-contact-rate-test-' . bin2hex(random_bytes(8)) . '.json';
$now = 1_800_000_000;

function expect(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

try {
    for ($i = 0; $i < 5; $i++) {
        expect(recordContactSubmission('192.0.2.1', $now + $i, $storagePath)['status'] === 'allowed', 'Requests below the limit must be allowed.');
    }

    $limited = recordContactSubmission('192.0.2.1', $now + 5, $storagePath);
    expect($limited['status'] === 'limited', 'The sixth request within ten minutes must be limited.');
    expect($limited['retryAfter'] > 0 && $limited['retryAfter'] <= 600, 'The retry delay must match the remaining window.');
    expect(recordContactSubmission('192.0.2.2', $now + 5, $storagePath)['status'] === 'allowed', 'Limits must be isolated by IP hash.');
    expect(recordContactSubmission('192.0.2.2', $now + 605, $storagePath)['status'] === 'allowed', 'Expired timestamps must be removed.');

    $entries = json_decode((string) file_get_contents($storagePath), true, 512, JSON_THROW_ON_ERROR);
    expect(!isset($entries[hash('sha256', '192.0.2.1')]), 'Expired IP hashes must be pruned on later submissions.');
} finally {
    if (is_file($storagePath)) {
        unlink($storagePath);
    }
}
