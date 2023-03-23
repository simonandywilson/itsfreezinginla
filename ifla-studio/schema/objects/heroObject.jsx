import {defineField} from 'sanity'
import {Link} from 'lucide-react'
import { AccessibleColourInput } from '../../components/AccessibleColourInput'
import { Icons } from '../../styles/SanityIcons';

export default defineField({
  name: 'heroObject',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'imageFormat',
      type: 'string',
      options: {
        list: [
          {title: 'Contain', value: 'contain'},
          {title: 'Cover', value: 'cover'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'contain',
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
    }),
    defineField({
      name: 'background',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {basic: true},
      hidden: ({parent}) => parent?.imageFormat === 'cover',
    }),

    defineField({
      name: 'links',
      type: 'array',
      of: [{type: 'checkoutObject'}, {type: 'externalLinkObject'}, {type: 'internalLinkObject'}],
    }),
  ],
  preview: {
  	select: {
  		title: "banner",
      subtitle: "heading",
      media: "image"
  	},
  	prepare(selection) {
  		const { title, media, subtitle } = selection;
  		return {
  			title:  title || "Hero",
  			media: media || Icons.hero,
  			subtitle: subtitle || "",
  		};
  	},
  },
})
