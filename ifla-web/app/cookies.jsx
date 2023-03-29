import { createCookie } from "@shopify/remix-oxygen";

export const gdprConsent = createCookie('gdpr-consent', {
  maxAge: 31536000, // One Year
});