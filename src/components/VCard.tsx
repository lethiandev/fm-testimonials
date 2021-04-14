import { FunctionalComponent } from 'vue'
import { variant, Variant } from '@/utils/variant'
import cardStyles from '@/scss/card.module.scss'

interface Props {
  variant?: Variant
}

function variantCard(name?: Variant): string {
  return cardStyles[variant('card', name)]
}

const VCard: FunctionalComponent<Props> = (props, { slots }) => (
  <article class={variantCard(props.variant)}>{slots.default?.()}</article>
)

export default VCard
