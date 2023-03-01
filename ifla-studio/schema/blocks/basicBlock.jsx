import {defineField} from 'sanity'

export default defineField({
  name: 'basicBlock',
  title: 'Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    },
  ],
})
