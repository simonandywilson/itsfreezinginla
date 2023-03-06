import {defineType, defineField} from 'sanity'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: () => Icons.category,
  fields: [
    defineField({
      name: 'category',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'category',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title,
        media: () => Icons.category,
      }
    },
  },
})
