import {defineField} from 'sanity'
import {Asterisk} from 'lucide-react'

export default defineField({
  name: 'footnoteObject',
  title: 'Footnote',
  type: 'object',
  options: {
    modal: {
      type: 'popover',
      width: 'auto',
    },
  },
  icon: <Asterisk strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'footnote',
      type: 'basicBlock',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footnote',
        media: <Asterisk strokeWidth={2} size={15} />,
      }
    },
  },
})
