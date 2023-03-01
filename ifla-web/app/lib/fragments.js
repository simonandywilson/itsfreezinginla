import groq from 'groq';

const blockFragment = groq`_type == 'block' => {..., "colour": coalesce(*[_id == ^.^.^._id][0].colour->colourDark, "#000000")}`;
const headingModuleFragment = groq`_type == 'headingModule' => @`;
const collapsibleModuleFragment = groq`_type == 'collapsibleModule' => @`;
const articlesModuleFragment = groq`_type == 'articlesModule' => @`;
const shopModuleFragment = groq`_type == 'shopModule' => @`;

const carouselModuleFragment = groq`
    _type == 'carouselModule' => {
        _key,
        _type,
        slide[] {
            _type == "imageObject" => {
                ...,
                asset -> {_id}
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
            ...,
            asset -> {_id}
        }
    }`;

const imageGridModuleFragment = groq`
    _type == 'imageGridModule' => {
        _key,
        _type,
        images[] {
            ...,
            asset -> {_id}
        },
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
        ${imageGridModuleFragment}
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
    }`;
