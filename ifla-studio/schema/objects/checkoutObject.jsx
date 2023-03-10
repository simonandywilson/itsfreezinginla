import {defineField} from 'sanity'
import {ShoppingBag} from 'lucide-react'

export default defineField({
  name: 'checkoutObject',
  title: 'Checkout Link',
  type: 'object',
  icon: <ShoppingBag strokeWidth={1.5} size={20} />,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'reference',
      title: 'Reference to Product Variant:',
      type: 'reference',
      to: [{type: 'productVariant'}],
    }),
  ],
})
