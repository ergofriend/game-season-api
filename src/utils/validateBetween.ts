/**
 * 今が開始日時と終了日時の間にあるかどうかを判定する
 * @param _start RFC3339
 * @param _end RFC3339
 * @returns boolean
 */
export const validateBetween = (_start: string, _end: string): boolean => {
  const now = new Date().getTime()
  const start = new Date(_start).getTime()
  const end = new Date(_end).getTime()
  return start <= now && now <= end
}
