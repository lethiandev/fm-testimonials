import { computed, defineComponent, PropType } from 'vue'
import { Variant } from '@/utils/variant'
import Testimonial from '@/models/Testimonial'
import VCard from './VCard'
import ProfileLine from './ProfileLine'

import tmStyles from '@/scss/testimonial.module.scss'

export default defineComponent({
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object as PropType<Testimonial>,
      required: true,
    },
    variant: {
      type: String as PropType<Variant>,
      default: '',
    },
  },
  setup(props) {
    const author = computed(() => props.testimonial.author)

    return () => (
      <VCard class={tmStyles.testimonial} variant={props.variant}>
        <ProfileLine author={author.value} variant={props.variant} />
        <h2>{props.testimonial.heading}</h2>
        <p>{props.testimonial.content}</p>
      </VCard>
    )
  },
})
