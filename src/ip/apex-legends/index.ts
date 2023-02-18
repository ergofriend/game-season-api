import { getProgressPercent } from '../../utils/getProgressPercent'
import { newAdaptor } from '../adaptor'
import { data } from './data'
import { ProgressSchema, Season, SeasonSchema } from './type'

const getProgress = (season: Season) => {
  const splitNumber = Date.now() < new Date(season.split).getTime() ? 1 : 2
  const splitPeriod =
    splitNumber === 1
      ? [season.start, season.split]
      : [season.split, season.end]

  return {
    split: splitNumber,
    splitProgress: String(
      getProgressPercent({
        start: new Date(splitPeriod[0]),
        end: new Date(splitPeriod[1]),
        now: new Date(),
      }),
    ),
    seasonProgress: String(
      getProgressPercent({
        start: new Date(season.start),
        end: new Date(season.end),
        now: new Date(),
      }),
    ),
  }
}

export const apex = newAdaptor({
  ip: 'Apex Legends',
  data,
  SeasonSchema,
  ProgressSchema,
  getProgress,
})
