import { OpenAPIRoute } from '@cloudflare/itty-router-openapi'

export type CommonSeason = {
  number: number
  name: string
  start: string
  end: string
}

export type Adaptor = {
  currentSeason: OpenAPIRoute
  getSeason: OpenAPIRoute
  getHistory: OpenAPIRoute
}

export type Route = {
  path: string
  adaptor: Adaptor
}

export type HandleProps = {
  params: Record<string, string | undefined>
  query: Record<string, unknown>
}
