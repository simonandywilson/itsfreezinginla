// Singletons
import settings from './singletons/settings'
import home from './singletons/home.jsx'

// Documents
import article from './documents/article'
import product from './documents/product'
import collection from './documents/collection'
import productVariant from './documents/productVariant'
import author from './documents/author'
import page from './documents/page'
import topic from './documents/topic'
import section from './documents/section'
import colour from './documents/colour'
import category from './documents/category'
import audiobook from './documents/audiobook'
import illustrator from './documents/illustrator'

// Objects
import imageObject from './objects/imageObject'
import textObject from './objects/textObject'
import shopifyProxyString from './objects/shopifyProxyString'
import shopifyProduct from './objects/shopifyProduct'
import shopifySeo from './objects/shopifySeo'
import shopifyCollection from './objects/shopifyCollection'
import shopifyProductVariant from './objects/shopifyProductVariant'
import shopifyProductOption from './objects/shopifyProductOption'
import shopifyPlaceholderString from './objects/shopifyPlaceholderString'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import externalLinkObject from './objects/externalLinkObject'
import internalLinkObject from './objects/internalLinkObject'
import bitmapImageObject from './objects/bitmapImageObject'
import footnoteObject from './objects/footnoteObject'
import heroObject from './objects/heroObject'
import checkoutObject from './objects/checkoutObject'

// Blocks
import defaultBlock from './blocks/defaultBlock'
import columnsBlock from './blocks/columnsBlock'
import basicBlock from './blocks/basicBlock'

// Arrays
import contentArray from './arrays/contentArray'
import homeArray from './arrays/homeArray'

// Modules
import textBlockModule from './modules/textBlockModule'
import textColumnsModule from './modules/textColumnsModule'
import imageModule from './modules/imageModule'
import carouselModule from './modules/carouselModule'
import articlesModule from './modules/articlesModule'
import shopModule from './modules/shopModule'
import imageGridModule from './modules/imageGridModule'
import headingModule from './modules/headingModule'
import collapsibleModule from './modules/collapsibleModule'
import audiobooksModule from './modules/audiobooksModule'
import heroModule from './modules/heroModule'
import articleBannerModule from './modules/articleBannerModule'
import featuredBlocksModule from './modules/featuredBlocksModule'
import widgetModule from './modules/widgetModule'

const singletons = new Set([settings])
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
  audiobook,
  illustrator
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
  internalLinkObject,
  bitmapImageObject,
  heroObject,
  checkoutObject,
  footnoteObject
])

const arrays = new Set([contentArray, homeArray])

const blocks = new Set([defaultBlock, columnsBlock, basicBlock])

const modules = new Set([
  textBlockModule,
  textColumnsModule,
  imageModule,
  carouselModule,
  articlesModule,
  shopModule,
  imageGridModule,
  headingModule,
  collapsibleModule,
  audiobooksModule,
  heroModule,
  articleBannerModule,
  featuredBlocksModule,
  widgetModule,
])

export const schema = [...singletons, ...documents, ...objects, ...arrays, ...blocks, ...modules]
export const singletonDocs = new Set([
  'home',
  'settings',
  'product',
  'collection',
  'productVariant',
  'productCollection',
])
export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
