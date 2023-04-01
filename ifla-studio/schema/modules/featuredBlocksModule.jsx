import {defineArrayMember, defineField} from 'sanity'
import {BoxSelect} from 'lucide-react'

export default defineArrayMember({
  name: 'featuredBlocksModule',
  title: 'Featured Blocks',
  type: 'object',
  icon: <BoxSelect strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'article',
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
  ],
  preview: {
    select: {
      headlineOne: 'article.0.headline',
      headlineTwo: 'article.1.headline',
      headlineThree: 'article.2.headline',
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
