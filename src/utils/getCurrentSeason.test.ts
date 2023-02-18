import dayjs from 'dayjs'

import { CommonSeason } from '../type'
import { getCurrentSeason } from './getCurrentSeason'

const generateDate = (day: number) =>
  dayjs().add(day, 'day').format('YYYY-MM-DDTHH:mm:ss[Z]')

describe('getCurrentSeason', () => {
  it('今のシーズンが取得できる', () => {
    const data: Record<number, CommonSeason> = {
      1: {
        number: 1,
        name: 'test',
        start: generateDate(-1),
        end: generateDate(1),
      },
    }
    const currentSeason = getCurrentSeason(data)
    expect(currentSeason?.number).toBe(1)
  })
  it('未来のシーズンを取得しない', () => {
    const data: Record<number, CommonSeason> = {
      2: {
        number: 2,
        name: 'test',
        start: generateDate(2),
        end: generateDate(3),
      },
      1: {
        number: 1,
        name: 'test',
        start: generateDate(-1),
        end: generateDate(1),
      },
    }
    const currentSeason = getCurrentSeason(data)
    expect(currentSeason?.number).toBe(1)
  })
  it('過去のシーズンを取得しない', () => {
    const data: Record<number, CommonSeason> = {
      3: {
        number: 3,
        name: 'test',
        start: generateDate(2),
        end: generateDate(3),
      },
      2: {
        number: 1,
        name: 'test',
        start: generateDate(-1),
        end: generateDate(1),
      },
      1: {
        number: 1,
        name: 'test',
        start: generateDate(-3),
        end: generateDate(-2),
      },
    }
    const currentSeason = getCurrentSeason(data)
    expect(currentSeason?.number).toBe(1)
  })
})
