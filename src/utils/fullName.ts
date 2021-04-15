export interface Nameify {
  firstName: string
  lastName: string
}

export function fullName(from: Nameify): string {
  return `${from.firstName} ${from.lastName}`
}
