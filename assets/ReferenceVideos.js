import { j as jsx } from "./react-vendor-DAatkCok.js";

const videos = [
  ["referenz-video-1.mp4", "Erklärvideo für Social Media", "Schwarz-Weiß-Erklärvideo mit kurzen Textaussagen."],
  ["referenz-video-2.mp4", "Icon-Motion-Graphic", "Animierte Icons in Grün für Vertrieb und Support."],
  ["referenz-video-3.mp4", "Typografie-Video", "Dunkles Video mit animierter Schrift."],
  ["referenz-video-4.mp4", "Animationsvideo", "Violettes Animationsvideo mit Textführung."],
  ["referenz-video-5.mp4", "Business-Clip", "Kurzer Business-Clip für Website und Social Media."],
];

function ReferenceVideos({ id = "referenzvideos", dark = false }) {
  return jsx.jsxs("section", {
    id,
    className: "px-4 sm:px-6 lg:px-10 py-10 lg:py-16",
    style: { background: dark ? "#2e4a6f" : "transparent", fontFamily: "'Satoshi', sans-serif" },
    children: jsx.jsxs("div", {
      className: "max-w-[1500px] mx-auto bg-white rounded-[32px] p-6 sm:p-10 lg:p-16",
      style: { color: "#172033", border: dark ? "none" : "1px solid #e5e7eb" },
      children: [
        jsx.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-slate-950 mb-3", children: "Referenzvideos" }),
        jsx.jsx("p", { className: "text-slate-600 mb-8 max-w-2xl", children: "Ein Einblick in Videos und Motion Design von EasyVisual. Die Videos starten erst nach Ihrem Klick." }),
        jsx.jsx("div", {
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: videos.map(([file, title, text]) =>
            jsx.jsxs("figure", { className: "rounded-2xl border border-slate-200 overflow-hidden bg-white m-0", children: [
              jsx.jsx("video", {
                className: "w-full bg-slate-900 aspect-[9/16] sm:aspect-video object-contain",
                controls: true,
                playsInline: true,
                preload: "metadata",
                src: `/assets/${file}#t=0.5`,
                "aria-label": title,
              }),
              jsx.jsxs("figcaption", { className: "p-4", children: [
                jsx.jsx("h3", { className: "font-bold text-lg", children: title }),
                jsx.jsx("p", { className: "text-slate-600 text-sm mt-1", children: text }),
              ] }),
            ] }, file)),
        }),
      ],
    }),
  });
}

export { ReferenceVideos };
