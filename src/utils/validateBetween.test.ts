import dayjs from 'dayjs'

import { validateBetween } from './validateBetween'

const generateDate = (day: number) => dayjs().add(day, 'day').format('YYYY-MM-DDTHH:mm:ss[Z]')

describe('validateBetween', () => {
  it('今が含まれるなら valid', () => {
    const start = generateDate(-1)
    const end = generateDate(1)
    expect(validateBetween(start, end)).toBeTruthy()
  })
  it('今だけど開始と終了が逆なら invalid', () => {
    const start = generateDate(1)
    const end = generateDate(-1)
    expect(validateBetween(start, end)).toBeFalsy()
  })
  it('未来なら invalid', () => {
    const start = generateDate(10)
    const end = generateDate(20)
    expect(validateBetween(start, end)).toBeFalsy()
  })
  it('過去なら invalid', () => {
    const start = generateDate(-10)
    const end = generateDate(-1)
    expect(validateBetween(start, end)).toBeFalsy()
  })
})
