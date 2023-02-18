import { Int, Str } from '@cloudflare/itty-router-openapi'

import { CommonSeason } from '../../type'

export type Act = {
  number: number
  start: string
  end: string
}

export type Season = CommonSeason & {
  acts: Act[]
}

export type SeasonData = Record<number, Season>

export const SeasonSchema = {
  number: new Int({ example: 15 }),
  name: new Str({ example: 'Eclipse' }),
  start: new Str({ example: '2021-03-09T00:00:00Z' }),
  end: new Str({ example: '2021-06-08T00:00:00Z' }),
  acts: [
    {
      number: new Int({ example: 15 }),
      start: new Str({ example: '2021-03-09T00:00:00Z' }),
      end: new Str({ example: '2021-06-08T00:00:00Z' }),
    },
  ],
}

export const ProgressSchema = {
  act: new Int({ example: 2 }),
  seasonProgress: new Int({ example: 70.9 }),
  actProgress: new Int({ example: 89.31 }),
}
