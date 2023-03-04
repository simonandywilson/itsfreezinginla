import {defineField} from 'sanity'

const BodyStyle = (props) => (
  <span style={{fontFamily: 'Times New Roman, serif', display: 'flex'}}>{props.children}</span>
)
const HeadingStyle = (props) => (
  <span style={{display: 'flex', fontSize: '1rem'}}>{props.children}</span>
)

export default defineField({
  name: 'defaultBlock',
  title: 'Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Body', value: 'normal', component: BodyStyle},
        {title: 'Heading', value: 'h5', component: HeadingStyle},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [{type: 'internalLinkObject'}, {type: 'externalLinkObject'}],
      },
    },
    {type: 'imageModule'},
    {type: 'carouselModule'},
    {type: 'imageGridModule'},
    {type: 'textColumnsModule'},
    {type: 'collapsibleModule'},
  ],
})
