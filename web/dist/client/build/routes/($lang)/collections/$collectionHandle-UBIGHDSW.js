import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  PageHeader,
  ProductGrid,
  Section,
  SortFilter,
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
  useLoaderData
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/collections/$collectionHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => ({
  title: data?.collection?.seo?.title,
  description: data?.collection?.seo?.description,
  titleTemplate: "%s | Collection",
  media: {
    type: "image",
    url: data?.collection?.image?.url,
    height: data?.collection?.image?.height,
    width: data?.collection?.image?.width,
    altText: data?.collection?.image?.altText
  }
});
var handle = {
  seo
};
function Collection() {
  const { collection, collections, appliedFilters } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: collection.title, children: collection?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline justify-between w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { format: true, width: "narrow", as: "p", className: "inline-block", children: collection.description }, void 0, false, {
      fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
      lineNumber: 167,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
      lineNumber: 166,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
      lineNumber: 165,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      SortFilter,
      {
        filters: collection.products.filters,
        appliedFilters,
        collections,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProductGrid,
          {
            collection,
            url: `/collections/${collection.handle}`,
            "data-test": "product-grid"
          },
          collection.id,
          false,
          {
            fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
            lineNumber: 180,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
        lineNumber: 175,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/collections/$collectionHandle.tsx",
    lineNumber: 162,
    columnNumber: 5
  }, this);
}
var COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $pageBy,
        after: $cursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;
export {
  Collection as default,
  handle
};
//# sourceMappingURL=/build/routes/($lang)/collections/$collectionHandle-UBIGHDSW.js.map
