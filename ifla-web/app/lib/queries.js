import groq from 'groq';
import { contentFragment } from './fragments';

export const articleDataQuery = groq`*[_type == "article" && slug.current == $slug][0]{
        _id,
  		headline,
  		"slug": slug.fullUrl,
  		intro,
  		"colour":colour->colourLight,
  		author-> {name},
  		media[],
  		image {
  			alt,
  			asset->
  		},
        ${contentFragment}
    }`;
