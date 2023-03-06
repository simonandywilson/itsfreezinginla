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
  			alt,
  			asset->
  		},
		topic -> {
        topic,
			image {
			asset-> {_id}
			}
      	},
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