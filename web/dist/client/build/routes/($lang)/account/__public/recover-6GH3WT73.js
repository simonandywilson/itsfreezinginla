import {
  Link
} from "/build/_shared/chunk-2T36A5ND.js";
import {
  getInputStyleClasses
} from "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Form,
  require_react,
  useActionData
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/account/__public/recover.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Recover Password"
  };
};
function Recover() {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = (0, import_react2.useState)(null);
  const isSubmitted = actionData?.resetRequested;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center my-24 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full", children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: "Request Sent." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/recover.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/recover.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/account/__public/recover.tsx",
    lineNumber: 71,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: "Forgot Password." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/recover.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Enter the email address associated with your account to receive a link to reset your password." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/recover.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        noValidate: true,
        className: "pt-6 pb-8 mt-4 mb-4 space-y-3",
        children: [
          actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mb-6 bg-zinc-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 text-s text-contrast", children: actionData.formError }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: `mb-1 ${getInputStyleClasses(nativeEmailError)}`,
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: true,
                placeholder: "Email address",
                "aria-label": "Email address",
                autoFocus: true,
                onBlur: (event) => {
                  setNativeEmailError(
                    event.currentTarget.value.length && !event.currentTarget.validity.valid ? "Invalid email address" : null
                  );
                }
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/account/__public/recover.tsx",
                lineNumber: 100,
                columnNumber: 17
              },
              this
            ),
            nativeEmailError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
              nativeEmailError,
              " \xA0"
            ] }, void 0, true, {
              fileName: "app/routes/($lang)/account/__public/recover.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",
              type: "submit",
              children: "Request Reset Link"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/account/__public/recover.tsx",
              lineNumber: 127,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-8 border-t border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "align-baseline text-sm mt-6", children: [
            "Return to \xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "inline underline", to: "/account/login", children: "Login" }, void 0, false, {
              fileName: "app/routes/($lang)/account/__public/recover.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/recover.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/($lang)/account/__public/recover.tsx",
        lineNumber: 87,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/account/__public/recover.tsx",
    lineNumber: 80,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/account/__public/recover.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/account/__public/recover.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
export {
  Recover as default,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/account/__public/recover-6GH3WT73.js.map
