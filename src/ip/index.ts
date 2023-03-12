import { OpenAPIRouterSchema } from '@cloudflare/itty-router-openapi'

import { Adaptor, Route } from '../type'
import { apex } from './apex-legends'
import { valorant } from './valorant'

const applyBase = (router: OpenAPIRouterSchema, ip: string, adaptor: Adaptor) => {
  router.get(`/${ip}/current`, adaptor.currentSeason)
  router.get(`/${ip}/history`, adaptor.getHistory)
  router.get(`/${ip}/:season`, adaptor.getSeason)
}

export const routes: Route[] = [
  { path: 'apex', adaptor: apex },
  { path: 'valorant', adaptor: valorant },
]

export const applyIPEndpoint = (router: OpenAPIRouterSchema) => {
  routes.forEach(({ path, adaptor }) => {
    applyBase(router, path, adaptor)
  })
}
