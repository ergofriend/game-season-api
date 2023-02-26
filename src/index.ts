import { DOCUMENT_URL, router } from './router'

export default {
  // fetch: router.handle,
  fetch: (request: Request) => {
    // Redirect root to the docs
    const path = new URL(request.url).pathname
    if (path === '/') return Response.redirect(DOCUMENT_URL, 301)

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
