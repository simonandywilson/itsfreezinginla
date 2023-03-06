import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: () => Icons.home,

  fields: [
    defineField({
      name: 'heroBanner',
      type: 'string',
		title: 'Hero Banner',
    }),
    defineField({
      name: 'hero',
      type: 'reference',
      to: [ {type: 'product'}],
		validation: (Rule) => Rule.required(),
	  
    }),
    defineField({
      name: 'featuredBanner',
      type: 'string',
      title: 'Featured Articles Banner',
    }),
    defineField({
      name: 'featured',
      type: 'array',
      title: 'Featured Articles',
      of: [{type: 'reference', to: [{type: 'article'}], title: 'Reference to Article'}],
      validation: (Rule) => Rule.required().min(1).max(4),
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
