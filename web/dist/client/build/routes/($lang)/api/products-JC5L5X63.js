import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-IKF5OSCB.js";
import "/build/_shared/chunk-BWK6FPRY.js";
import "/build/_shared/chunk-USLGO4WK.js";
import "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($lang)/api/products.tsx
var PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query (
    $query: String
    $count: Int
    $reverse: Boolean
    $country: CountryCode
    $language: LanguageCode
    $sortKey: ProductSortKeys
  ) @inContext(country: $country, language: $language) {
    products(first: $count, sortKey: $sortKey, reverse: $reverse, query: $query) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
function ProductsApiRoute() {
  return null;
}
export {
  ProductsApiRoute as default
};
//# sourceMappingURL=/build/routes/($lang)/api/products-JC5L5X63.js.map
