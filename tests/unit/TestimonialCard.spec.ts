import { mount } from '@vue/test-utils'
import Testimonial from '@/models/Testimonial'
import TestimonialCard from '@/components/TestimonialCard'

const testimonial: Testimonial = {
  id: 1,
  author: null as any,
  heading: 'Testimonial test heading',
  content: 'Testimonial test content',
}

describe('TestimonialCard.tsx', () => {
  it('should display testimonial content', () => {
    const wrapper = mount(TestimonialCard, {
      props: { testimonial },
    })

    expect(wrapper.find('h2').text()).toEqual(testimonial.heading)
    expect(wrapper.find('p').text()).toEqual(testimonial.content)
  })
})
