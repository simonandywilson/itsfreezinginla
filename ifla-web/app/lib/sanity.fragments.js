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
    headline,
    intro,
    date,
    "slug": slug.fullUrl,
    "colour":colour->colourLight,
    author-> {name},
    media,
    quiltImage,
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

}`;

const articlesModuleFragment = groq`_type == 'articlesModule' => {..., "articles": *[_type == "article"] [0..100]|order(date desc)${articlePreviewFragment}}`;
const audiobooksModuleFragment = groq`_type == 'audiobooksModule' => {...}`;

const carouselModuleFragment = groq`
    _type == 'carouselModule' => {
        _key,
        _type,
        slide[] {
            _type == "imageObject" => {
                "_id": asset->_id,
                alt,
                crop,
                hotspot
            },
            _type == "textObject" => {
                ...
            }
        }
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

const footnoteFragment = groq`
    _type == 'footnote' => {
        ...,
        "colour": coalesce(*[_id == ^.^._id][0].colour->colourDark, *[_id == ^.^.^.^._id][0].colour->colourDark, "#000000")
    }`;

const textColumnsModuleFragment = groq`_type == 'textColumnsModule' => {
    ...,
    text[] {
        ${blockFragment},
        ${collapsibleModuleFragment},
        ${carouselModuleFragment},
        ${imageModuleFragment},
    }
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
