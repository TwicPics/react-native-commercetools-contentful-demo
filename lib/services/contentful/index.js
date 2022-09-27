import { createClient } from 'contentful'
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN
} from '@env'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CONTENTFUL_ACCESS_TOKEN
})

export const getBlogPosts = () => {
  return client.getEntries({ content_type: 'blogPost' })
}
