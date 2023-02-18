import { getProgressPercent } from './getProgressPercent'

describe('getProgressPercent', () => {
  it('開催中', async () => {
    const percent = getProgressPercent({
      start: new Date('2021-01-01'),
      end: new Date('2021-03-21'),
      now: new Date('2021-01-10'),
    })
    expect(percent).toBe(11.4)
  })
  it('終了している', async () => {
    const percent = getProgressPercent({
      start: new Date('2021-01-01'),
      end: new Date('2021-03-21'),
      now: new Date('2022-01-10'),
    })
    expect(percent).toBe(100)
  })
  it.concurrent('開始前', async () => {
    const percent = getProgressPercent({
      start: new Date('2021-01-01'),
      end: new Date('2021-03-21'),
      now: new Date('2020-01-10'),
    })
    expect(percent).toBe(0)
  })
})
