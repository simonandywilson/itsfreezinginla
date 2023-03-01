import { defineArrayMember, defineField } from "sanity";
import { LayoutGrid } from "lucide-react";

export default defineArrayMember({
  name: 'imageGridModule',
  title: 'Image Grid',
  type: 'object',
  icon: <LayoutGrid strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'imageObject'}],
    }),
  ],
  preview: {
    select: {
      media: 'images.0.asset',
      subtitle: 'images',
    },
    prepare({media, subtitle}) {
      return {
        title: 'Image Grid',
        media: media || <LayoutGrid strokeWidth={1.5} size={25} />,
        subtitle: subtitle ? `${Object.keys(subtitle).length} Images` : '',
      }
    },
  },
})
