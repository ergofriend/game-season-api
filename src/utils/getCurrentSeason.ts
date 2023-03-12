import { CommonSeason } from './../type'
import { validateBetween } from './validateBetween'

export const getCurrentSeason = <T extends CommonSeason>(data: Record<number, T>): T | undefined => {
  const seasonList = Object.values(data).reverse()
  return _getCurrentSeason(seasonList)
}

const _getCurrentSeason = <T extends CommonSeason>(data: Array<T>): T | undefined => {
  if (data.length === 0) return undefined
  const season: T | undefined = data[0]
  if (!season) return undefined

  if (validateBetween(season.start, season.end)) return season

  return _getCurrentSeason(data.slice(1))
}
