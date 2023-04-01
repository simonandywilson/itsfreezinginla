import groq from 'groq';
import {
  contentFragment,
  articlePreviewFragment,
  relatedArticlesFragment,
} from './sanity.fragments';

export const homepageDataQuery = groq`*[_type == "home"][0] {
    "hero": hero[] {
      _key,
      background,
      heading,
      imageFormat,
      image {
        "_id": asset->_id,
        alt,
        crop,
        hotspot
      },
      links[] {
        _type == 'checkoutObject' => {
          _key,
          _type,
          title,
          "variantId": reference -> store.id
        },
        _type == 'internalLinkObject' => {
          _key,
          _type,
          title,
          "type": reference -> _type,
          "slug": reference -> slug.current,
          "slugFull": reference -> slug.fullUrl,
        },
        _type == 'externalLinkObject' => @
      }
    },
    "featured": featured[0...4] -> ${articlePreviewFragment}
}`;

export const articleDataQuery = groq`*[_type == "article" && slug.current == $slug][0]{
    _id,
  	headline,
		date,
  	"slug": slug.fullUrl,
  	intro,
  	"colour":colour->colourLight,
    "colourDark":colour->colourDark,
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
    ${relatedArticlesFragment},
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

export const allAudiobooksDataQuery = groq`*[_type == "audiobook"]{
    _id,
  	headline,
		date,
  	"slug": slug.fullUrl,
  	intro,
  	media[],
  	image {
      "_id": asset->_id,
      alt,
      crop,
      hotspot
    },
}`;

export const allArticlesDataQueryFiltered = groq`*[_type == "article" && headline match $search && $topic match topic->topic]| order(date desc)${articlePreviewFragment}`;
export const allArticlesDataQuery = groq`*[_type == "article" && headline match $search ]| order(date desc)${articlePreviewFragment}`;

export const allTopicsDataQuery = groq`*[_type == "topic" && count( *[_type == 'article' && references(^._id)]) > 0] | order(topic asc){
  _id,
  topic,
  image {
    "_id": asset->_id,
  },
}`;
