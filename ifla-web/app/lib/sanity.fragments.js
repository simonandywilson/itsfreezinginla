import groq from 'groq';
const blockFragment = groq`_type == 'block' => {
    ..., 
    "colour": coalesce(*[_id == ^.^.^._id][0].colour->colourDark, "#000000"),
}`;
const headingModuleFragment = groq`_type == 'headingModule' => @`;
const collapsibleModuleFragment = groq`_type == 'collapsibleModule' => @`;
const shopModuleFragment = groq`_type == 'shopModule' => @`;
export const articlePreviewFragment = groq`{
    _id,
    _type,
    headline,
    intro,
    date,
    "slug": slug.fullUrl,
    "colour":colour->colourLight,
    "colourDark":colour->colourDark,
    author-> {name},
    media,
    quiltImage,
    image {
		"url": asset->url,
		alt,	
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
}`;

export const audiobookPreviewFragment = groq`{
    _id,
    _type,
    headline,
    intro,
    date,
    "slug": slug.fullUrl,
    author-> {name},
    illustrator-> {name},
    image {
        "_id": asset->_id,
        alt,
        crop,
        hotspot
    },
    background
}`;

const articlesModuleFragment = groq`_type == 'articlesModule' => {..., "articles": *[_type == "article"]|order(date desc)${articlePreviewFragment}}`;
const audiobooksModuleFragment = groq`_type == 'audiobooksModule' => {...,  "audiobooks": *[_type == "audiobook"]|order(date desc)${audiobookPreviewFragment}}`;

const carouselModuleFragment = groq`
    _type == 'carouselModule' => {
        _key,
        _type,
        slide[] {
            _key,
            "_id": asset->_id,
            alt,
            crop,
            hotspot
        },
        text,
        background
    }`;

const imageModuleFragment = groq`
    _type == 'imageModule' => {
        _key,
        _type,
        caption,
        image {
			"_id": asset->_id,
			alt,
			crop,
			hotspot
      	},
        "colour": coalesce(*[_id == ^.^._id][0].colour->colourDark, *[_id == ^.^.^.^._id][0].colour->colourDark, "#000000")
    }`;

const imageGridModuleFragment = groq`
    _type == 'imageGridModule' => {
        _key,
        _type,
        images[] {
            "_id": asset->_id,
                alt,
                crop,
                hotspot
        },
    }`;

const widgetModuleFragment = groq`
    _type == 'widgetModule' => {
        _key,
        _type,
        widget
    }`;

const footnoteFragment = groq`
    _type == 'footnote' => {
        ...,
        "colour": coalesce(*[_id == ^.^._id][0].colour->colourDark, *[_id == ^.^.^.^._id][0].colour->colourDark, "#000000")
    }`;

export const heroFragment = groq`
 {
      _key,
      _type,
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
    }
`;
const textColumnsModuleFragment = groq`_type == 'textColumnsModule' => {
    ...,
    text[] {
        ${blockFragment},
        ${collapsibleModuleFragment},
        ${carouselModuleFragment},
        ${imageModuleFragment},
        ${widgetModuleFragment},
    },
    limitHeight
}`;

const textBlockModuleFragment = groq`_type == 'textBlockModule' => {
    ...,
    text[] {
        ${blockFragment},
        ${collapsibleModuleFragment},
        ${carouselModuleFragment},
        ${imageModuleFragment},
        ${imageGridModuleFragment},
        ${footnoteFragment}
    },
    "footnotes": text[].children[] {
        _type == "footnote" => @
    }
}`;

export const contentFragment = groq`
    content[] {
        ${textBlockModuleFragment},
        ${headingModuleFragment},
        ${collapsibleModuleFragment},
        ${textColumnsModuleFragment},
        ${carouselModuleFragment},
        ${imageModuleFragment},
        ${imageGridModuleFragment},
        ${articlesModuleFragment},
        ${shopModuleFragment},
        ${audiobooksModuleFragment},
    }`;

export const relatedArticlesFragment = groq`"related": select(autoRecommend => *[_type == "article" && _id != ^._id] {
      "matchingTopic": topic -> topic == ^.topic -> topic,
      "matchingAuthor": author -> name == ^.author -> name,
      "matchingCategory": category[0] -> category == ^.category[0] -> category,
       ...${articlePreviewFragment}
    } | order(matchingTopic desc, matchingAuthor desc, matchingCategory desc, date desc)[0...3], similarArticles[]->${articlePreviewFragment})`;

export const relatedAudiobooksFragment = groq`"related": select(autoRecommend => *[_type == "audiobook" && _id != ^._id] {
      "matchingAuthor": author -> name == ^.author -> name,
    "matchingIllustrator": illustrator -> name == ^.illustrator -> name,
       ...${audiobookPreviewFragment}
    } | order(matchingAuthor desc, matchingIllustrator desc, date desc)[0...3], similarAudiobooks[]->${audiobookPreviewFragment})`;
