// import TextColumnsModule from "../modules/TextColumnsModule"
// import ArticlesModule from '../modules/ArticlesModule';
import CarouselModule from '../modules/CarouselModule';
import {CollapsibleModule} from '../modules/CollapsibleModule';
import {HeadingModule} from '../modules/HeadingModule';
import {ImageGridModule} from '../modules/ImageGridModule';
import {ImageModule} from '../modules/ImageModule';
import {TextBlockModule} from '../modules/TextBlockModule';
import {ShopModule} from '../modules/ShopModule';
export const Content = ({content}) => {
  switch (content._type) {
    case 'textBlockModule':
      return <TextBlockModule content={content} />;
    case 'headingModule':
      return <HeadingModule content={content} />;
    case 'collapsibleModule':
      return <CollapsibleModule content={content} />;
    case 'imageModule':
      return <ImageModule content={content} />;
    case 'imageGridModule':
      return <ImageGridModule content={content} />;
    // case 'textColumnsModule':
    //   return <TextColumnsModule content={content.text} />;
    // case 'articlesModule':
    //   return <ArticlesModule content={content} />;
    case 'carouselModule':
      return <CarouselModule content={content} />;
    case 'headingModule':
      return <CarouselModule content={content} />;
    case 'shopModule':
      return <ShopModule />;
    default:
      return null;
  }
};
