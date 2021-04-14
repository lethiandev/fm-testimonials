import { mount } from '@vue/test-utils'
import VCard from '@/components/VCard'

describe('VCard.spec.ts', () => {
  it('should have color variants', async () => {
    const wrapper = mount(VCard)

    await wrapper.setProps({ variant: 'white' })
    expect(wrapper.classes('card-white')).toBeTruthy()

    await wrapper.setProps({ variant: 'purple' })
    expect(wrapper.classes('card-purple')).toBeTruthy()

    await wrapper.setProps({ variant: 'grayish-blue' })
    expect(wrapper.classes('card-grayish-blue')).toBeTruthy()

    await wrapper.setProps({ variant: 'blackish-blue' })
    expect(wrapper.classes('card-blackish-blue')).toBeTruthy()
  })
})
