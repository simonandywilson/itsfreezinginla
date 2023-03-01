import { defineField } from "sanity";

export default defineField({
  name: 'contentArray',
  title: 'Content',
  type: 'array',
  of: [
    {type: 'headingModule'},
    {type: 'textBlockModule'},
    {type: 'collapsibleModule'},
    {type: 'textColumnsModule'},
    {type: 'imageModule'},
    {type: 'carouselModule'},
    {type: 'imageGridModule'},
    {type: 'articlesModule'},
    {type: 'shopModule'},
  ],
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
