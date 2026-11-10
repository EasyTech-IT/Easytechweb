if (!document.querySelector('link[href="/css/whatsapp-contact.css"]')) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/css/whatsapp-contact.css";
  document.head.append(stylesheet);
}

const topics = {
  "/it/netzwerk-wlan": "Netzwerk und WLAN",
  "/it/pc-hilfe": "PC- und Mac-Hilfe",
  "/it/telefonie-voip": "Telefonie und VoIP",
  "/it/email-cloud": "E-Mail und Cloud",
  "/it/backup-sicherheit": "Backup und Sicherheit",
  "/it/smart-home": "Smart Home und Multimedia",
  "/it/business": "IT-Betreuung für mein Unternehmen",
  "/it/privat": "private IT-Unterstützung",
  "/it/ki-beratung": "Digitalisierung und KI-Beratung",
  "/webdesign": "Webdesign",
  "/videografie": "Werbevideos und Motion Design",
};

export function whatsappUrl(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const topic = topics[path];
  const message = topic
    ? `Hallo EasyTech, ich interessiere mich für ${topic} und möchte mein Anliegen besprechen.`
    : "Hallo EasyTech, ich möchte mein Anliegen mit Ihnen besprechen.";
  return `https://wa.me/4960479974441?text=${encodeURIComponent(message)}`;
}
