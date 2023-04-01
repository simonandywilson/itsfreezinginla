import {defineArrayMember, defineField} from 'sanity'
import {Ear} from 'lucide-react'

export default defineArrayMember({
  name: 'audiobooksModule',
  title: 'Audiobooks',
  type: 'object',
  icon: <Ear strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      initialValue: 'Audiobooks',
      readOnly: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Audiobooks',
        media: <Ear strokeWidth={1.5} size={25} />,
      }
    },
  },
})
