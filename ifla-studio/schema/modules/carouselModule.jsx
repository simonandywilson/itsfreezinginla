import { defineArrayMember, defineField } from "sanity";
import { AltTextDemo } from "../../components/AltTextDemo";
import { BlockContentIcon } from "@sanity/icons";
import { ArrowLeftRight } from "lucide-react";
import { AccessibleColourInput } from "../../components/AccessibleColourInput";

export default defineArrayMember({
  name: 'carouselModule',
  title: 'Carousel',
  type: 'object',
  icon: <ArrowLeftRight strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'slide',
      type: 'array',
      of: [{type: 'imageObject'}],
    }),
    defineField({
      name: 'text',
      type: 'basicBlock',
    }),
    defineField({
      name: 'background',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {type: '#000000'},
    }),
  ],
  preview: {
    select: {
      media: 'slide.0.asset',
      subtitle: 'text',
    },
    prepare({media, subtitle}) {
      return {
        title: 'Carousel',
        media: media || <ArrowLeftRight strokeWidth={1.5} size={25} />,
        subtitle: subtitle ? `${Object.keys(subtitle).length} Slides` : '',
      }
    },
  },
})
