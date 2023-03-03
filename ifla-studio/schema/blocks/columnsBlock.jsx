import {defineField} from 'sanity'

const BodyStyle = (props) => (
  <span style={{fontFamily: 'Times New Roman, serif', display: 'flex'}}>{props.children}</span>
)
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
        {title: 'Heading', value: 'h2'},
        {title: 'Subheading', value: 'h4'},
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