import {defineField} from 'sanity'
import {AltTextDemo} from '../../components/AltTextDemo'
import {Image} from 'lucide-react'
import {BitmapImageEditor} from '../../components/BitmapImageEditor'

export default defineField({
  name: 'bitmapImageObject',
  title: 'Image',
  type: 'image',
  icon: <Image strokeWidth={1.5} size={20} />,
  options: {
    hotspot: true,
  },
  components: {
    input: BitmapImageEditor,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      // description: "⚡️ Optional but important for SEO and accessibility.",
      components: {
        input: AltTextDemo,
      },
      validation: (Rule) => Rule.required().warning(`Adding Alternative Text is recommended.`),
    },
  ],
  preview: {
    select: {
      media: 'asset',
      subtitle: 'alt',
    },
    prepare(selection) {
      const {media, subtitle} = selection
      return {
        title: 'Image',
        media: media || <Image strokeWidth={1.5} size={25} />,
        subtitle: subtitle,
      }
    },
  },
})
