import { CopyIcon } from '@sanity/icons'
import ShopifyDocumentStatus from '../../components/ShopifyDocumentStatus'
import ShopifyIcon from "../../styles/ShopifyIcon";
import ProductVariantHiddenInput from '../../components/ProductVariantHiddenInput'
import { Icons } from '../../styles/SanityIcons';

export default {
  name: 'productVariant',
  title: 'Product variant',
  type: 'document',
  icon: CopyIcon,
  groups: [
    {
      name: 'shopifySync',
      title: 'Shopify sync',
      icon: ShopifyIcon,
    },
  ],
  fields: [
    // Product variant hidden status
    {
      name: 'hidden',
      type: 'string',
      components: {
        input: ProductVariantHiddenInput,
      },
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted
        return !isDeleted
      },
    },
    // Title (proxy)
    {
      title: 'Title',
      name: 'titleProxy',
      type: 'shopifyProxyString',
      options: { field: 'store.title' },
    },
    // Shopify product variant
    {
      name: 'store',
      title: 'Shopify',
      description: 'Variant data from Shopify (read-only)',
      type: 'shopifyProductVariant',
      group: 'shopifySync',
    },
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      previewImageUrl: 'store.previewImageUrl',
      sku: 'store.sku',
      status: 'store.status',
      title: 'store.title',
    },
    prepare(selection) {
      const { isDeleted, previewImageUrl, sku, status, title } = selection

      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="productVariant"
            url={previewImageUrl}
            icon={Icons.variant}
          />
        ),
        subtitle: sku,
        title,
      }
    },
  },
}
