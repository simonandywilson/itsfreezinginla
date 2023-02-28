import {
  MEDIA_FRAGMENT,
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import {
  FeaturedCollections,
  Hero,
  ProductSwimlane,
  getHeroPlaceholder
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
  require_react,
  useLoaderData
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Homepage() {
  const {
    primaryHero,
    secondaryHero,
    tertiaryHero,
    featuredCollections,
    featuredProducts
  } = useLoaderData();
  const skeletons = getHeroPlaceholder([{}, {}, {}]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    primaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...primaryHero, height: "full", top: true, loading: "eager" }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    featuredProducts && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: featuredProducts, children: ({ products }) => {
      if (!products?.nodes)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 133,
          columnNumber: 44
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductSwimlane,
        {
          products: products.nodes,
          title: "Featured Products",
          count: 4
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 135,
          columnNumber: 17
        },
        this
      );
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    secondaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...skeletons[1] }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 147,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: secondaryHero, children: ({ hero }) => {
      if (!hero)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 150,
          columnNumber: 33
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...hero }, void 0, false, {
        fileName: "app/routes/($lang)/index.tsx",
        lineNumber: 151,
        columnNumber: 22
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this),
    featuredCollections && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: featuredCollections, children: ({ collections }) => {
      if (!collections?.nodes)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 161,
          columnNumber: 47
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FeaturedCollections,
        {
          collections: collections.nodes,
          title: "Collections"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 163,
          columnNumber: 17
        },
        this
      );
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this),
    tertiaryHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...skeletons[2] }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 174,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: tertiaryHero, children: ({ hero }) => {
      if (!hero)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/($lang)/index.tsx",
          lineNumber: 177,
          columnNumber: 33
        }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, { ...hero }, void 0, false, {
        fileName: "app/routes/($lang)/index.tsx",
        lineNumber: 178,
        columnNumber: 22
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($lang)/index.tsx",
      lineNumber: 174,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($lang)/index.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
var COLLECTION_CONTENT_FRAGMENT = `#graphql
  ${MEDIA_FRAGMENT}
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
`;
var HOMEPAGE_SEO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
`;
var COLLECTION_HERO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
  }
`;
var HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
export {
  Homepage as default
};
//# sourceMappingURL=/build/routes/($lang)/index-KVMZI23L.js.map
