<?php

declare(strict_types=1);

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function detailRows(array $details): string
{
    $rows = '';
    foreach ($details as $label => $value) {
        $rows .= '<tr>'
            . '<td style="padding:12px 16px;border-bottom:1px solid #e8edf3;color:#64748b;font-size:14px;vertical-align:top;width:34%;">'
            . escapeHtml($label)
            . '</td><td style="padding:12px 16px;border-bottom:1px solid #e8edf3;color:#172033;font-size:14px;vertical-align:top;white-space:pre-line;">'
            . escapeHtml($value !== '' ? $value : '-')
            . '</td></tr>';
    }

    return $rows;
}

function emailLayout(string $title, string $intro, string $content): string
{
    return '<!doctype html><html lang="de"><head><meta charset="UTF-8">'
        . '<meta name="viewport" content="width=device-width,initial-scale=1.0">'
        . '<title>' . escapeHtml($title) . '</title></head>'
        . '<body style="margin:0;padding:0;background:#f3f6fa;font-family:Arial,Helvetica,sans-serif;color:#172033;">'
        . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f6fa;padding:32px 12px;">'
        . '<tr><td align="center"><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">'
        . '<tr><td style="padding:24px 32px;background:#2e4a6f;color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:.2px;">EasyTech <span style="font-weight:normal;">IT-Solutions</span></td></tr>'
        . '<tr><td style="padding:32px;">'
        . '<h1 style="margin:0 0 12px;color:#172033;font-size:24px;line-height:1.3;">' . escapeHtml($title) . '</h1>'
        . '<p style="margin:0 0 24px;color:#526078;font-size:15px;line-height:1.7;">' . escapeHtml($intro) . '</p>'
        . $content
        . '</td></tr>'
        . '<tr><td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e8edf3;color:#64748b;font-size:12px;line-height:1.6;">'
        . 'EasyTech IT-Solutions &middot; <a href="mailto:info@easytechit.de" style="color:#2e4a6f;text-decoration:none;">info@easytechit.de</a>'
        . '<br>Diese E-Mail wurde automatisch über das Kontaktformular versendet.'
        . '</td></tr></table></td></tr></table></body></html>';
}

function multipartBody(string $plainText, string $html): array
{
    $boundary = '=_EasyTech_' . bin2hex(random_bytes(16));
    $body = '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($plainText))
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html))
        . '--' . $boundary . "--\r\n";

    return [$boundary, $body];
}

