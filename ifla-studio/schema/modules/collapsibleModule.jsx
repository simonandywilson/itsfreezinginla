import {defineArrayMember, defineField} from 'sanity'
import {ChevronsDownUp} from 'lucide-react'

export default defineArrayMember({
  name: 'collapsibleModule',
  title: 'Collapsible',
  type: 'object',
  icon: <ChevronsDownUp strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'basicBlock',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'heading'},
    prepare({title, subtitle}) {
      return {
        title: title ? `Collapsible (${title})` : `Collapsible`,
        media: <ChevronsDownUp strokeWidth={1.5} size={25} />,
        subtitle: subtitle || '',
      }
    },
  },
})
