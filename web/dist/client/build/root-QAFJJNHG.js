import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Button,
  FeaturedCollections,
  Layout,
  PageHeader,
  ProductSwimlane,
  Text
} from "/build/_shared/chunk-2T36A5ND.js";
import {
  DEFAULT_LOCALE,
  usePrefixPathWithLocale
} from "/build/_shared/chunk-7IMEBFFC.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  AnalyticsEventName,
  It,
  getClientBrowserParameters,
  sendShopifyAnalytics,
  useShopifyCookies
} from "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-B5NAOUMV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NDYBTKM5.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_react,
  useCatch,
  useFetcher,
  useFetchers,
  useLoaderData,
  useLocation,
  useMatches
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/FeaturedSection.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeaturedSection() {
  const { load, data } = useFetcher();
  const path = usePrefixPathWithLocale("/featured-products");
  (0, import_react.useEffect)(() => {
    load(path);
  }, [load, path]);
  if (!data)
    return null;
  const { featuredCollections, featuredProducts } = data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    featuredCollections.length < 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeaturedCollections,
      {
        title: "Popular Collections",
        collections: featuredCollections
      },
      void 0,
      false,
      {
        fileName: "app/components/FeaturedSection.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSwimlane, { products: featuredProducts }, void 0, false, {
      fileName: "app/components/FeaturedSection.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FeaturedSection.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/GenericError.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function GenericError({
  error
}) {
  const heading = `Something\u2019s wrong here.`;
  let description = `We found an error while loading this page.`;
  if (error) {
    description += `
${error.message}`;
    console.error(error);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageHeader, { heading, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { width: "narrow", as: "p", children: description }, void 0, false, {
        fileName: "app/components/GenericError.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      error?.stack && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
            maxWidth: "100%"
          },
          dangerouslySetInnerHTML: {
            __html: addLinksToStackTrace(error.stack)
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/GenericError.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { width: "auto", variant: "secondary", to: "/", children: "Take me to the home page" }, void 0, false, {
        fileName: "app/components/GenericError.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GenericError.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FeaturedSection, {}, void 0, false, {
      fileName: "app/components/GenericError.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GenericError.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function addLinksToStackTrace(stackTrace) {
  return stackTrace?.replace(
    /^\s*at\s?.*?[(\s]((\/|\w\:).+)\)\n/gim,
    (all, m1) => all.replace(
      m1,
      `<a href="vscode://file${m1}" class="hover:underline">${m1}</a>`
    )
  );
}

// app/components/NotFound.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function NotFound({ type = "page" }) {
  const heading = `We\u2019ve lost this ${type}`;
  const description = `We couldn\u2019t find the ${type} you\u2019re looking for. Try checking the URL or heading back to the home page.`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PageHeader, { heading, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { width: "narrow", as: "p", children: description }, void 0, false, {
        fileName: "app/components/NotFound.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { width: "auto", variant: "secondary", to: "/", children: "Take me to the home page" }, void 0, false, {
        fileName: "app/components/NotFound.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NotFound.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FeaturedSection, {}, void 0, false, {
      fileName: "app/components/NotFound.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NotFound.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-DNXOED3B.css";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/hooks/useAnalytics.tsx
var import_react4 = __toESM(require_react());
function useAnalytics(hasUserConsent, locale) {
  useShopifyCookies({ hasUserConsent });
  const location = useLocation();
  const analyticsFromMatches = useDataFromMatches(
    "analytics"
  );
  const pageAnalytics = {
    ...analyticsFromMatches,
    currency: locale.currency,
    acceptedLanguage: locale.language,
    hasUserConsent
  };
  (0, import_react4.useEffect)(() => {
    const payload = {
      ...getClientBrowserParameters(),
      ...pageAnalytics
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload
    });
  }, [location]);
  const cartData = useDataFromFetchers({
    formDataKey: "cartAction",
    formDataValue: "ADD_TO_CART" /* ADD_TO_CART */,
    dataKey: "analytics"
  });
  if (cartData) {
    const addToCartPayload = {
      ...getClientBrowserParameters(),
      ...pageAnalytics,
      ...cartData
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.ADD_TO_CART,
      payload: addToCartPayload
    });
  }
}
function useDataFromMatches(dataKey) {
  const matches = useMatches();
  const data = {};
  matches.forEach((event) => {
    const eventData = event?.data;
    if (eventData && eventData[dataKey]) {
      Object.assign(data, eventData[dataKey]);
    }
  });
  return data;
}
function useDataFromFetchers({
  formDataKey,
  formDataValue,
  dataKey
}) {
  const fetchers = useFetchers();
  const data = {};
  for (const fetcher of fetchers) {
    const formData = fetcher.submission?.formData;
    const fetcherData = fetcher.data;
    if (formData && formData.get(formDataKey) === formDataValue && fetcherData && fetcherData[dataKey]) {
      Object.assign(data, fetcherData[dataKey]);
      try {
        if (formData.get(dataKey)) {
          const dataInForm = JSON.parse(String(formData.get(dataKey)));
          Object.assign(data, dataInForm);
        }
      } catch {
      }
    }
  }
  return Object.keys(data).length ? data : void 0;
}

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var seo = ({ data, pathname }) => ({
  title: data?.layout?.shop?.name,
  titleTemplate: "%s | Hydrogen Demo Store",
  description: data?.layout?.shop?.description,
  handle: "@shopify",
  url: `https://hydrogen.shop${pathname}`
});
var handle = {
  seo
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const data = useLoaderData();
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;
  useAnalytics(hasUserConsent, locale);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: locale.language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Layout,
        {
          layout: data.layout,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this)
        },
        `${locale.language}-${locale.country}`,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 99,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const [root] = useMatches();
  const caught = useCatch();
  const isNotFound = caught.status === 404;
  const locale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: locale.language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: isNotFound ? "Not found" : "Error" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Layout,
        {
          layout: root?.data?.layout,
          children: isNotFound ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NotFound, { type: caught.data?.pageType }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            GenericError,
            {
              error: { message: `${caught.status} ${caught.data}` }
            },
            void 0,
            false,
            {
              fileName: "app/root.tsx",
              lineNumber: 133,
              columnNumber: 13
            },
            this
          )
        },
        `${locale.language}-${locale.country}`,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 126,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  const [root] = useMatches();
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: locale.language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: "Error" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { layout: root?.data?.layout, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GenericError, { error }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  handle,
  links,
  meta
};
//# sourceMappingURL=/build/root-QAFJJNHG.js.map