function sendHtmlEmail(string $recipient, string $subjectText, string $plainText, string $html, string $replyTo): bool
{
    [$boundary, $body] = multipartBody($plainText, $html);
    $headers = [
        'From: EasyTech IT-Solutions <info@easytechit.de>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
    ];
    $subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

    return mail($recipient, $subject, $body, implode("\r\n", $headers));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Diese Anfrage ist nicht erlaubt.']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== 0) {
    respond(415, ['ok' => false, 'error' => 'Ungültiges Anfrageformat.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    respond(413, ['ok' => false, 'error' => 'Die Anfrage ist zu groß.']);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody === false ? '' : $rawBody, true);
if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    respond(400, ['ok' => false, 'error' => 'Die Anfrage enthält ungültige Daten.']);
}

$limits = [
    'firstName' => 100,
    'lastName' => 100,
    'email' => 254,
    'company' => 200,
    'phone' => 50,
    'phoneCountry' => 10,
    'country' => 10,
    'service' => 100,
    'webdesignPackage' => 100,
    'itCategory' => 100,
    'message' => 5000,
];
$fields = [];
foreach ($limits as $field => $limit) {
    $value = $data[$field] ?? '';
    if (!is_string($value)) {
        respond(400, ['ok' => false, 'error' => 'Bitte prüfen Sie Ihre Eingaben.']);
    }

    $value = trim($value);
    if (strlen($value) > $limit) {
        respond(400, ['ok' => false, 'error' => 'Bitte prüfen Sie Ihre Eingaben.']);
    }
    $fields[$field] = $value;
}

foreach (['firstName', 'lastName', 'email', 'service'] as $requiredField) {
    if ($fields[$requiredField] === '') {
        respond(400, ['ok' => false, 'error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    }
}

if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
}

if (($data['consent'] ?? '') !== 'true') {
    respond(400, ['ok' => false, 'error' => 'Bitte stimmen Sie der Datenschutzerklärung zu.']);
}

$phone = $fields['phone'] !== '' ? trim($fields['phoneCountry'] . ' ' . $fields['phone']) : '';
$adminDetails = [
    'Name' => $fields['firstName'] . ' ' . $fields['lastName'],
    'E-Mail' => $fields['email'],
    'Unternehmen' => $fields['company'],
    'Telefon' => $phone,
    'Land' => $fields['country'],
    'Gewünschte Leistung' => $fields['service'],
    'Webdesign-Paket' => $fields['webdesignPackage'],
    'IT-Kategorie' => $fields['itCategory'],
    'Nachricht' => $fields['message'],
];
$adminPlainLines = ['Neue Kontaktanfrage über easytechit.de', ''];
foreach ($adminDetails as $label => $value) {
    $adminPlainLines[] = $label . ': ' . ($value !== '' ? $value : '-');
}
$adminHtml = emailLayout(
    'Neue Kontaktanfrage',
    'Eine neue Anfrage wurde über das Kontaktformular eingereicht.',
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e8edf3;border-radius:10px;border-collapse:separate;">'
        . detailRows($adminDetails)
        . '</table>'
);

$isCheck = strpos($fields['service'], 'Kostenloser Digital-Check') === 0;
if ($isCheck) {
    $checkLines = [
        strtoupper($fields['service']),
        '',
        'Name: ' . $fields['firstName'] . ' ' . $fields['lastName'],
        'E-Mail: ' . $fields['email'],
    ];
    if ($phone !== '') {
        $checkLines[] = 'Telefon: ' . $phone;
    }
    $checkLines[] = '';
    $checkLines[] = $fields['message'];
    $headers = [
        'From: EasyTech IT-Solutions <info@easytechit.de>',
        'Reply-To: ' . $fields['email'],
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
    ];
    $checkSubject = '=?UTF-8?B?' . base64_encode('Digital-Check: ' . $fields['firstName'] . ' ' . $fields['lastName']) . '?=';
    $adminSent = mail(
        'info@easytechit.de',
        $checkSubject,
        chunk_split(base64_encode(implode("\r\n", $checkLines))),
        implode("\r\n", $headers)
    );
} else {
    $adminSent = sendHtmlEmail(
        'info@easytechit.de',
        'Neue Kontaktanfrage - EasyTech IT-Solutions',
        implode("\r\n", $adminPlainLines),
        $adminHtml,
        $fields['email']
    );
}

if (!$adminSent) {
    error_log('EasyTech contact form: mail() failed.');
    respond(500, [
        'ok' => false,
        'error' => 'Die Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@easytechit.de.',
    ]);
}

$senderName = $fields['firstName'] . ' ' . $fields['lastName'];
$confirmationDetails = [
    'Name' => $senderName,
    'Gewünschte Leistung' => $fields['service'],
];
$confirmationPlain = "Hallo {$fields['firstName']},\r\n\r\n"
    . "vielen Dank für Ihre Nachricht an EasyTech IT-Solutions. Wir haben Ihre Anfrage erhalten und melden uns persönlich bei Ihnen.\r\n\r\n"
    . "Ihre Anfrage:\r\n"
    . "Leistung: {$fields['service']}\r\n"
    . ($fields['webdesignPackage'] !== '' ? "Webdesign-Paket: {$fields['webdesignPackage']}\r\n" : '')
    . ($fields['itCategory'] !== '' ? "IT-Kategorie: {$fields['itCategory']}\r\n" : '')
    . "\r\nFalls Sie noch etwas ergänzen möchten, antworten Sie einfach auf diese E-Mail.\r\n\r\n"
    . "Viele Grüße\r\nEasyTech IT-Solutions";
$confirmationHtml = emailLayout(
    'Vielen Dank für Ihre Anfrage',
    'Hallo ' . $fields['firstName'] . ', vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns persönlich bei Ihnen.',
    '<h2 style="margin:0 0 12px;color:#2e4a6f;font-size:16px;">Ihre Anfrage auf einen Blick</h2>'
        . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e8edf3;border-radius:10px;border-collapse:separate;">'
        . detailRows($confirmationDetails)
        . '</table>'
        . '<p style="margin:24px 0 0;color:#526078;font-size:14px;line-height:1.7;">Falls Sie noch etwas ergänzen möchten, antworten Sie einfach auf diese E-Mail.</p>'
        . '<p style="margin:20px 0 0;color:#172033;font-size:14px;line-height:1.7;">Viele Grüße<br><strong>EasyTech IT-Solutions</strong></p>'
);
$confirmationSent = sendHtmlEmail(
    $fields['email'],
    'Wir haben Ihre Anfrage erhalten - EasyTech IT-Solutions',
    $confirmationPlain,
    $confirmationHtml,
    'info@easytechit.de'
);
if (!$confirmationSent) {
    error_log('EasyTech contact form: confirmation email could not be sent.');
}

respond(200, ['ok' => true, 'confirmationSent' => $confirmationSent]);
