import {defineType, defineField} from 'sanity'
import {Icons} from '../../styles/SanityIcons'

export default defineType({
  name: 'illustrator',
  title: 'Illustrator',
  type: 'document',
  icon: Icons.illustrator,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({title}) {
      return {
        title,
        media: () => Icons.illustrator,
      }
    },
  },
})
