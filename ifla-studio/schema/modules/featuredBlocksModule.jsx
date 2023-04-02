import {defineArrayMember, defineField} from 'sanity'
import {BoxSelect} from 'lucide-react'

export default defineArrayMember({
  name: 'featuredBlocksModule',
  title: 'Featured Blocks',
  type: 'object',
  icon: <BoxSelect strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'article'}, {type: 'audiobook'}],
          title: 'Reference to Article or Audiobook',
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: 'link',
      type: 'internalLinkObject',

    }),
  ],
  preview: {
    select: {
      headlineOne: 'blocks.0.headline',
      headlineTwo: 'blocks.1.headline',
      headlineThree: 'blocks.2.headline',
    },
    prepare({headlineOne, headlineTwo, headlineThree}) {
      return {
        title: 'Featured Blocks',
        media: <BoxSelect strokeWidth={1.5} size={25} />,
        subtitle:
          headlineOne && headlineTwo && headlineThree
            ? `${headlineOne}, ${headlineTwo}, ${headlineThree}`
            : '',
      }
    },
  },
})
