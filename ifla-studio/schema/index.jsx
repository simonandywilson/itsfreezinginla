// Singletons
import settings from "./singletons/settings";
// Documents
import article from "./documents/article";
import product from "./documents/product";
import collection from "./documents/collection";
import productVariant from "./documents/productVariant";
import author from "./documents/author";
import home from "./documents/home.jsx";
import page from "./documents/page";
import topic from "./documents/topic";
import section from "./documents/section";
import colour from "./documents/colour";
import category from './documents/category'

// Objects
import imageObject from "./objects/imageObject";
import textObject from "./objects/textObject";
import shopifyProxyString from "./objects/shopifyProxyString";
import shopifyProduct from "./objects/shopifyProduct";
import shopifySeo from "./objects/shopifySeo";
import shopifyCollection from "./objects/shopifyCollection";
import shopifyProductVariant from "./objects/shopifyProductVariant";
import shopifyProductOption from "./objects/shopifyProductOption";
import shopifyPlaceholderString from "./objects/shopifyPlaceholderString";
import shopifyCollectionRule from "./objects/shopifyCollectionRule";
import externalLinkObject from './objects/externalLinkObject'
import internalLinkObject from './objects/internalLinkObject'

// Blocks
import defaultBlock from "./blocks/defaultBlock";
import columnsBlock from './blocks/columnsBlock'
import basicBlock from './blocks/basicBlock'

// Arrays
import contentArray from "./objects/contentArray";
// Modules
import textBlockModule from "./modules/textBlockModule";
import textColumnsModule from "./modules/textColumnsModule";
import imageModule from "./modules/imageModule";
import carouselModule from "./modules/carouselModule";
import articlesModule from "./modules/articlesModule";
import shopModule from "./modules/shopModule";
import imageGridModule from "./modules/imageGridModule";
import headingModule from "./modules/headingModule";
import collapsibleModule from './modules/collapsibleModule'


const singletons = new Set([settings]);
const documents = new Set([
  home,
  article,
  author,
  product,
  collection,
  productVariant,
  topic,
  page,
  section,
  colour,
  category,
])
const objects = new Set([
	imageObject,
	textObject,
	shopifyProxyString,
	shopifyProduct,
	shopifySeo,
	shopifyCollection,
	shopifyProductVariant,
	shopifyProductOption,
	shopifyPlaceholderString,
	shopifyCollectionRule,
	externalLinkObject,
	internalLinkObject
]);

const arrays = new Set([contentArray]);

const blocks = new Set([defaultBlock, columnsBlock, basicBlock]);

const modules = new Set([
	textBlockModule,
	textColumnsModule,
	imageModule,
	carouselModule,
	articlesModule,
	shopModule,
	imageGridModule,
	headingModule,
	collapsibleModule
]);

export const schema = [...singletons, ...documents, ...objects, ...arrays, ...blocks, ...modules];
export const singletonDocs = new Set([
	"home",
	"settings",
	"product",
	"collection",
	"productVariant",
	"productCollection",
]);
export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
