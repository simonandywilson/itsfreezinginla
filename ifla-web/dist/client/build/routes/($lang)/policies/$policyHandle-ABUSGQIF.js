import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Button,
  PageHeader,
  Section
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

// app/routes/($lang)/policies/$policyHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return {
    title: data?.policy?.title ?? "Policies"
  };
};
function Policies() {
  const { policy } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Section,
    {
      padding: "all",
      display: "flex",
      className: "flex-col items-baseline w-full gap-8 md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          PageHeader,
          {
            heading: policy.title,
            className: "grid items-start flex-grow gap-4 md:sticky top-36 md:w-5/12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Button,
              {
                className: "justify-self-start",
                variant: "inline",
                to: "/policies",
                children: "\u2190 Back to Policies"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
                lineNumber: 66,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
            lineNumber: 62,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow w-full md:w-7/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            dangerouslySetInnerHTML: { __html: policy.body },
            className: "prose dark:prose-invert"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
            lineNumber: 75,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
      lineNumber: 57,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($lang)/policies/$policyHandle.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
export {
  Policies as default,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/policies/$policyHandle-ABUSGQIF.js.map
