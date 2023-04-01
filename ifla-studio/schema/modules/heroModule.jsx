import {defineField} from 'sanity'
import {AccessibleColourInput} from '../../components/AccessibleColourInput'
import { FlagTriangleRight, Rocket } from 'lucide-react'

export default defineField({
  name: 'heroModule',
  title: 'Hero',
    type: 'object',
  icon: <Rocket strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'imageFormat',
      type: 'string',
      options: {
        list: [
          {title: 'Contain', value: 'contain'},
          {title: 'Cover', value: 'cover'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'contain',
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
    }),
    defineField({
      name: 'background',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {basic: true},
      hidden: ({parent}) => parent?.imageFormat === 'cover',
    }),

    defineField({
      name: 'links',
      type: 'array',
      of: [{type: 'checkoutObject'}, {type: 'externalLinkObject'}, {type: 'internalLinkObject'}],
    }),
  ],
  preview: {
    select: {
      title: 'banner',
      subtitle: 'heading',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'Hero',
        media: <Rocket strokeWidth={1.5} size={25} />,
        subtitle: subtitle || '',
      }
    },
  },
})
