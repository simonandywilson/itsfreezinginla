import {defineField} from 'sanity'

export default defineField({
  name: 'contentArray',
  title: 'Content',
  type: 'array',
  of: [
    {type: 'headingModule'},
    {type: 'textBlockModule'},
    {type: 'textColumnsModule'},
    {type: 'imageModule'},
    {type: 'carouselModule'},
    {type: 'imageGridModule'},
    {type: 'articlesModule'},
    {type: 'shopModule'},
  ],
  validation: (Rule) =>
    Rule.error().custom((array) => {
      if (array.length <=1) {
        return true
      }
      if (array.filter((e) => e._type === 'articlesModule').length > 0) {
        return 'Content can only contain one instance of Articles'
      }
      if (array.filter((e) => e._type === 'audiobooksModule').length > 0) {
        return 'Content can only contain one instance of Audiobooks'
      }
      return true
    }),
  // preview: {
  // 	select: {
  // 		media: "asset",
  // 		subtitle: "alt",
  // 	},
  // 	prepare(selection) {
  // 		const { media, subtitle } = selection;
  // 		return {
  // 			title: "Image",
  // 			media: media || Icons.image,
  // 			subtitle: subtitle,
  // 		};
  // 	},
  // },
})
