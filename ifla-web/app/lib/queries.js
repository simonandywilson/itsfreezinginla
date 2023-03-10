import groq from 'groq';
import {contentFragment} from './fragments';

export const articleDataQuery = groq`*[_type == "article" && slug.current == $slug][0]{
        _id,
  		headline,
		date,
  		"slug": slug.fullUrl,
  		intro,
  		"colour":colour->colourLight,
  		author-> {name},
  		media[],
  		image {
			"_id": asset->_id,
			alt,
			crop,
			hotspot
      	},
		topic -> {
        	topic,
				image {
			"_id": asset->_id,
			alt,
			crop,
			hotspot
      	},
      	},
		category[] -> {_id, category},
		"seoTitle": coalesce(seoTitle, headline),
		"seoDescription": coalesce(seoDescription, pt::text(intro)),
        ${contentFragment}
    }`;

export const shopLinkQuery = groq`*[_type == "settings"][0] {
  shop->{slug{fullUrl}}
}`;


export const pageDataQuery = groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
		"seoTitle": coalesce(seoTitle, title),
		"seoDescription": seoDescription,
        ${contentFragment}
    }`;