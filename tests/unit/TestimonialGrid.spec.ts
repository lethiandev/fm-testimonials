import { shallowMount } from '@vue/test-utils'
import Testimonial from '@/models/Testimonial'
import TestimonialGrid from '@/components/TestimonialGrid'
import TestimonialCard from '@/components/TestimonialCard'

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: null as any,
    heading: 'Testimonial test heading #1',
    content: 'Testimonial test content #1',
  },
  {
    id: 2,
    author: null as any,
    heading: 'Testimonial test heading #2',
    content: 'Testimonial test content #2',
  },
  {
    id: 3,
    author: null as any,
    heading: 'Testimonial test heading #3',
    content: 'Testimonial test content #3',
  },
]

describe('TestimonialCard.tsx', () => {
  it('should display testimonial cards', () => {
    const wrapper = shallowMount(TestimonialGrid, {
      props: { testimonials },
    })

    expect(wrapper.findAllComponents(TestimonialCard).length).toEqual(3)
  })
})
