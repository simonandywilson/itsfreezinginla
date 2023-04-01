import {orderRankField} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import {isSlugUnique} from '../../functions/isSlugUnique'
import {Icons} from '../../styles/SanityIcons'
import {getParentSlug} from '../../functions/getParentSlug'
import PlaceholderStringInput from '../../components/PlaceholderStringInput'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => Icons.page,
  groups: [
    {
      name: 'info',
      title: 'Info',
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    orderRankField({type: 'page'}),
    defineField({name: 'title', type: 'string', group: 'info'}),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{type: 'section'}],
      group: 'info',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      // components: {
      //   input: SlugInput,
      // },
      options: {
        source: 'title',
        // urlPrefix: async (document) => {
        //   const parent = await getParentSlug(document)
        //   if (typeof parent !== 'undefined' && parent !== null) {
        //     return `/${parent}/`
        //   } else return ''
        // },
        isUnique: isSlugUnique,
        maxLength: 30,
        // storeFullUrl: false,
      },
      group: 'info',
    }),
    defineField({
      name: 'content',
      type: 'contentArray',
      group: 'content',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      components: {
        input: PlaceholderStringInput,
      },
      options: {
        field: 'title',
      },
      validation: (Rule) => Rule.min(0).max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 5,
      group: 'seo',
      components: {
        input: PlaceholderStringInput,
      },
      options: {
        type: 'text',
      },
      validation: (Rule) => Rule.min(0).max(155),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title,
      media: () => Icons.page,
    }),
  },
})
