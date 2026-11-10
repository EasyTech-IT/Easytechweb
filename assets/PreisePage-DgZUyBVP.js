import { j as jsx } from "./react-vendor-DAatkCok.js";
import { S as SEO, P as pages } from "./SEO-CjiI-g6D.js";
import { WebdesignPrice } from "./ITContent.js?v=2";
import { ITPrices } from "./ITPrices.js";

function PreisePage() {
  return jsx.jsxs(jsx.Fragment, {
    children: [
      jsx.jsx(SEO, { config: pages.preise }),
      jsx.jsx(WebdesignPrice, { page: true }),
      jsx.jsx(ITPrices, {}),
    ],
  });
}

export { PreisePage };
