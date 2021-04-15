import { shallowMount } from '@vue/test-utils'
import VPortrait from '@/components/VPortrait'

describe('VPortrait.tsx', () => {
  it('should render given image', () => {
    const wrapper = shallowMount(VPortrait, {
      props: { src: '/test-image.png', alt: 'Test image' },
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toEqual('/test-image.png')
    expect(img.attributes('alt')).toEqual('Test image')
  })

  it('should have color variants', async () => {
    const wrapper = shallowMount(VPortrait, {
      props: { src: '/test-image.png', alt: 'Test image' },
    })

    await wrapper.setProps({ variant: 'white' })
    expect(wrapper.classes('portrait-white')).toBeTruthy()

    await wrapper.setProps({ variant: 'purple' })
    expect(wrapper.classes('portrait-purple')).toBeTruthy()

    await wrapper.setProps({ variant: 'grayish-blue' })
    expect(wrapper.classes('portrait-grayish-blue')).toBeTruthy()

    await wrapper.setProps({ variant: 'blackish-blue' })
    expect(wrapper.classes('portrait-blackish-blue')).toBeTruthy()
  })
})
