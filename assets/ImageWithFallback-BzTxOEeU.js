import { r as React, j as jsx } from "./react-vendor-DAatkCok.js";

const localImages = {
  "it-arbeitsplatz": [1080, "Entwickler arbeitet an mehreren Bildschirmen", true],
  "buero-zusammenarbeit": [1080, "Besprechung mit Laptops an einem Whiteboard", true],
  "wohnzimmer-bildschirm": [960, "Wohnzimmer mit großem Bildschirm", true],
  "geschaeftspartnerschaft": [810, "Geschäftspartner begrüßen sich vor einem Bürogebäude", false],
  "mode": [1440, "Kleidung und Schuhe auf einer hellen Fläche", false],
  "ki-illustration": [2560, "Illustration eines KI-Chips in einer Glühbirne", false],
  "pflegeprodukte": [1440, "Dunkle Flaschen mit Haarpflegeprodukten", false],
};

function ImageWithFallback(props) {
  const [failed, setFailed] = React.useState(false);
  const { src, alt, style, className, ...rest } = props;
  const match = typeof src === "string" && src.match(/^\/assets\/unsplash\/(.+)-1440\.webp$/);
  const image = match && localImages[match[1]];
  const responsive = image ? {
    srcSet: `/assets/unsplash/${match[1]}-720.webp 720w, ${src} 1440w`,
    sizes: image[2] ? "100vw" : "(min-width: 1024px) 50vw, 100vw",
    width: 1440,
    height: image[0],
    loading: image[2] ? "eager" : "lazy",
    decoding: "async",
  } : {};

  if (failed) {
    return jsx.jsx("div", {
      className: `inline-block bg-gray-100 text-center align-middle ${className ?? ""}`,
      style,
      role: "img",
      "aria-label": alt || "Bild konnte nicht geladen werden",
    });
  }
  return jsx.jsx("img", {
    src,
    alt: image && alt !== "" ? image[1] : alt,
    className,
    style,
    ...responsive,
    ...rest,
    onError: () => setFailed(true),
  });
}

export { ImageWithFallback as I };
