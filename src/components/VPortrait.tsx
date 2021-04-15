import { defineComponent, PropType } from 'vue'
import { variant, Variant } from '@/utils/variant'

import portraitStyles from '@/scss/portrait.module.scss'

function variantPortrait(name?: Variant): string {
  return portraitStyles[variant('portrait', name)]
}

export default defineComponent({
  name: 'VPortrait',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<Variant>,
      default: '',
    },
  },
  setup(props) {
    return () => (
      <img
        class={variantPortrait(props.variant)}
        src={props.src}
        alt={props.alt}
      />
    )
  },
})
