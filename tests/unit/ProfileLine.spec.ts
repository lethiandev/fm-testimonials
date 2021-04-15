import { shallowMount } from '@vue/test-utils'
import Author from '@/models/Author'
import ProfileLine from '@/components/ProfileLine'
import ProfilePicture from '@/components/ProfilePicture'

const author: Author = {
  id: 0,
  profileImageUrl: '/test-image.png',
  firstName: 'Johntest',
  lastName: 'Doetest',
  verified: true,
}

const authorNotVerified: Author = { ...author, verified: false }

describe('ProfileLine.tsx', () => {
  it('should display profile contents', async () => {
    const wrapper = shallowMount(ProfileLine, {
      props: { author },
    })

    expect(wrapper.findComponent(ProfilePicture).exists()).toBeTruthy()
    expect(wrapper.find('h3').text()).toEqual('Johntest Doetest')
    expect(wrapper.find('p').text()).toEqual('Verified Graduate')
  })

  it('should display verification status', async () => {
    const wrapper = shallowMount(ProfileLine, {
      props: { author },
    })

    expect(wrapper.find('p').text()).toEqual('Verified Graduate')

    await wrapper.setProps({ author: authorNotVerified })
    expect(wrapper.find('p').text()).toEqual('Not Verified')
  })
})
