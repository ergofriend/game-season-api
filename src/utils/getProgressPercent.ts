type ProgressPercentProp = {
  start: Date
  now: Date
  end: Date
}

/**
 * 100% 形式で進行度を返す。
 * 開催前の場合は 0% を返す。
 * 終了している場合は 100% を返す。
 * @param start 開始日
 * @param now 現在日
 * @param end 終了日
 * @returns 進行度 0.0 ~ 100.0
 */
export const getProgressPercent = ({ start, end, now }: ProgressPercentProp) => {
  if (now.getTime() < start.getTime()) return 0
  if (end.getTime() < now.getTime()) return 100
  const totalTime = end.getTime() - start.getTime()
  const elapsedTime = now.getTime() - start.getTime()
  const progressTime = elapsedTime / totalTime
  return Number((progressTime * 100).toFixed(1))
}
