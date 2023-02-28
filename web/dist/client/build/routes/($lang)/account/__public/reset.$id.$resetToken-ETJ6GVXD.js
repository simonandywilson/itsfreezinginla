import {
  getInputStyleClasses
} from "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
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

// app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Reset Password"
  };
};
function Reset() {
  const actionData = useActionData();
  const [nativePasswordError, setNativePasswordError] = (0, import_react2.useState)(
    null
  );
  const [nativePasswordConfirmError, setNativePasswordConfirmError] = (0, import_react2.useState)(null);
  const passwordInput = (0, import_react2.useRef)(null);
  const passwordConfirmInput = (0, import_react2.useRef)(null);
  const validatePasswordConfirm = () => {
    if (!passwordConfirmInput.current)
      return;
    if (passwordConfirmInput.current.value.length && passwordConfirmInput.current.value !== passwordInput.current?.value) {
      setNativePasswordConfirmError("The two passwords entered did not match.");
    } else if (passwordConfirmInput.current.validity.valid || !passwordConfirmInput.current.value.length) {
      setNativePasswordConfirmError(null);
    } else {
      setNativePasswordConfirmError(
        passwordConfirmInput.current.validity.valueMissing ? "Please re-enter the password" : "Passwords must be at least 8 characters"
      );
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center my-24 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: "Reset Password." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "Enter a new password for your account." }, void 0, false, {
      fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        noValidate: true,
        className: "pt-6 pb-8 mt-4 mb-4 space-y-3",
        children: [
          actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mb-6 bg-zinc-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 text-s text-contrast", children: actionData.formError }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: passwordInput,
                className: `mb-1 ${getInputStyleClasses(nativePasswordError)}`,
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                placeholder: "Password",
                "aria-label": "Password",
                minLength: 8,
                required: true,
                autoFocus: true,
                onBlur: (event) => {
                  if (event.currentTarget.validity.valid || !event.currentTarget.value.length) {
                    setNativePasswordError(null);
                    validatePasswordConfirm();
                  } else {
                    setNativePasswordError(
                      event.currentTarget.validity.valueMissing ? "Please enter a password" : "Passwords must be at least 8 characters"
                    );
                  }
                }
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
                lineNumber: 157,
                columnNumber: 13
              },
              this
            ),
            nativePasswordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
              " ",
              nativePasswordError,
              " \xA0"
            ] }, void 0, true, {
              fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
            lineNumber: 156,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                ref: passwordConfirmInput,
                className: `mb-1 ${getInputStyleClasses(
                  nativePasswordConfirmError
                )}`,
                id: "passwordConfirm",
                name: "passwordConfirm",
                type: "password",
                autoComplete: "current-password",
                placeholder: "Re-enter password",
                "aria-label": "Re-enter password",
                minLength: 8,
                required: true,
                autoFocus: true,
                onBlur: validatePasswordConfirm
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
                lineNumber: 194,
                columnNumber: 13
              },
              this
            ),
            nativePasswordConfirmError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
              " ",
              nativePasswordConfirmError,
              " \xA0"
            ] }, void 0, true, {
              fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
              lineNumber: 212,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
            lineNumber: 193,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",
              type: "submit",
              children: "Save"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
              lineNumber: 219,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
            lineNumber: 218,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
        lineNumber: 146,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
    lineNumber: 142,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($lang)/account/__public/reset.$id.$resetToken.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
export {
  Reset as default,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/account/__public/reset.$id.$resetToken-ETJ6GVXD.js.map
