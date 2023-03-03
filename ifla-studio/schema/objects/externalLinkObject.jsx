import {defineField} from 'sanity'
import {ExternalLink} from 'lucide-react'

export default defineField({
  name: 'externalLinkObject',
  title: 'External Link',
  type: 'object',
  icon: <ExternalLink strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Website', value: 'website'},
          {title: 'Email', value: 'email'},
          {title: 'Telephone', value: 'telephone'},
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/https:\/\/(www\.|)(itsfreezinginla\.co.uk)\/.*/i, {
          name: 'internal url',
          invert: true,
        }).warning(`⚡️ This is not an external link. Consider using an internal link instead.`),
      hidden: ({parent}) => !parent?.type || parent?.type === 'internal',
    }),
  ],
})
