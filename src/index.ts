import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'

import { applyIPEndpoint } from './ip'

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: 'Game Season API',
      description: 'https://github.com/ergofriend/game-season-api',
      version: '1.0',
    },
    servers: [
      {
        url: 'https://game-season-api.ergofriend.workers.dev/',
        description: 'Production',
      },
    ],
  },
})
applyIPEndpoint(router)
router.all('*', () => new Response('Not Found', { status: 404 }))

export default {
  // fetch: router.handle,
  fetch: (request: Request) => {
    // Redirect root to the docs
    const path = new URL(request.url).pathname
    if (path === '/')
      return Response.redirect('https://bump.sh/kasu/doc/game-season-api', 301)

    if (path === '/health') return new Response(null, { status: 200 })

    return router
      .handle(request)
      .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return response
      })
      .catch(err => {
        console.log(err)
        return new Response('Internal Server Error', { status: 500 })
      })
  },
}
