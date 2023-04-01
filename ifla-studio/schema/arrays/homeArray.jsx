import {defineField} from 'sanity'

export default defineField({
  name: 'homeArray',
  title: 'Home',
  type: 'array',
  of: [{type: 'heroModule'}, {type: 'articleBannerModule'}, {type: 'featuredBlocksModule'}],
})
