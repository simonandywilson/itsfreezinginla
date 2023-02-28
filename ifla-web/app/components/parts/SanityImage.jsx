import React from "react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import clsx from "clsx";
import { useRouteData } from "remix-utils";



export default function SanityImage(props) {
	const {sanityProjectDetails} = useRouteData(`root`);
	const { value, isInline, className } = props;
	const { width, height } = getImageDimensions(value);

	return (
    <img
      className={clsx('not-prose h-auto w-full', className)}
      src={urlBuilder(sanityProjectDetails)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ''}
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
