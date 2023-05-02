import { Int, Str } from '@cloudflare/itty-router-openapi'

import { CommonSeason } from '../../type'

export type Season = CommonSeason & {
  split?: string
}

export type SeasonData = Record<number, Season>

export const SeasonSchema = {
  number: new Int({ example: 15 }),
  name: new Str({ example: 'Eclipse' }),
  start: new Str({ example: '2021-03-09T00:00:00Z' }),
  end: new Str({ example: '2021-06-08T00:00:00Z' }),
  split: new Str({ example: '2021-06-08T00:00:00Z', required: false }),
}

export const ProgressSchema = {
  split: new Int({ example: 2, required: false }),
  splitProgress: new Str({ example: '30.4', required: false }),
  seasonProgress: new Str({ example: '73.2' }),
}
