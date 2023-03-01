import React from "react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { useRouteData } from "remix-utils";
import { cx } from "class-variance-authority";



export default function SanityImage({value, isInline, className, alt}) {
  const {sanityProjectDetails} = useRouteData(`root`);
  const {width, height} = getImageDimensions(value);

  return (
    <img
      className={cx('not-prose h-auto w-full', className)}
      src={urlBuilder(sanityProjectDetails)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={alt || value.alt || ''}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
}
