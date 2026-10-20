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

const MAIL_LOGO = 'https://easytechit.de/assets/EasyTech%20Logo.png';
const MAIL_BLUE = '#2e4a6f';

function iconBadge(string $glyph): string
{
    return '<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>'
        . '<td align="center" valign="middle" width="38" height="38" style="width:38px;height:38px;border-radius:19px;background:#eaf1f9;color:' . MAIL_BLUE . ';font-size:17px;line-height:38px;font-family:Arial,Helvetica,sans-serif;">'
        . $glyph . '&#xFE0E;</td></tr></table>';
}

function infoRows(array $items): string
{
    $rows = '';
    foreach ($items as [$glyph, $label, $value, $href]) {
        if ($value === '') {
            continue;
        }
        $text = escapeHtml($value);
        if ($href !== '') {
            $text = '<a href="' . escapeHtml($href) . '" style="color:' . MAIL_BLUE . ';text-decoration:none;font-weight:bold;">' . $text . '</a>';
        }
        $rows .= '<tr>'
            . '<td width="54" valign="middle" style="padding:12px 0 12px 16px;border-bottom:1px solid #eef2f7;">' . iconBadge($glyph) . '</td>'
            . '<td valign="middle" style="padding:12px 16px 12px 8px;border-bottom:1px solid #eef2f7;">'
            . '<div style="color:#7a8798;font-size:11px;letter-spacing:.6px;text-transform:uppercase;line-height:1.4;">' . escapeHtml($label) . '</div>'
            . '<div style="color:#172033;font-size:15px;line-height:1.5;white-space:pre-line;">' . $text . '</div>'
            . '</td></tr>';
    }

    return '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e3e9f1;border-radius:12px;border-collapse:separate;background:#ffffff;">' . $rows . '</table>';
}

function answerRows(array $answers): string
{
    $rows = '';
    foreach ($answers as $index => [$question, $answer]) {
        $rows .= '<tr>'
            . '<td width="54" valign="top" style="padding:12px 0 12px 16px;border-bottom:1px solid #eef2f7;">'
            . '<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td align="center" width="30" height="30" style="width:30px;height:30px;border-radius:15px;background:' . MAIL_BLUE . ';color:#ffffff;font-size:13px;font-weight:bold;line-height:30px;">' . ($index + 1) . '</td></tr></table></td>'
            . '<td valign="top" style="padding:12px 16px 12px 8px;border-bottom:1px solid #eef2f7;">'
            . '<div style="color:#7a8798;font-size:13px;line-height:1.45;">' . escapeHtml($question) . '</div>'
            . '<div style="color:#172033;font-size:15px;font-weight:bold;line-height:1.5;">' . escapeHtml($answer) . '</div>'
            . '</td></tr>';
    }

    return '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e3e9f1;border-radius:12px;border-collapse:separate;background:#ffffff;">' . $rows . '</table>';
}

function sectionTitle(string $glyph, string $text): string
{
    return '<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:28px 0 10px;"><tr>'
        . '<td valign="middle" style="padding-right:10px;">' . iconBadge($glyph) . '</td>'
        . '<td valign="middle" style="color:#172033;font-size:16px;font-weight:bold;">' . escapeHtml($text) . '</td>'
        . '</tr></table>';
}

function buttonRow(array $buttons): string
{
    $cells = '';
    foreach ($buttons as [$label, $href, $primary]) {
        $style = $primary
            ? 'background:' . MAIL_BLUE . ';color:#ffffff;border:1px solid ' . MAIL_BLUE . ';'
            : 'background:#ffffff;color:' . MAIL_BLUE . ';border:1px solid #c9d6e6;';
        $cells .= '<td align="center" style="padding:4px;"><a href="' . escapeHtml($href) . '" style="display:block;padding:13px 10px;border-radius:999px;font-size:14px;font-weight:bold;text-decoration:none;' . $style . '">' . escapeHtml($label) . '</a></td>';
    }

    return '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;"><tr>' . $cells . '</tr></table>';
}

