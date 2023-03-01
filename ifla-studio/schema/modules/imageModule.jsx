import {defineArrayMember, defineField} from 'sanity'
import {Image} from 'lucide-react'

export default defineArrayMember({
  name: 'imageModule',
  title: 'Image',
  type: 'object',
  icon: <Image strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'image',
      type: 'imageObject',
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {media: 'image', subtitle: 'caption'},
    prepare({media, subtitle}) {
      return {
        title: 'Image',
        media: media || <Image strokeWidth={1.5} size={25} />,
        subtitle: subtitle || '',
      }
    },
  },
})
