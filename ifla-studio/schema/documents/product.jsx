import { TagIcon } from '@sanity/icons'
import pluralize from 'pluralize'
// import ProductHiddenInput from '../../components/inputs/ProductHidden'
import ShopifyIcon from "../../styles/ShopifyIcon";
import ShopifyDocumentStatus from '../../components/ShopifyDocumentStatus'
import {getPriceRange} from '../../utils/getPriceRange'
import { AccessibleColourInput } from '../../components/AccessibleColourInput';
import { defineField } from 'sanity';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    // Product hidden status
    {
      name: 'hidden',
      type: 'string',
      //   inputComponent: ProductHiddenInput,
      hidden: ({parent}) => {
        const isActive = parent?.store?.status === 'active'
        const isDeleted = parent?.store?.isDeleted
        return isActive && !isDeleted
      },
    },
    defineField({
      name: 'colour',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {type: '#000000', defaultColour: '#e3e8ef'},
    }),
    // Title (proxy)
    {
      name: 'titleProxy',
      title: 'Title',
      type: 'shopifyProxyString',
      options: {field: 'store.title'},
    },
    // Slug (proxy)
    {
      name: 'slugProxy',
      title: 'Slug',
      type: 'shopifyProxyString',
      options: {field: 'store.slug.current'},
    },
    // Shopify product
    {
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
    },
    // SEO
    // {
    //   name: 'seo',
    //   title: 'SEO',
    //   type: 'shopifySeo',
    //   group: 'seo',
    // },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{field: 'store.title', direction: 'asc'}],
    },
    {
      name: 'titleAsc',
      title: 'Title (Z-A)',
      by: [{field: 'store.title', direction: 'desc'}],
    },
    {
      name: 'titleAsc',
      title: 'Price (Highest first)',
      by: [{field: 'store.priceRange.minVariantPrice', direction: 'desc'}],
    },
    {
      name: 'titleAsc',
      title: 'Title (Lowest first)',
      by: [{field: 'store.priceRange.minVariantPrice', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      optionCount: 'store.options.length',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      variantCount: 'store.variants.length',
    },
    prepare(selection) {
      const {isDeleted, optionCount, previewImageUrl, priceRange, status, title, variantCount} =
        selection

      let description = [
        variantCount ? pluralize('variant', variantCount, true) : 'No variants',
        optionCount ? pluralize('option', optionCount, true) : 'No options',
      ]

      let subtitle = getPriceRange(priceRange)
      if (status !== 'active') {
        subtitle = '(Unavailable in Shopify)'
      }
      if (isDeleted) {
        subtitle = '(Deleted from Shopify)'
      }

      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
          />
        ),
        description: description.join(' / '),
        subtitle,
        title,
      }
    },
  },
}
