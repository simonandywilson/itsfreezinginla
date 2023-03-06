import {defineField} from 'sanity'

export default defineField({
  name: 'columnsBlock',
  title: 'Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Body', value: 'normal'},
        {title: 'Subheading', value: 'h6'},
        {title: 'Heading', value: 'h3'},
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    },
    {type: 'imageModule'},
    {type: 'carouselModule'},
  ],
})
