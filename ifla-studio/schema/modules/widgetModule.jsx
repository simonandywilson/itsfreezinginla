import {defineArrayMember, defineField} from 'sanity'
import { Clock } from 'lucide-react'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default defineArrayMember({
  name: 'widgetModule',
  title: 'Widget',
  type: 'object',
  icon: <Clock strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'widget',
      type: 'string',
      options: {
        list: [
          {title: 'Clock', value: 'clock'},
        ],
        },
      initialValue: "clock"
    }),
  ],
  preview: {
    select: {subtitle: 'widget'},
    prepare({subtitle}) {
      return {
        title: 'Widget',
        media: <Clock strokeWidth={1.5} size={25} />,
        subtitle: capitalizeFirstLetter(subtitle) || '',
      }
    },
  },
})
