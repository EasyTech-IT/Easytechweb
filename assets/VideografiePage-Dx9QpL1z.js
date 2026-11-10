import { j as jsx } from "./react-vendor-DAatkCok.js";
import { L as Link } from "./react-router-D9cGlsqA.js";
import { S as SEO } from "./SEO-CjiI-g6D.js";

const font = "'Satoshi', sans-serif";
const services = [
  ["Werbevideos und Reels", "Kurze Werbevideos für Website, Social Media und Kampagnen – abgestimmt auf Botschaft und Zielgruppe."],
  ["Schnitt und Gestaltung", "Vorhandene Aufnahmen und Bilder werden mit Text, Musik und passenden Übergängen zu einem Video verarbeitet."],
  ["Animation und Motion Design", "Grafiken, Schrift und vorhandene Logos können animiert und bei Bedarf durch geeignetes Stockmaterial oder KI-gestützte Elemente ergänzt werden."],
];
const steps = [
  ["Ziel klären", "Wir besprechen Zielgruppe, Botschaft, Format und vorhandenes Material."],
  ["Material auswählen", "Sie stellen geeignetes Material bereit. Ergänzendes Stockmaterial und dessen Nutzungsrechte werden nach Bedarf abgestimmt."],
  ["Video gestalten", "Aus dem abgestimmten Material entsteht ein Entwurf mit Schnitt, Text und gegebenenfalls Animation."],
  ["Abstimmen und ausliefern", "Nach gemeinsamer Abstimmung erhalten Sie das Video in den vereinbarten Formaten."],
];
const questions = [
  ["Wird vor Ort gefilmt?", "Nein. Das Angebot umfasst keinen eigenen Kameradreh vor Ort. Wir arbeiten mit vorhandenem Material, Stockmaterial, Animation und bei Bedarf KI-gestützten Elementen."],
  ["Welches Material kann ich bereitstellen?", "Zum Beispiel vorhandene Videos, Fotos, Logos und Texte. Bitte stellen Sie sicher, dass die erforderlichen Nutzungsrechte vorliegen."],
  ["Welche Formate sind möglich?", "Hoch- oder Querformat für Website und Social Media sind nach Absprache möglich. Welche Varianten sinnvoll sind, hängt vom Ausgangsmaterial ab."],
  ["Welche Nutzungsrechte gelten?", "Die Nutzungsrechte und gegebenenfalls anfallende Lizenzkosten für Musik oder Stockmaterial werden vor der Umsetzung vereinbart."],
];

function Section({ id, title, children }) {
  return jsx.jsx("section", {
    id,
    className: "px-4 sm:px-6 lg:px-10 py-10 lg:py-16",
    style: { background: "#2e4a6f" },
    children: jsx.jsxs("div", {
      className: "max-w-[1500px] mx-auto bg-white rounded-[32px] p-6 sm:p-10 lg:p-16",
      style: { color: "#172033" },
      children: [
        jsx.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-slate-950 mb-8", children: title }),
        children,
      ],
    }),
  });
}

function VideografiePage() {
  return jsx.jsxs(jsx.Fragment, {
    children: [
      jsx.jsx(SEO, { config: {
        title: "Werbevideos und Motion Design | EasyTech Altenstadt",
        description: "Werbevideos und Reels aus vorhandenem Material, Stockmaterial und Animation – ohne eigenen Kameradreh vor Ort.",
        canonical: "https://easytechit.de/videografie/",
        keywords: "Werbevideos Altenstadt, Reels, Videoschnitt, Motion Design",
        breadcrumbs: [{ name: "Startseite", url: "https://easytechit.de/" }, { name: "Werbevideos", url: "https://easytechit.de/videografie/" }],
        jsonLd: [],
      } }),
      jsx.jsxs("div", {
        style: { fontFamily: font },
        children: [
          jsx.jsx("section", {
            className: "px-4 sm:px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28",
            style: { background: "linear-gradient(140deg,#071421,#2e4a6f)", color: "white" },
            children: jsx.jsxs("div", {
              className: "max-w-[1380px] mx-auto",
              children: [
                jsx.jsx("p", { className: "text-sky-300 uppercase tracking-widest text-sm font-semibold mb-4", children: "Weitere Leistungen · Altenstadt & Wetterau" }),
                jsx.jsx("h1", { className: "text-4xl sm:text-6xl font-bold max-w-3xl", children: "EasyVisual – Werbevideos und Motion Design für Unternehmen" }),
                jsx.jsx("p", { className: "text-lg leading-relaxed text-white/80 max-w-2xl mt-6", children: "Wir gestalten Werbevideos und Reels aus vorhandenem Material, Stockmaterial und Animation. Ein eigener Kameradreh vor Ort gehört nicht zu diesem Angebot." }),
                jsx.jsxs("div", { className: "flex flex-wrap gap-4 mt-8", children: [
                  jsx.jsx(Link, { to: "/kontakt", className: "inline-flex bg-white text-slate-950 font-semibold rounded-full px-6 py-3", style: { color: "#172033" }, children: "Werbevideo anfragen" }),
                  jsx.jsx("a", { href: "#leistungen", className: "inline-flex border border-white/50 text-white rounded-full px-6 py-3", children: "Leistungen ansehen" }),
                ] }),
              ],
            }),
          }),
          jsx.jsx(Section, { id: "leistungen", title: "Werbevideos für Ihre Kanäle", children:
            jsx.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map(([title, text]) =>
              jsx.jsxs("article", { className: "rounded-2xl border border-slate-200 p-6", children: [
                jsx.jsx("h3", { className: "text-xl font-bold mb-3", children: title }),
                jsx.jsx("p", { className: "text-slate-600 leading-relaxed", children: text }),
              ] }, title)) }),
          }),
          jsx.jsx(Section, { id: "workflow", title: "So entsteht Ihr Video", children:
            jsx.jsx("ol", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: steps.map(([title, text], index) =>
              jsx.jsxs("li", { className: "rounded-2xl bg-slate-50 p-6", children: [
                jsx.jsx("span", { className: "text-sky-700 font-bold", children: `0${index + 1}` }),
                jsx.jsx("h3", { className: "text-xl font-bold mt-3 mb-2", children: title }),
                jsx.jsx("p", { className: "text-slate-600 leading-relaxed", children: text }),
              ] }, title)) }),
          }),
          jsx.jsx(Section, { id: "faq", title: "Häufige Fragen", children:
            jsx.jsx("div", { className: "max-w-3xl", children: questions.map(([question, answer]) =>
              jsx.jsxs("details", { className: "border-b border-slate-200 py-5", children: [
                jsx.jsx("summary", { className: "cursor-pointer font-semibold text-slate-900", children: question }),
                jsx.jsx("p", { className: "mt-3 text-slate-600 leading-relaxed", children: answer }),
              ] }, question)) }),
          }),
          jsx.jsx(Section, { id: "kontakt-cta", title: "Sie haben eine Idee für ein Werbevideo?", children:
            jsx.jsxs("div", { children: [
              jsx.jsx("p", { className: "text-slate-600 mb-5", children: "Beschreiben Sie uns Ihr Vorhaben und das vorhandene Material." }),
              jsx.jsx(Link, { to: "/kontakt", className: "inline-flex bg-[#2e4a6f] text-white rounded-full px-6 py-3 font-semibold", children: "Projekt anfragen" }),
              jsx.jsx("p", { className: "mt-6", children: jsx.jsx(Link, { to: "/it/business", className: "text-[#2e4a6f] underline", children: "Mehr über unsere IT-Betreuung" }) }),
            ] }),
          }),
        ],
      }),
    ],
  });
}

export { VideografiePage };
