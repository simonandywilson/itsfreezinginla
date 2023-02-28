import "/build/_shared/chunk-IB7S47YJ.js";
import "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Button,
  Text,
  clsx_m_default
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
  useActionData,
  useOutletContext,
  useTransition
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/account/__private/edit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var handle = {
  renderInModal: true
};
function AccountDetailsEdit() {
  const actionData = useActionData();
  const { customer } = useOutletContext();
  const transition = useTransition();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mt-4 mb-6", as: "h3", size: "lead", children: "Update your profile" }, void 0, false, {
      fileName: "app/routes/($lang)/account/__private/edit.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mb-6 bg-red-100 rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 text-sm text-red-900", children: actionData.formError }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "firstName",
          name: "firstName",
          type: "text",
          autoComplete: "given-name",
          placeholder: "First name",
          "aria-label": "First name",
          defaultValue: customer.firstName ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 145,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "lastName",
          name: "lastName",
          type: "text",
          autoComplete: "family-name",
          placeholder: "Last name",
          "aria-label": "Last name",
          defaultValue: customer.lastName ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 157,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "phone",
          name: "phone",
          type: "tel",
          autoComplete: "tel",
          placeholder: "Mobile",
          "aria-label": "Mobile",
          defaultValue: customer.phone ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 169,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: getInputStyleClasses(actionData?.fieldErrors?.email),
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            placeholder: "Email address",
            "aria-label": "Email address",
            defaultValue: customer.email ?? ""
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/account/__private/edit.tsx",
            lineNumber: 181,
            columnNumber: 11
          },
          this
        ),
        actionData?.fieldErrors?.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
          actionData.fieldErrors.email,
          " \xA0"
        ] }, void 0, true, {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mb-6 mt-6", as: "h3", size: "lead", children: "Change your password" }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Password,
        {
          name: "currentPassword",
          label: "Current password",
          passwordError: actionData?.fieldErrors?.currentPassword
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 201,
          columnNumber: 9
        },
        this
      ),
      actionData?.fieldErrors?.currentPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", className: "mt-1 text-red-500", children: [
        actionData.fieldErrors.currentPassword,
        " \xA0"
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Password,
        {
          name: "newPassword",
          label: "New password",
          passwordError: actionData?.fieldErrors?.newPassword
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 211,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Password,
        {
          name: "newPassword2",
          label: "Re-enter new password",
          passwordError: actionData?.fieldErrors?.newPassword2
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 216,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Text,
        {
          size: "fine",
          color: "subtle",
          className: clsx_m_default(
            "mt-1",
            actionData?.fieldErrors?.newPassword && "text-red-500"
          ),
          children: "Passwords must be at least 8 characters."
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 221,
          columnNumber: 9
        },
        this
      ),
      actionData?.fieldErrors?.newPassword2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 231,
        columnNumber: 50
      }, this) : null,
      actionData?.fieldErrors?.newPassword2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", className: "mt-1 text-red-500", children: [
        actionData.fieldErrors.newPassword2,
        " \xA0"
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          className: "text-sm mb-2",
          variant: "primary",
          width: "full",
          type: "submit",
          disabled: transition.state !== "idle",
          children: transition.state !== "idle" ? "Saving" : "Save"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/edit.tsx",
          lineNumber: 238,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { to: "..", className: "text-sm", variant: "secondary", width: "full", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/edit.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/account/__private/edit.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/account/__private/edit.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function Password({
  name,
  passwordError,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "input",
    {
      className: getInputStyleClasses(passwordError),
      id: name,
      name,
      type: "password",
      autoComplete: name === "currentPassword" ? "current-password" : void 0,
      placeholder: label,
      "aria-label": label,
      minLength: 8
    },
    void 0,
    false,
    {
      fileName: "app/routes/($lang)/account/__private/edit.tsx",
      lineNumber: 269,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($lang)/account/__private/edit.tsx",
    lineNumber: 268,
    columnNumber: 5
  }, this);
}
export {
  AccountDetailsEdit as default,
  handle
};
//# sourceMappingURL=/build/routes/($lang)/account/__private/edit-MGL4BT67.js.map
