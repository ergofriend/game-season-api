import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'

import { applyIPEndpoint } from './ip'

export const SERVER_URL = 'https://game-season-api.kasu.dev'
export const DOCUMENT_URL = 'https://bump.sh/kasu/doc/game-season-api'
const REPOSITORY_URL = 'https://github.com/ergofriend/game-season-api'

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: 'Game Season API',
      description: REPOSITORY_URL,
      version: '1.0',
    },
    servers: [
      {
        url: SERVER_URL,
        description: 'Production',
      },
    ],
  },
})
applyIPEndpoint(router)
router.all('*', () => new Response('Not Found', { status: 404 }))
