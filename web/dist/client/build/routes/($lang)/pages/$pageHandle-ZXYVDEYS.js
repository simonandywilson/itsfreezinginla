import "/build/_shared/chunk-AUYLHJJM.js";
import {
  PageHeader
} from "/build/_shared/chunk-2T36A5ND.js";
import "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/pages/$pageHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description
});
var handle = {
  seo
};
function Page() {
  const { page } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: page.title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      dangerouslySetInnerHTML: { __html: page.body },
      className: "prose dark:prose-invert"
    },
    void 0,
    false,
    {
      fileName: "app/routes/($lang)/pages/$pageHandle.tsx",
      lineNumber: 52,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($lang)/pages/$pageHandle.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/pages/$pageHandle.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Page as default,
  handle
};
//# sourceMappingURL=/build/routes/($lang)/pages/$pageHandle-ZXYVDEYS.js.map
