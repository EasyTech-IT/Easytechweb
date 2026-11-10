import { j as h } from "./react-vendor-DAatkCok.js";

const business = [
  ["IT-Support / Helpdesk", "80–100 €", "pro Stunde"],
  ["Systemadministration & Netzwerk", "95–130 €", "pro Stunde"],
  ["IT-Sicherheit", "120–180 €", "pro Stunde"],
  ["IT-Projektmanagement", "130–200 €", "pro Stunde"],
  ["Managed Services", "50–200 €", "pro Arbeitsplatz und Monat"],
];
const examples = [
  ["Betriebssystem installieren", "ab 120 €"],
  ["Netzwerk einrichten", "ab 120 €"],
  ["DSL und WLAN einrichten", "ab 119 €"],
  ["Fehleranalyse", "ab 49 €"],
  ["Datenrettung", "ab 150 €"],
  ["Datensicherung", "ab 99 €"],
  ["Viren entfernen", "ab 89 €"],
  ["Laptop-Display reparieren", "ab 269 €"],
  ["PC oder Laptop innen reinigen", "ab 89 €"],
  ["Systemwechsel / Klonen", "ab 159 €"],
  ["Laptop-Scharnier reparieren", "ab 150 €"],
];

export function ITPrices() {
  return h.jsx("section", { className: "et-price-section", children: h.jsxs("div", {
    className: "et-price-wrap",
    children: [
      h.jsx("h2", { children: "IT-Preise, die Sie einordnen können." }),
      h.jsx("p", { className: "et-price-intro", children: "Ob einzelne Hilfe oder laufende Betreuung: Hier sehen Sie unsere Preisrahmen und die Bedingungen für Privat- und Geschäftskunden." }),
      h.jsxs("div", { className: "et-price-columns", children: [
        h.jsxs("article", { className: "et-price-panel", children: [
          h.jsx("p", { className: "et-price-label", children: "Privatkunden · inklusive MwSt." }),
          h.jsx("h3", { children: "Hilfe vor Ort & per Fernwartung" }),
          h.jsxs("dl", { className: "et-price-list", children: [
            h.jsxs("div", { children: [h.jsx("dt", { children: "PC-Service vor Ort · je 30 Minuten" }), h.jsx("dd", { children: "60 €" })] }),
            h.jsxs("div", { children: [h.jsx("dt", { children: "Fernwartung / Telefonsupport · je 15 Minuten" }), h.jsx("dd", { children: "37,50 €" })] }),
            h.jsxs("div", { children: [h.jsx("dt", { children: "Anfahrt bis 10 km" }), h.jsx("dd", { children: "30 €" })] }),
            h.jsxs("div", { children: [h.jsx("dt", { children: "Anfahrt über 10 km / Abholung und Rückgabe" }), h.jsx("dd", { children: "auf Anfrage" })] }),
          ] }),
          h.jsx("p", { className: "et-price-note", children: "Mindestbuchung: vor Ort 1,5 Stunden (180 €), Fernwartung 30 Minuten (75 €). Anfahrt wird zusätzlich berechnet. Einsätze vor Ort zur Angebotserstellung oder Diagnose sind kostenpflichtig." }),
        ] }),
        h.jsxs("article", { className: "et-price-panel et-price-panel-dark", children: [
          h.jsx("p", { className: "et-price-label", children: "Geschäftskunden · netto zzgl. 19 % MwSt." }),
          h.jsx("h3", { children: "IT-Betreuung nach Bedarf" }),
          h.jsx("dl", { className: "et-price-list", children: business.map(([name, price, unit]) => h.jsxs("div", { children: [
            h.jsxs("dt", { children: [name, h.jsx("small", { children: unit })] }),
            h.jsx("dd", { children: price }),
          ] }, name)) }),
          h.jsx("p", { className: "et-price-note", children: "Der konkrete Preis hängt von Umfang, Infrastruktur und vereinbartem Servicelevel ab. Lizenzkosten und Leistungen werden im Angebot geklärt." }),
        ] }),
      ] }),
      h.jsxs("div", { className: "et-price-examples", children: [
        h.jsxs("div", { children: [
          h.jsx("h3", { children: "Preisbeispiele für Privatkunden" }),
          h.jsx("p", { children: "Endpreise inklusive MwSt. Der konkrete Umfang wird vorab besprochen; nicht jede Leistung ist vor Ort möglich." }),
          h.jsx("a", { className: "et-price-button", href: "/kontakt/", children: "Angebot anfragen" }),
        ] }),
        h.jsx("dl", { className: "et-price-list", children: examples.map(([name, price]) => h.jsxs("div", { children: [h.jsx("dt", { children: name }), h.jsx("dd", { children: price })] }, name)) }),
      ] }),
      h.jsxs("div", { className: "et-price-guidance", children: [
        h.jsx("h3", { children: "Was beeinflusst Ihr Angebot?" }),
        h.jsx("p", { children: "Arbeitsplätze, Server, Netzwerke, Cloud-Dienste und vereinbarte Reaktionszeiten bestimmen den Umfang. Erweiterte Erreichbarkeit kann den Preis beeinflussen. Bei laufender Betreuung klären wir, welche Wartung, Überwachung und Software-Lizenzen enthalten sind." }),
        h.jsx("p", { children: "Bei Stundenabrechnung besprechen wir Mindestzeiten und Anfahrt; für ein konkretes Anliegen können Sie auch ein Pauschalangebot anfragen. Eine erfolgreiche Reparatur oder Datenrettung kann nicht garantiert werden." }),
      ] }),
    ],
  }) });
}
