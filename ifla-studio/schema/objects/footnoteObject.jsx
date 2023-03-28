import {defineField} from 'sanity'
import {Asterisk} from 'lucide-react'

export default defineField({
  name: 'footnoteObject',
  title: 'Footnote',
  type: 'object',
  icon: <Asterisk strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'footnote',
      type: 'basicBlock',
    }),
  ],
  preview: {
    select: {
      subtitle: 'footnote',
    },
    prepare(selection) {
        const { subtitle } = selection;
        console.log(subtitle);
      return {
        title: 'Footnote',
        media: <Asterisk strokeWidth={2} size={15} />,
        subtitle: subtitle[0]?.children[0]?.text || "",
      }
    },
  },
})
