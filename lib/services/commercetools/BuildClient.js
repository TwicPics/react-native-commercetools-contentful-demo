import { ClientBuilder } from '@commercetools/sdk-client-v2'
import {
  CTP_PROJECT_KEY,
  CTP_AUTH_URL,
  CTP_API_URL,
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_SCOPES,
} from '@env'

const projectKey = CTP_PROJECT_KEY
const scopes = CTP_SCOPES.split(' ')

// Configure authMiddlewareOptions
const authMiddlewareOptions = {
  host: CTP_AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: CTP_CLIENT_ID,
    clientSecret: CTP_CLIENT_SECRET,
  },
  scopes,
  fetch,
}

// Configure httpMiddlewareOptions
const httpMiddlewareOptions = {
  host: CTP_API_URL,
  fetch,
}

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  // .withProjectKey(projectKey) 
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build()
