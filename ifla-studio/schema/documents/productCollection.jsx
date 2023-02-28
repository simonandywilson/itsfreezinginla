import { PackageIcon } from '@sanity/icons'
import pluralize from 'pluralize'
import { defineType } from 'sanity'
import CollectionHiddenInput from "../../components/CollectionHiddenInput";
import ShopifyDocumentStatus from '../../components/ShopifyDocumentStatus'
import ShopifyIcon from "../../styles/ShopifyIcon";
// import CollectionHiddenInput from '../../components/inputs/CollectionHidden'

const GROUPS = [
  {
    default: true,
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon,
  },
  {
    name: 'seo',
    title: 'SEO',
  },
]

export default defineType({
  name: 'productCollection',
  title: 'Shopify Collection',
  type: 'document',
  icon: PackageIcon,
  groups: GROUPS,
  fields: [
    // Product hidden status
    {
      name: 'hidden',
      type: 'string',
      components: {
        input: CollectionHiddenInput,
      },
      group: GROUPS.map((group) => group.name),
      hidden: ({ parent }) => {
        const isDeleted = parent?.store?.isDeleted
        return !isDeleted
      },
    },
    // Title (proxy)
    {
      name: 'titleProxy',
      title: 'Title',
      type: 'shopifyProxyString',
      options: { field: 'store.title' },
    },
    // Slug (proxy)
    {
      name: 'slugProxy',
      title: 'Slug',
      type: 'shopifyProxyString',
      options: { field: 'store.slug.current' },
    },
    // Shopify collection
    {
      name: 'store',
      title: 'Shopify',
      type: 'shopifyCollection',
      description: 'Collection data from Shopify (read-only)',
      group: 'shopifySync',
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'shopifySeo',
      group: 'seo',
    },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title (A-Z)',
      by: [{ field: 'store.title', direction: 'asc' }],
    },
    {
      name: 'titleAsc',
      title: 'Title (Z-A)',
      by: [{ field: 'store.title', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      imageUrl: 'store.imageUrl',
      isDeleted: 'store.isDeleted',
      ruleCount: 'store.rules.length',
      title: 'store.title',
    },
    prepare(selection) {
      const { imageUrl, isDeleted, ruleCount, title } = selection
      return {
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            type="collection"
            url={imageUrl}
          />
        ),
        subtitle:
          ruleCount > 0
            ? `Automated (${pluralize('rule', ruleCount, true)})`
            : 'Manual',
        title,
      }
    },
  },
})
