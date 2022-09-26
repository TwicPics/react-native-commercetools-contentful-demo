import { ctpClient } from './BuildClient'
import {
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk'
import {
  CTP_PROJECT_KEY
} from '@env'

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({ projectKey: CTP_PROJECT_KEY })

export const getProject = () => {
  return apiRoot
    .get()
    .execute()
}

export const getProducts = () => {
  return apiRoot
    .products()
    .get()
    .execute()
}