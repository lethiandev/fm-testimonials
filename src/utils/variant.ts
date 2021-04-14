export type Variant = 'white' | 'violet' | 'grayish-blue' | 'blackish-blue'

export function variant(base: string, name?: Variant): string {
  return name ? `${base}-${name}` : base
}
