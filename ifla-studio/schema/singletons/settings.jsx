import {defineType, defineField} from 'sanity'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: () => Icons.settings,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: '💡 Appears in website header.',
    }),
    defineField({
      name: 'shortTitle',
      type: 'string',
      description: '💡 Appears in website header.',
    }),
    defineField({
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description: '💡 Appears as title in search engine results.',
      validation: (Rule) => [Rule.required().warning(`Your site needs a Title.`)],
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
      rows: 3,
      description: '💡 Appears as description in search engine results.',
      validation: (Rule) => [
        Rule.required().warning(`Your page needs an SEO description.`),
        Rule.min(50).warning(`Your page description should be a minimum of 50 characters.`),
        Rule.max(155).warning(`Your page description should be a maximum of 155 characters.`),
      ],
    }),
    defineField({
      name: 'seoImage',
      type: 'image',
      title: 'SEO Image',
      description: (
        <>
          💡 Appears when website is shared on social media (Facebook, Twitter, LinkedIn, Slack
          etc.). <br />
          ⚡️ Image will be cropped to a 16:9 aspect ratio.
        </>
      ),
      validation: (Rule) => Rule.required().warning(`Your page needs an SEO image.`),
    }),
    defineField({
      name: 'seoDomain',
      type: 'string',
      title: 'SEO Domain',
      description: <>💡 Domain of website.</>,
      validation: (Rule) => Rule.required().warning(`Your page needs an SEO domain.`),
      readOnly: true,
    }),
    defineField({
      name: 'seoTwitter',
      type: 'string',
      title: 'Twitter Handle',
    }),
    defineField({
      name: 'footerLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'page'}], title: 'Reference to Page'}],
    }),
    defineField({
      name: 'footerText',
      type: 'defaultBlock',
    }),
  ],
})
