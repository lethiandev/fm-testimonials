import { computed, defineComponent, PropType } from 'vue'
import { Variant } from '@/utils/variant'
import Testimonial from '@/models/Testimonial'
import TestimonialCard from './TestimonialCard'

import tmStyles from '@/scss/testimonial.module.scss'

export default defineComponent({
  name: 'TestimonialGrid',
  props: {
    testimonials: {
      type: Array as PropType<Testimonial[]>,
      required: true,
    },
    variants: {
      type: Array as PropType<Variant[]>,
      default: () => [
        'violet',
        'grayish-blue',
        'white',
        'white',
        'blackish-blue',
      ],
    },
  },
  setup(props) {
    const variant = (index: number) =>
      props.variants[index % props.variants.length]

    const factorCard = (item: Testimonial, i: number) => (
      <TestimonialCard key={i} testimonial={item} variant={variant(i)} />
    )

    const cards = computed(() => props.testimonials.map(factorCard))

    return () => (
      <section class={tmStyles.testimonialGrid}>{cards.value}</section>
    )
  },
})
