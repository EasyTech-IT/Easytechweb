import { j as e } from "./react-vendor-DAatkCok.js";

function ImpressumPage() {
  return e.jsxs("section", {
    className: "relative overflow-hidden pt-[100px]",
    style: { background: "#2e4a6f" },
    children: [
      e.jsx("div", {
        className:
          "max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24",
        children: e.jsxs("main", {
          className: "max-w-[900px] mx-auto",
          style: {
            backgroundColor: "#fff",
            color: "#171717",
            borderRadius: "clamp(32px, 5vw, 64px)",
            padding: "clamp(32px, 5vw, 64px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
          },
          children: [
            e.jsx("h1", {
              className: "text-[32px] sm:text-[48px] text-[#171717]",
              style: { color: "#171717", fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 8px" },
              children: "Impressum",
            }),
            e.jsx("p", {
              className: "mb-10 text-[#5d636f]",
              children: "Angaben gemäß § 5 TMG",
            }),
            e.jsxs("div", {
              className: "grid gap-8 sm:grid-cols-2",
              style: { display: "grid", gap: "32px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" },
              children: [
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className: "mb-3 text-[20px] font-bold",
                      children: "Anbieter",
                    }),
                    e.jsx("p", {
                      children: e.jsx("strong", {
                        children: "EasyTech IT-Solutions",
                      }),
                    }),
                    e.jsx("p", { children: "Inhaber: Ahsin Ghumman" }),
                    e.jsx("p", { children: "Mittelstraße 63" }),
                    e.jsx("p", { children: "63674 Altenstadt" }),
                  ],
                }),
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className: "mb-3 text-[20px] font-bold",
                      children: "Kontakt",
                    }),
                    e.jsxs("p", {
                      children: [
                        "Telefon: ",
                        e.jsx("a", {
                          href: "tel:+4960479974441",
                          children: "06047 9974441",
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      children: [
                        "E-Mail: ",
                        e.jsx("a", {
                          href: "mailto:info@easytechit.de",
                          children: "info@easytechit.de",
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      children: [
                        "Website: ",
                        e.jsx("a", {
                          href: "https://easytechit.de/",
                          children: "https://easytechit.de",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className: "mb-3 text-[20px] font-bold",
                      children: "Umsatzsteuer-Identifikationsnummer",
                    }),
                    e.jsx("p", {
                      children:
                        "Umsatzsteuer-IdNr. gemäß § 27 a Umsatzsteuergesetz:",
                    }),
                    e.jsx("p", { children: "DE460584737" }),
                  ],
                }),
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className: "mb-3 text-[20px] font-bold",
                      children:
                        "Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)",
                    }),
                    e.jsx("p", { children: "Ahsin Ghumman" }),
                    e.jsx("p", { children: "Mittelstraße 63" }),
                    e.jsx("p", { children: "63674 Altenstadt" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}

export { ImpressumPage };
