import {defineField, defineType} from 'sanity'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import PlaceholderStringInput from '../../components/PlaceholderStringInput'
import {isSlugUnique} from '../../functions/isSlugUnique'
import {Icons} from '../../styles/SanityIcons'
import {AccessibleColourInput} from '../../components/AccessibleColourInput'

export default defineType({
  name: 'audiobook',
  title: 'Audiobook',
  type: 'document',
  icon: () => Icons.audiobook,
  groups: [
    {
      name: 'info',
      title: 'Info',
      default: true,
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
        urlPrefix: '/audiobooks/',
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
      name: 'illustrator',
      type: 'reference',
      to: [{type: 'illustrator'}],
      group: 'info',
    }),
    defineField({
      name: 'background',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {type: '#000000'},
      group: 'info',
    }),
    defineField({
      name: 'soundcloudLink',
      title: 'Soundcloud Track ID',
      type: 'string',
      description:
        '💡 On the Soundcloud track, click share, then under the "Embed" tab copy and paste the Code here.',
      group: 'content',
    }),
    defineField({
      name: 'intro',
      type: 'basicBlock',
      group: 'content',
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'contentArray',
      group: 'content',
    }),
    defineField({
      title: 'Auto Recommend Similar',
      name: 'autoRecommend',
      type: 'boolean',
      initialValue: true,
      group: 'options',
    }),
    defineField({
      name: 'similarAudiobooks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'audiobook'}], title: 'Reference to Audiobook'}],
      hidden: ({document}) => document?.autoRecommend,
      validation: (Rule) => Rule.error().min(3).max(3),
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
      media: 'image',
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
        media: media || (() => Icons.audiobook),
      }
    },
  },
})
