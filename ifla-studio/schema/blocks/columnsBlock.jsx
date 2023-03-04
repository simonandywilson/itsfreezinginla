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
        {title: 'Heading', value: 'h3'},
        {title: 'Body', value: 'normal'},
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
