import { j as h } from "./react-vendor-DAatkCok.js";

export function ContactUrgency({ id, value, onChange, className }) {
  return h.jsxs("div", { className: "mb-5", children: [
    h.jsx("label", { htmlFor: id, className: "block text-[13px] text-[#404040] mb-2", style: { fontWeight: 500, lineHeight: 1 }, children: "Wie dringend ist Ihr Anliegen? (optional)" }),
    h.jsxs("select", { id, name: "urgency", value, onChange: event => onChange("urgency", event.target.value), className, children: [
      h.jsx("option", { value: "", children: "Bitte auswählen" }),
      h.jsx("option", { value: "Dringend", children: "Dringend" }),
      h.jsx("option", { value: "Zeitnah", children: "Zeitnah" }),
      h.jsx("option", { value: "Flexibel", children: "Flexibel" }),
    ] }),
  ] });
}
