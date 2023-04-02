import groq from 'groq';
import {
  contentFragment,
  articlePreviewFragment,
  relatedArticlesFragment,
  relatedAudiobooksFragment,
  audiobookPreviewFragment,
  heroFragment,
} from './sanity.fragments';

export const homepageDataQuery = groq`*[_type == "home"][0] {
    "featured": featured[0...4] -> ${articlePreviewFragment},
    content[] {
      _type == 'heroModule' => ${heroFragment},
      _type == 'articleBannerModule' => {_key, _type, "article":article ->${articlePreviewFragment}},
      _type == 'featuredBlocksModule' => {
        _key,
        _type,
        blocks[]-> {
          _type == 'article' => ${articlePreviewFragment},
          _type == 'audiobook' => ${audiobookPreviewFragment}
        },
        link {
          title,
          "link": reference -> slug.current
        }
      }
    },
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

export const audiobookDataQuery = groq`*[_type == "audiobook" && slug.current == $slug][0]{
    _id,
  	headline,
		date,
  	"slug": slug.fullUrl,
  	intro,
  	author-> {name},
    illustrator-> {name},
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
		"seoTitle": coalesce(seoTitle, headline),
		"seoDescription": coalesce(seoDescription, pt::text(intro)),
    ${relatedAudiobooksFragment},
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

export const allAudiobooksDataQuery = groq`*[_type == "audiobook"]
   ${audiobookPreviewFragment}
`;

export const allArticlesDataQueryFiltered = groq`*[_type == "article" && headline match $search && $topic match topic->topic]| order(date desc)${articlePreviewFragment}`;
export const allArticlesDataQuery = groq`*[_type == "article" && headline match $search ]| order(date desc)${articlePreviewFragment}`;

export const allTopicsDataQuery = groq`*[_type == "topic" && count( *[_type == 'article' && references(^._id)]) > 0] | order(topic asc){
  _id,
  topic,
  image {
    "_id": asset->_id,
  },
}`;
