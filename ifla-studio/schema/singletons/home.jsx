import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: () => Icons.home,

  fields: [
    defineField({
      name: 'hero',
      type: 'array',
      of: [{type: 'heroObject'}],
    }),
    defineField({
      name: 'featured',
      type: 'array',
      title: 'Featured Articles',
      of: [{type: 'reference', to: [{type: 'article'}], title: 'Reference to Article'}],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'content',
      type: 'homeArray',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        media: () => Icons.home,
      }
    },
  },
})