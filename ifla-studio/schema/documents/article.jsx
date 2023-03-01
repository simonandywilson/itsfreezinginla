import {defineField, defineType} from 'sanity'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import {isSlugUnique} from '../../functions/isSlugUnique'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: () => Icons.article,
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
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
    }),
    defineField({
      name: 'topic',
      type: 'reference',
      to: [{type: 'topic'}],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'intro',
      type: 'basicBlock',
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
    }),
    defineField({
      name: 'media',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Text', value: 'Text'},
          {title: 'Audio', value: 'Audio'},
          {title: 'Video', value: 'Video'},
        ],
      },
      initialValue: ['Text'],
      hidden: true,
    }),

    defineField({
      name: 'colour',
      type: 'reference',
      to: [{type: 'colour'}],
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: 'content',
      type: 'contentArray',
    }),
    defineField({
      title: 'Auto Recommend Similar',
      name: 'autoRecommend',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'similarArticles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}], title: 'Reference to Article'}],
      hidden: ({document}) => document?.autoRecommend,
      validation: (Rule) => Rule.error().min(3).max(3),
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
        media: <span style={{background: media, height: '100%', width: '100%'}}></span>,
      }
    },
  },
})
