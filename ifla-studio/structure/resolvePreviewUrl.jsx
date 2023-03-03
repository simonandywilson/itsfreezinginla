import { getSecret, SECRET_ID } from "./getSecret";

export async function resolvePreviewUrl(doc, client) {
  const remoteUrl = `https://itsfreezinginla.co.uk`;
  // const baseUrl =
  //   window?.location?.hostname === "localhost" ? "3000" : remoteUrl;
  const baseUrl = 'http://localhost:3000'
  const previewUrl = new URL("/resource/preview", baseUrl);

  const slugType = "fullUrl"

  if (!doc?.slug[slugType]) {
    return previewUrl.toString()
  }

  previewUrl.searchParams.set("slug", doc.slug[slugType]);
  const secret = await getSecret(client, SECRET_ID, true);

  if (secret) {
    previewUrl.searchParams.set("secret", secret);
  }

  return previewUrl.toString();
}
