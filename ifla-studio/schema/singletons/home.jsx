import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: () => Icons.home,
  fields: [
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
