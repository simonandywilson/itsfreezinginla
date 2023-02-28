import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Button,
  Text
} from "/build/_shared/chunk-2T36A5ND.js";
import {
  getInputStyleClasses
} from "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  flattenConnection
} from "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Form,
  useActionData,
  useOutletContext,
  useParams,
  useTransition
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/account/__private/address/$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var handle = {
  renderInModal: true
};
function EditAddress() {
  const { id: addressId } = useParams();
  const isNewAddress = addressId === "add";
  const actionData = useActionData();
  const transition = useTransition();
  const { customer } = useOutletContext();
  const addresses = flattenConnection(customer.addresses);
  const defaultAddress = customer.defaultAddress;
  const normalizedAddress = decodeURIComponent(addressId ?? "").split("?")[0];
  const address = addresses.find(
    (address2) => address2.id.startsWith(normalizedAddress)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mt-4 mb-6", as: "h3", size: "lead", children: isNewAddress ? "Add address" : "Edit address" }, void 0, false, {
      fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "hidden",
          name: "addressId",
          value: address?.id ?? addressId
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 170,
          columnNumber: 11
        },
        this
      ),
      actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mb-6 bg-red-100 rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 text-sm text-red-900", children: actionData.formError }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 177,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "firstName",
          name: "firstName",
          required: true,
          type: "text",
          autoComplete: "given-name",
          placeholder: "First name",
          "aria-label": "First name",
          defaultValue: address?.firstName ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 181,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "lastName",
          name: "lastName",
          required: true,
          type: "text",
          autoComplete: "family-name",
          placeholder: "Last name",
          "aria-label": "Last name",
          defaultValue: address?.lastName ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 194,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "company",
          name: "company",
          type: "text",
          autoComplete: "organization",
          placeholder: "Company",
          "aria-label": "Company",
          defaultValue: address?.company ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 207,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "address1",
          name: "address1",
          type: "text",
          autoComplete: "address-line1",
          placeholder: "Address line 1*",
          required: true,
          "aria-label": "Address line 1",
          defaultValue: address?.address1 ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 219,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "address2",
          name: "address2",
          type: "text",
          autoComplete: "address-line2",
          placeholder: "Address line 2",
          "aria-label": "Address line 2",
          defaultValue: address?.address2 ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 232,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "city",
          name: "city",
          type: "text",
          required: true,
          autoComplete: "address-level2",
          placeholder: "City",
          "aria-label": "City",
          defaultValue: address?.city ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 244,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "province",
          name: "province",
          type: "text",
          autoComplete: "address-level1",
          placeholder: "State / Province",
          required: true,
          "aria-label": "State",
          defaultValue: address?.province ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 257,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "zip",
          name: "zip",
          type: "text",
          autoComplete: "postal-code",
          placeholder: "Zip / Postal Code",
          required: true,
          "aria-label": "Zip",
          defaultValue: address?.zip ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 270,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "country",
          name: "country",
          type: "text",
          autoComplete: "country-name",
          placeholder: "Country",
          required: true,
          "aria-label": "Country",
          defaultValue: address?.country ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 283,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 282,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: getInputStyleClasses(),
          id: "phone",
          name: "phone",
          type: "tel",
          autoComplete: "tel",
          placeholder: "Phone",
          "aria-label": "Phone",
          defaultValue: address?.phone ?? ""
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 296,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 295,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "checkbox",
            name: "defaultAddress",
            id: "defaultAddress",
            defaultChecked: defaultAddress?.id === address?.id,
            className: "border-gray-500 rounded-sm cursor-pointer border-1"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
            lineNumber: 308,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "inline-block ml-2 text-sm cursor-pointer",
            htmlFor: "defaultAddress",
            children: "Set as default address"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
            lineNumber: 315,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 307,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          className: "w-full rounded focus:shadow-outline",
          type: "submit",
          variant: "primary",
          disabled: transition.state !== "idle",
          children: transition.state !== "idle" ? "Saving" : "Save"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 323,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          to: "..",
          className: "w-full mt-2 rounded focus:shadow-outline",
          variant: "secondary",
          children: "Cancel"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
          lineNumber: 333,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
        lineNumber: 332,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/account/__private/address/$id.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
}
export {
  EditAddress as default,
  handle
};
//# sourceMappingURL=/build/routes/($lang)/account/__private/address/$id-TT7JMDIY.js.map
