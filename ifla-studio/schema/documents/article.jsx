import {defineField, defineType} from 'sanity'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import PlaceholderStringInput from '../../components/PlaceholderStringInput'
import {isSlugUnique} from '../../functions/isSlugUnique'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: () => Icons.article,
  groups: [
    {
      name: 'info',
      title: 'Info',
      default: true
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'options',
      title: 'Options',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // defineField({
    //   title: 'TEST',
    //   name: 'bitmapImage',
    //   type: 'bitmapImageObject',
    //   group: 'info',
    // }),
    defineField({
      name: 'headline',
      type: 'string',
      group: 'info',
    }),
    defineField({
      title: 'Publication Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
      initialValue: new Date().toLocaleDateString('fr-CA'),
      group: 'info',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        source: 'headline',
        urlPrefix: '/articles/',
        isUnique: isSlugUnique,
        maxLength: 30,
        storeFullUrl: true,
      },
      group: 'info',
    }),
    defineField({
      name: 'topic',
      type: 'reference',
      to: [{type: 'topic'}],
      group: 'info',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'info',
    }),

    defineField({
      name: 'category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}], title: 'Reference to Category'}],
      group: 'info',
    }),
    defineField({
      name: 'intro',
      type: 'basicBlock',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'contentArray',
      group: 'content',
    }),
    defineField({
      name: 'quiltImage',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      title: 'Quilt Image',
      name: 'image',
      type: 'imageObject',
      group: 'options',
      hidden: ({document}) => !document?.quiltImage,
    }),
    defineField({
      title: 'Auto Recommend Similar',
      name: 'autoRecommend',
      type: 'boolean',
      initialValue: true,
      group: 'options',
    }),
    defineField({
      name: 'similarArticles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}], title: 'Reference to Article'}],
      hidden: ({document}) => document?.autoRecommend,
      validation: (Rule) => Rule.warning().min(3).max(3),
      group: 'options',
    }),
    defineField({
      name: 'overrideColour',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'colour',
      type: 'reference',
      to: [{type: 'colour'}],
      description:
        '💡 Colours are auto-assigned when document is published. Only override if strictly necessary!',
      hidden: ({document}) => !document?.overrideColour,
      readOnly: ({document}) => !document?.overrideColour,
      group: 'options',
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
        field: 'headline',
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
        field: 'intro',
        type: 'text',
      },
      validation: (Rule) => Rule.min(0).max(155),
    }),
  ],
  orderings: [
    {
      name: 'publicationDateDesc',
      title: 'Publication Date (New–Old)',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      name: 'publicationDateAsc',
      title: 'Publication Date (Old–New)',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'date',
      media: 'colour.colourLight',
      topic: 'topic.image.asset.url',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString('en-UK', {
              day: 'numeric',
              year: 'numeric',
              month: 'long',
            })
          : '',
        media: (
          <span
            style={{
              background: media,
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></span>
        ),
      }
    },
  },
})
