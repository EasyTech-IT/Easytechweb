import { j as jsx } from "./react-vendor-DAatkCok.js";
import { S as SEO, P as pages } from "./SEO-CjiI-g6D.js";
import { WebdesignPrice, WebdesignPackages, ITComparison } from "./ITContent.js?v=5";
import { ITPrices } from "./ITPrices.js";
import { VideoPrices } from "./ServiceCatalog.js?v=3";

function PreisePage() {
  return jsx.jsxs(jsx.Fragment, {
    children: [
      jsx.jsx(SEO, { config: pages.preise }),
      jsx.jsx(WebdesignPrice, { page: true }),
      jsx.jsx(ITPrices, {}),
      jsx.jsx(VideoPrices, {}),
      jsx.jsx(WebdesignPackages, {}),
      jsx.jsx("section", { className: "et-price-section", children: jsx.jsx("div", { className: "et-price-wrap", children: jsx.jsx(ITComparison, {}) }) }),
    ],
  });
}

export { PreisePage };
