import groq from 'groq'
import {createClient} from '@sanity/client'
import {projectDetails} from '../projectDetails'

export const client = createClient({
  ...projectDetails,
  useCdn: true,
})

export async function getParentSlug(document) {
  const parentSlug = await client.fetch(
    groq`coalesce(*[_id == 'drafts.' + $id][0], *[_id == $id][0]).parent->{"slug": name}`,
    {
      id: document._id,
    }
  )
  return parentSlug.slug.toLowerCase()
}
