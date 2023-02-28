import "/build/_shared/chunk-AUYLHJJM.js";
import {
  ATTR_LOADING_EAGER,
  PageHeader,
  Section
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

// app/styles/custom-font.css
var custom_font_default = "/build/_assets/custom-font-JUI4HMVF.css";

// app/routes/($lang)/journal/$journalHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => ({
  title: data?.article?.seo?.title,
  description: data?.article?.seo?.description,
  titleTemplate: "%s | Journal"
});
var handle = {
  seo
};
var meta = ({
  data
}) => {
  return {
    title: data?.article?.seo?.title ?? "Article",
    description: data?.article?.seo?.description
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: custom_font_default }];
};
function Article() {
  const { article, formattedDate } = useLoaderData();
  const { title, image, contentHtml, author } = article;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: title, variant: "blogPost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      formattedDate,
      " \xB7 ",
      author.name
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { as: "article", padding: "x", children: [
      image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Image,
        {
          data: image,
          className: "w-full mx-auto mt-8 md:mt-16 max-w-7xl",
          sizes: "90vw",
          widths: [400, 800, 1200],
          width: "100px",
          loading: ATTR_LOADING_EAGER,
          loaderOptions: {
            scale: 2,
            crop: "center"
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          dangerouslySetInnerHTML: { __html: contentHtml },
          className: "article"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/journal/$journalHandle.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
export {
  Article as default,
  handle,
  links,
  meta
};
//# sourceMappingURL=/build/routes/($lang)/journal/$journalHandle-NYLIIQCA.js.map
