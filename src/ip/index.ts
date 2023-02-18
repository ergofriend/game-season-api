import { OpenAPIRouterSchema } from '@cloudflare/itty-router-openapi'

import { Adaptor } from '../type'
import { apex } from './apex-legends'
import { valorant } from './valorant'

const applyBase = (
  router: OpenAPIRouterSchema,
  ip: string,
  adaptor: Adaptor,
) => {
  router.get(`/${ip}/current`, adaptor.currentSeason)
  router.get(`/${ip}/history`, adaptor.getHistory)
  router.get(`/${ip}/:season`, adaptor.getSeason)
}

export const applyIPEndpoint = (router: OpenAPIRouterSchema) => {
  applyBase(router, 'apex', apex)
  applyBase(router, 'valorant', valorant)
}
