import {defineArrayMember, defineField} from 'sanity'
import {RectangleHorizontal} from 'lucide-react'

export default defineArrayMember({
  name: 'articleBannerModule',
  title: 'Article Banner',
  type: 'object',
  icon: <RectangleHorizontal strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'article',
      type: 'reference',
      to: [{type: 'article'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {subtitle: 'article.headline'},
    prepare({subtitle}) {
      return {
        title: 'Article Banner',
        media: <RectangleHorizontal strokeWidth={1.5} size={25} />,
        subtitle,
      }
    },
  },
})
