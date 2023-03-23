import {defineType, defineField} from 'sanity'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: () => Icons.settings,
  groups: [
    {
      name: 'global',
      title: 'Global',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: '💡 Appears in website header.',
      group: 'global',
    }),
    defineField({
      name: 'shortTitle',
      type: 'string',
      description: '💡 Appears in website header.',
      group: 'global',
    }),
    defineField({
      name: 'longTitle',
      type: 'string',
      description: '💡 Appears in website header.',
      group: 'global',
    }),
    defineField({
      name: 'shop',
      type: 'reference',
      to: [{type: 'page'}],
      description: '💡 When cart is empty, show link to this page.',
      group: 'global',
    }),
    defineField({
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description: '💡 Appears as title in search engine results.',
      validation: (Rule) => [Rule.required().warning(`Your site needs a Title.`)],
      group: 'seo',
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
      group: 'seo',
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
      group: 'seo',
    }),
    defineField({
      name: 'seoDomain',
      type: 'string',
      title: 'SEO Domain',
      description: <>💡 Domain of website.</>,
      validation: (Rule) => Rule.required().warning(`Your page needs an SEO domain.`),
      readOnly: true,
      group: 'seo',
    }),
    defineField({
      name: 'seoTwitter',
      type: 'string',
      title: 'Twitter Handle',
      group: 'seo',
    }),
    defineField({
      name: 'footerLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'page'}], title: 'Reference to Page'}],
      group: 'footer',
    }),
    defineField({
      name: 'footerText',
      type: 'basicBlock',
      group: 'footer',
    }),
  ],
})
