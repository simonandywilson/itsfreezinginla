import {
  Button,
  Grid,
  Heading,
  Link,
  PageHeader,
  Pagination,
  Section,
  getImageLoadingPriority
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

// app/routes/($lang)/collections/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var handle = {
  seo: {
    title: "All Collections"
  }
};
var meta = () => {
  return {
    title: "All Collections"
  };
};
function Collections() {
  const { collections } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Collections" }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { connection: collections, children: ({
      endCursor,
      hasNextPage,
      hasPreviousPage,
      nextPageUrl,
      nodes,
      prevPageUrl,
      startCursor,
      nextLinkRef,
      isLoading
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      hasPreviousPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          to: prevPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasNextPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Previous products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 70,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Grid,
        {
          items: nodes.length === 3 ? 3 : 2,
          "data-test": "collection-grid",
          children: nodes.map((collection, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CollectionCard,
            {
              collection,
              loading: getImageLoadingPriority(i, 2)
            },
            collection.id,
            false,
            {
              fileName: "app/routes/($lang)/collections/index.tsx",
              lineNumber: 94,
              columnNumber: 19
            },
            this
          ))
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 89,
          columnNumber: 15
        },
        this
      ),
      hasNextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          ref: nextLinkRef,
          to: nextPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasPreviousPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Next products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/collections/index.tsx",
          lineNumber: 103,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/collections/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
function CollectionCard({
  collection,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        alt: collection.title,
        src: collection.image.url,
        height: 400,
        sizes: "(max-width: 32em) 100vw, 33vw",
        width: 600,
        loading
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/collections/index.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h3", size: "copy", children: collection.title }, void 0, false, {
      fileName: "app/routes/($lang)/collections/index.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/collections/index.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
export {
  Collections as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/collections/index-2MBF27Y2.js.map
