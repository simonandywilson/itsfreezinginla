import {
  Grid,
  Link,
  PageHeader,
  Section,
  getImageLoadingPriority
} from "/build/_shared/chunk-2T36A5ND.js";
import "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  Image
} from "/build/_shared/chunk-IKF5OSCB.js";
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

// app/routes/($lang)/journal/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BLOG_HANDLE = "Journal";
var handle = {
  seo: {
    title: "Journal"
  }
};
var meta = () => {
  return {
    title: "All Journals"
  };
};
function Journals() {
  const { articles } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: BLOG_HANDLE }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { as: "ol", layout: "blog", children: articles.map((article, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ArticleCard,
      {
        blogHandle: BLOG_HANDLE.toLowerCase(),
        article,
        loading: getImageLoadingPriority(i, 2)
      },
      article.id,
      false,
      {
        fileName: "app/routes/($lang)/journal/index.tsx",
        lineNumber: 69,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/journal/index.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
function ArticleCard({
  blogHandle,
  article,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${blogHandle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image aspect-[3/2]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: article.image.altText || article.title,
        className: "object-cover w-full",
        data: article.image,
        height: 400,
        loading,
        sizes: "(min-width: 768px) 50vw, 100vw",
        width: 600,
        loaderOptions: {
          scale: 2,
          crop: "center"
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/journal/index.tsx",
        lineNumber: 96,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-4 font-medium", children: article.title }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block mt-1", children: article.publishedAt }, void 0, false, {
      fileName: "app/routes/($lang)/journal/index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/journal/index.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/($lang)/journal/index.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
export {
  Journals as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/journal/index-65Q6PAWN.js.map