function stepsRow(array $steps): string
{
    $cells = '';
    foreach ($steps as $number => [$glyph, $label]) {
        $cells .= '<td width="33%" align="center" valign="top" style="padding:0 4px;">'
            . '<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"><tr><td>' . iconBadge($glyph) . '</td></tr></table>'
            . '<div style="margin-top:8px;color:#172033;font-size:13px;font-weight:bold;line-height:1.4;">' . ($number + 1) . '. ' . escapeHtml($label) . '</div></td>';
    }

    return '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f6f9fc;border-radius:12px;"><tr><td style="padding:18px 8px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>' . $cells . '</tr></table></td></tr></table>';
}

function emailLayout(string $title, string $intro, string $content, string $glyph = '&#10003;', bool $isConfirmation = true): string
{
    $legal = $isConfirmation
        ? '<tr><td style="padding:22px 28px;background:#f8fafc;border-top:1px solid #e3e9f1;color:#64748b;font-size:12px;line-height:1.65;">'
            . '<strong style="color:#334155;">Datenschutz &amp; Hinweise</strong><br>'
            . '<strong>Verantwortlich:</strong> EasyTech IT-Solutions, Inhaber Ahsin Ghumman, Mittelstra&szlig;e 63, 63674 Altenstadt, <a href="mailto:info@easytechit.de" style="color:' . MAIL_BLUE . ';">info@easytechit.de</a>.<br>'
            . '<strong>Zweck &amp; Rechtsgrundlage:</strong> Wir verarbeiten Ihre Angaben ausschlie&szlig;lich, um Ihre Anfrage zu bearbeiten und zu beantworten (Art. 6 Abs. 1 lit. b DSGVO bzw. auf Grundlage Ihrer Einwilligung, Art. 6 Abs. 1 lit. a DSGVO).<br>'
            . '<strong>Empf&auml;nger:</strong> Eine Weitergabe an Dritte erfolgt nicht, au&szlig;er an technische Dienstleister (Hosting und E-Mail-Versand), die streng weisungsgebunden f&uuml;r uns arbeiten.<br>'
            . '<strong>Speicherdauer:</strong> Ihre Daten werden gel&ouml;scht, sobald die Anfrage abschlie&szlig;end bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.<br>'
            . '<strong>Ihre Rechte:</strong> Auskunft, Berichtigung, L&ouml;schung, Einschr&auml;nkung der Verarbeitung, Daten&uuml;bertragbarkeit und Widerspruch. Eine erteilte Einwilligung k&ouml;nnen Sie jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen &ndash; eine kurze E-Mail an <a href="mailto:info@easytechit.de" style="color:' . MAIL_BLUE . ';">info@easytechit.de</a> gen&uuml;gt. Zudem haben Sie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbeh&ouml;rde (in Hessen: Der Hessische Beauftragte f&uuml;r Datenschutz und Informationsfreiheit).<br>'
            . 'Mehr dazu: <a href="https://easytechit.de/datenschutz/" style="color:' . MAIL_BLUE . ';">Datenschutzerkl&auml;rung</a> &middot; <a href="https://easytechit.de/impressum/" style="color:' . MAIL_BLUE . ';">Impressum</a><br><br>'
            . 'Diese E-Mail wurde automatisch erstellt und enth&auml;lt eine Kopie Ihrer Angaben. Haben Sie diese Anfrage nicht gestellt, k&ouml;nnen Sie diese Nachricht ignorieren oder uns kurz informieren. Vertrauliche Inhalte sind nur f&uuml;r den genannten Empf&auml;nger bestimmt.'
            . '</td></tr>'
        : '<tr><td style="padding:18px 28px;background:#f8fafc;border-top:1px solid #e3e9f1;color:#64748b;font-size:12px;line-height:1.6;text-align:center;">'
            . 'Interne Benachrichtigung &middot; easytechit.de &middot; Enth&auml;lt personenbezogene Daten &ndash; vertraulich behandeln und nach Bearbeitung gem&auml;&szlig; Datenschutzvorgaben l&ouml;schen.'
            . '</td></tr>';

    return '<!doctype html><html lang="de"><head><meta charset="UTF-8">'
        . '<meta name="viewport" content="width=device-width,initial-scale=1.0">'
        . '<meta name="color-scheme" content="light"><title>' . escapeHtml($title) . '</title></head>'
        . '<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;color:#172033;">'
        . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">' . escapeHtml($intro) . '</div>'
        . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2f7;padding:24px 10px;">'
        . '<tr><td align="center"><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e3e9f1;">'
        . '<tr><td align="center" style="padding:26px 28px 18px;background:#ffffff;"><img src="' . MAIL_LOGO . '" alt="EasyTech IT-Solutions" width="170" style="display:block;width:170px;max-width:60%;height:auto;border:0;"></td></tr>'
        . '<tr><td height="4" style="height:4px;line-height:4px;font-size:0;background:' . MAIL_BLUE . ';">&nbsp;</td></tr>'
        . '<tr><td align="center" style="padding:30px 28px 6px;">'
        . '<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"><tr><td align="center" valign="middle" width="56" height="56" style="width:56px;height:56px;border-radius:28px;background:' . MAIL_BLUE . ';color:#ffffff;font-size:26px;line-height:56px;font-family:Arial,Helvetica,sans-serif;">' . $glyph . '&#xFE0E;</td></tr></table>'
        . '<h1 style="margin:16px 0 8px;color:#172033;font-size:23px;line-height:1.3;text-align:center;">' . escapeHtml($title) . '</h1>'
        . '<p style="margin:0;color:#526078;font-size:15px;line-height:1.65;text-align:center;">' . escapeHtml($intro) . '</p>'
        . '</td></tr>'
        . '<tr><td style="padding:22px 28px 30px;">' . $content . '</td></tr>'
        . $legal
        . '</table></td></tr></table></body></html>';
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
$fullName = $fields['firstName'] . ' ' . $fields['lastName'];
$isCheck = strpos($fields['service'], 'Kostenloser Digital-Check') === 0;

$qaPairs = [];
$freeMessage = $fields['message'];
if ($isCheck) {
    $freeMessage = '';
    foreach (preg_split('/\R/u', $fields['message']) ?: [] as $line) {
        if (preg_match('/^\d+\.\s+(.+?)\s+->\s+(.+)$/u', $line, $match)) {
            $qaPairs[] = [$match[1], $match[2]];
        } elseif (trim($line) !== '') {
            $freeMessage .= ($freeMessage !== '' ? "\n" : '') . trim($line);
        }
    }
}
$receivedAt = (new DateTimeImmutable('now', new DateTimeZone('Europe/Berlin')))->format('d.m.Y, H:i') . ' Uhr';

$contactItems = [
    ['&#9786;', 'Name', $fullName, ''],
    ['&#9993;', 'E-Mail', $fields['email'], 'mailto:' . $fields['email']],
    ['&#9742;', 'Telefon', $phone, $phone !== '' ? 'tel:' . preg_replace('/[^0-9+]/', '', $phone) : ''],
    ['&#9873;', 'Unternehmen', $fields['company'], ''],
    ['&#9906;', 'Land', $fields['country'], ''],
];
$requestItems = [
    ['&#9733;', $isCheck ? 'Analyse-Thema' : 'Gewünschte Leistung', $fields['service'], ''],
    ['&#9776;', 'Webdesign-Paket', $fields['webdesignPackage'], ''],
    ['&#9881;', 'IT-Kategorie', $fields['itCategory'], ''],
    ['&#9201;', 'Eingegangen', $receivedAt, ''],
];

$adminContent = sectionTitle('&#9786;', 'Absender')
    . infoRows($contactItems)
    . sectionTitle('&#9733;', 'Anfrage')
    . infoRows($requestItems);
if ($qaPairs !== []) {
    $adminContent .= sectionTitle('&#10003;', 'Antworten im Check (' . count($qaPairs) . ')') . answerRows($qaPairs);
}
if ($freeMessage !== '') {
    $adminContent .= sectionTitle('&#9998;', 'Nachricht')
        . infoRows([['&#9998;', 'Nachricht des Absenders', $freeMessage, '']]);
}
$adminButtons = [['Antworten', 'mailto:' . $fields['email'], true]];
if ($phone !== '') {
    $adminButtons[] = ['Anrufen', 'tel:' . preg_replace('/[^0-9+]/', '', $phone), false];
}
$adminContent .= buttonRow($adminButtons);

$adminPlainLines = [$isCheck ? 'Neue Analyse-Anfrage (Digital-Check)' : 'Neue Kontaktanfrage', 'Eingegangen: ' . $receivedAt, ''];
foreach (['Name' => $fullName, 'E-Mail' => $fields['email'], 'Telefon' => $phone, 'Unternehmen' => $fields['company'], 'Land' => $fields['country'], 'Leistung' => $fields['service'], 'Webdesign-Paket' => $fields['webdesignPackage'], 'IT-Kategorie' => $fields['itCategory']] as $label => $value) {
    if ($value !== '') {
        $adminPlainLines[] = $label . ': ' . $value;
    }
}
foreach ($qaPairs as $index => [$question, $answer]) {
    $adminPlainLines[] = ($index === 0 ? "\r\nAntworten:\r\n" : '') . ($index + 1) . '. ' . $question . ' -> ' . $answer;
}
if ($freeMessage !== '') {
    $adminPlainLines[] = "\r\nNachricht:\r\n" . $freeMessage;
}
$adminHtml = emailLayout(
    $isCheck ? 'Neue Analyse-Anfrage' : 'Neue Kontaktanfrage',
    $fullName . ' hat soeben ' . ($isCheck ? 'den Digital-Check ausgefüllt' : 'eine Anfrage gesendet') . '.',
    $adminContent,
    $isCheck ? '&#10003;' : '&#9993;',
    false
);
$adminSubject = $isCheck
    ? 'Neue Analyse: ' . $fullName . ' - ' . trim(preg_replace('/^Kostenloser Digital-Check\s*[–-]?\s*/u', '', $fields['service']))
    : 'Neue Kontaktanfrage: ' . $fullName;
$adminSent = sendHtmlEmail('info@easytechit.de', $adminSubject, implode("\r\n", $adminPlainLines), $adminHtml, $fields['email']);

if (!$adminSent) {
    error_log('EasyTech contact form: mail() failed.');
    respond(500, [
        'ok' => false,
        'error' => 'Die Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@easytechit.de.',
    ]);
}

$summaryItems = [
    ['&#9786;', 'Name', $fullName, ''],
    ['&#9993;', 'E-Mail', $fields['email'], ''],
    ['&#9742;', 'Telefon', $phone, ''],
    ['&#9873;', 'Unternehmen', $fields['company'], ''],
    ['&#9733;', $isCheck ? 'Analyse-Thema' : 'Gewünschte Leistung', $fields['service'], ''],
    ['&#9776;', 'Webdesign-Paket', $fields['webdesignPackage'], ''],
    ['&#9881;', 'IT-Kategorie', $fields['itCategory'], ''],
    ['&#9201;', 'Eingegangen', $receivedAt, ''],
];
$confirmationContent = stepsRow($isCheck
    ? [['&#10003;', 'Angaben erhalten'], ['&#9881;', 'Wir prüfen'], ['&#9993;', 'Analyse per E-Mail']]
    : [['&#10003;', 'Anfrage erhalten'], ['&#9881;', 'Wir prüfen'], ['&#9742;', 'Persönliche Antwort']])
    . '<p style="margin:18px 0 0;color:#526078;font-size:14px;line-height:1.7;text-align:center;">'
    . ($isCheck
        ? 'Ihre persönliche Analyse erhalten Sie <strong>in wenigen Stunden oder Tagen</strong> per E-Mail.'
        : 'Wir melden uns <strong>so schnell wie möglich</strong> persönlich bei Ihnen.')
    . '</p>'
    . sectionTitle('&#9776;', 'Ihre Angaben im Überblick')
    . infoRows($summaryItems);
if ($qaPairs !== []) {
    $confirmationContent .= sectionTitle('&#10003;', 'Ihre Antworten') . answerRows($qaPairs);
}
if ($freeMessage !== '') {
    $confirmationContent .= sectionTitle('&#9998;', 'Ihre Nachricht')
        . infoRows([['&#9998;', 'Nachricht', $freeMessage, '']]);
}
$confirmationContent .= '<p style="margin:26px 0 0;color:#526078;font-size:14px;line-height:1.7;text-align:center;">Möchten Sie etwas ergänzen? Antworten Sie einfach auf diese E-Mail.</p>'
    . buttonRow([['E-Mail schreiben', 'mailto:info@easytechit.de', true], ['Anrufen', 'tel:+4960479974441', false]])
    . '<p style="margin:24px 0 0;color:#172033;font-size:14px;line-height:1.7;text-align:center;">Viele Grüße<br><strong>Ihr Team von EasyTech IT-Solutions</strong></p>';

$confirmationPlain = "Hallo {$fields['firstName']},\r\n\r\n"
    . 'vielen Dank für ' . ($isCheck ? 'Ihren Digital-Check' : 'Ihre Nachricht') . ' bei EasyTech IT-Solutions. '
    . ($isCheck
        ? "Ihre persönliche Analyse erhalten Sie in wenigen Stunden oder Tagen per E-Mail.\r\n\r\n"
        : "Wir melden uns so schnell wie möglich persönlich bei Ihnen.\r\n\r\n")
    . "Ihre Angaben:\r\n"
    . "Name: {$fullName}\r\nE-Mail: {$fields['email']}\r\n"
    . ($phone !== '' ? "Telefon: {$phone}\r\n" : '')
    . ($fields['company'] !== '' ? "Unternehmen: {$fields['company']}\r\n" : '')
    . "Leistung: {$fields['service']}\r\n"
    . ($fields['webdesignPackage'] !== '' ? "Webdesign-Paket: {$fields['webdesignPackage']}\r\n" : '')
    . ($fields['itCategory'] !== '' ? "IT-Kategorie: {$fields['itCategory']}\r\n" : '');
foreach ($qaPairs as $index => [$question, $answer]) {
    $confirmationPlain .= ($index === 0 ? "\r\nIhre Antworten:\r\n" : '') . ($index + 1) . '. ' . $question . ' -> ' . $answer . "\r\n";
}
if ($freeMessage !== '') {
    $confirmationPlain .= "\r\nIhre Nachricht:\r\n" . $freeMessage . "\r\n";
}
$confirmationPlain .= "\r\nMöchten Sie etwas ergänzen? Antworten Sie einfach auf diese E-Mail.\r\n\r\n"
    . "Viele Grüße\r\nIhr Team von EasyTech IT-Solutions\r\n\r\n"
    . "--\r\nDatenschutz: Verantwortlich ist EasyTech IT-Solutions, Inhaber Ahsin Ghumman, Mittelstraße 63, 63674 Altenstadt, info@easytechit.de. "
    . "Wir verarbeiten Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO) und geben sie nicht an Dritte weiter, außer an technische Dienstleister (Hosting, E-Mail-Versand). "
    . "Die Daten werden gelöscht, sobald die Anfrage bearbeitet ist und keine Aufbewahrungspflichten entgegenstehen. "
    . "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie auf jederzeitigen Widerruf einer Einwilligung (E-Mail genügt) und auf Beschwerde bei einer Aufsichtsbehörde "
    . "(Hessen: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit). Mehr: https://easytechit.de/datenschutz/ | Impressum: https://easytechit.de/impressum/\r\n"
    . "Diese E-Mail wurde automatisch erstellt. Haben Sie die Anfrage nicht gestellt, ignorieren Sie sie bitte oder informieren Sie uns kurz.";
$confirmationHtml = emailLayout(
    $isCheck ? 'Vielen Dank für Ihren Digital-Check' : 'Vielen Dank für Ihre Anfrage',
    'Hallo ' . $fields['firstName'] . ', wir haben Ihre Angaben erhalten.',
    $confirmationContent
);
$confirmationSent = sendHtmlEmail(
    $fields['email'],
    $isCheck ? 'Ihr Digital-Check ist bei uns eingegangen - EasyTech IT-Solutions' : 'Wir haben Ihre Anfrage erhalten - EasyTech IT-Solutions',
    $confirmationPlain,
    $confirmationHtml,
    'info@easytechit.de'
);
if (!$confirmationSent) {
    error_log('EasyTech contact form: confirmation email could not be sent.');
}

respond(200, ['ok' => true, 'confirmationSent' => $confirmationSent]);
