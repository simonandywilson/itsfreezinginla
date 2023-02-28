import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  FeaturedCollections,
  Heading,
  Input,
  PageHeader,
  ProductGrid,
  ProductSwimlane,
  Section,
  Text
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
  Await,
  Form,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/search.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function search_default() {
  const { searchTerm, products, noResultRecommendations } = useLoaderData();
  const noResults = products?.nodes?.length === 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h1", size: "copy", children: "Search" }, void 0, false, {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "relative flex w-full text-heading", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input,
          {
            defaultValue: searchTerm,
            placeholder: "Search\u2026",
            type: "search",
            variant: "search",
            name: "q"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($lang)/search.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute right-0 py-2", type: "submit", children: "Go" }, void 0, false, {
          fileName: "app/routes/($lang)/search.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/search.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    !searchTerm || noResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      noResults && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { padding: "x", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "opacity-50", children: "No results, try something else." }, void 0, false, {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Await,
        {
          errorElement: "There was a problem loading related products",
          resolve: noResultRecommendations,
          children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              FeaturedCollections,
              {
                title: "Trending Collections",
                collections: data.featuredCollections
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/search.tsx",
                lineNumber: 65,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              ProductSwimlane,
              {
                title: "Trending Products",
                products: data.featuredProducts
              },
              void 0,
              false,
              {
                fileName: "app/routes/($lang)/search.tsx",
                lineNumber: 69,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($lang)/search.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/search.tsx",
          lineNumber: 59,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($lang)/search.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductGrid,
      {
        url: `/search?q=${searchTerm}`,
        collection: { products }
      },
      "search",
      false,
      {
        fileName: "app/routes/($lang)/search.tsx",
        lineNumber: 80,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/search.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/search.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
var SEARCH_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query search(
    $searchTerm: String
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $after: String
  ) @inContext(country: $country, language: $language) {
    products(
      first: $pageBy
      sortKey: RELEVANCE
      query: $searchTerm
      after: $after
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
var SEARCH_NO_RESULTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query searchNoResult(
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
  ) @inContext(country: $country, language: $language) {
    featuredCollections: collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: $pageBy) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
export {
  search_default as default
};
//# sourceMappingURL=/build/routes/($lang)/search-DCJHDAUI.js.map
