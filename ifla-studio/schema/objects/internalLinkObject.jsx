import {defineField} from 'sanity'
import {Link} from 'lucide-react'

export default defineField({
  name: 'internalLinkObject',
  title: 'Internal Link',
  type: 'object',
  options: {
    modal: {
      type: 'dialog',
      width: 1,
    },
  },
  icon: <Link strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      hidden: ({document}) => !document._type === 'home',
    }),
    defineField({
      name: 'reference',
      title: 'Reference to Internal Page:',
      type: 'reference',
      to: [{type: 'article'}, {type: 'page'}, {type: 'home'}],
    }),
  ],
})
