import {
  favicon_default
} from "/build/_shared/chunk-Z7RIBLB2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/assets/styles.css
var styles_default = "/build/_assets/styles-O7MQZLJO.css";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/Layout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Layout(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hydrogen-virtual-route", children: props.children }, void 0, false, {
    fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/Layout.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var links = () => {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 28,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
      lineNumber: 27,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/@shopify/cli-hydrogen/dist/virtual-routes/virtual-root.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/virtual-routes/virtual-root-ABMANGVZ.js.map
