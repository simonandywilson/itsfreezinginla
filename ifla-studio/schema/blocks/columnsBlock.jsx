import {defineField} from 'sanity'


const HeadingStyle = (props) => (
  <span style={{display: 'flex', fontSize: '1rem'}}>{props.children}</span>
)

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
    {type: 'collapsibleModule'},
  ],
})
