import { config, shallowMount } from '@vue/test-utils'
import Testimonial from '@/models/Testimonial'
import TestimonialCard from '@/components/TestimonialCard'
import ProfileLine from '@/components/ProfileLine'

const testimonial: Testimonial = {
  id: 1,
  author: {
    id: 0,
    profileImageUrl: '/test-profile.png',
    firstName: 'Johntest',
    lastName: 'Doetest',
    verified: true,
  },
  heading: 'Testimonial test heading',
  content: 'Testimonial test content',
}

describe('TestimonialCard.tsx', () => {
  beforeAll(() => {
    config.renderStubDefaultSlot = true
  })

  afterAll(() => {
    config.renderStubDefaultSlot = false
  })

  it('should display testimonial content', () => {
    const wrapper = shallowMount(TestimonialCard, {
      props: { testimonial },
    })

    expect(wrapper.find('h2').text()).toEqual(testimonial.heading)
    expect(wrapper.find('p').text()).toEqual(testimonial.content)
  })

  it('should display author profile', () => {
    const wrapper = shallowMount(TestimonialCard, {
      props: { testimonial },
    })

    const profile = wrapper.findComponent(ProfileLine)
    expect(profile.props('author')).toEqual(testimonial.author)
  })
})
