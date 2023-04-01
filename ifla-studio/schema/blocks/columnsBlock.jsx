import { defineField } from 'sanity'

const LargeStyle = (props) => (
  <span style={{display: 'flex', fontSize: '1.2rem', lineHeight: "1.45rem"}}>{props.children}</span>
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
        {title: 'Large', value: 'large', component: LargeStyle},
        {title: 'Subheading', value: 'h6'},
        {title: 'Heading', value: 'h3'},
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [{type: 'internalLinkObject'}, {type: 'externalLinkObject'}],
      },
    },
    {type: 'imageModule'},
    {type: 'widgetModule'},
  ],
})
