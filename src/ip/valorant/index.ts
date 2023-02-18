import { getProgressPercent } from '../../utils/getProgressPercent'
import { validateBetween } from '../../utils/validateBetween'
import { newAdaptor } from '../adaptor'
import { data } from './data'
import { Act, ProgressSchema, Season, SeasonSchema } from './type'

const getCurrentAct = (_acts: Act[]): Act | null => {
  if (_acts.length === 0) {
    return null
  }
  const [currentAct, ...acts] = _acts
  if (validateBetween(currentAct.start, currentAct.end)) {
    return currentAct
  }
  return getCurrentAct(acts)
}

const getProgress = (season: Season) => {
  const currentAct = getCurrentAct(season.acts)
  if (currentAct === null) throw new Error('No act found')
  return {
    act: currentAct.number,
    actProgress: String(
      getProgressPercent({
        start: new Date(currentAct.start),
        end: new Date(currentAct.end),
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

export const valorant = newAdaptor({
  ip: 'Valorant',
  data,
  SeasonSchema,
  ProgressSchema,
  getProgress,
})
