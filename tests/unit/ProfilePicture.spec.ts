import { shallowMount } from '@vue/test-utils'
import { fullName } from '@/utils/fullName'
import Author from '@/models/Author'
import ProfilePicture from '@/components/ProfilePicture'

const author: Author = {
  id: 0,
  profileImageUrl: '/test-image.png',
  firstName: 'Johntest',
  lastName: 'Doetest',
  verified: true,
}

describe('ProfilePicture.tsx', () => {
  it('should have profile attributes', () => {
    const wrapper = shallowMount(ProfilePicture, {
      props: { author },
    })

    expect(wrapper.attributes('src')).toEqual(author.profileImageUrl)
    expect(wrapper.attributes('alt')).toEqual('Johntest Doetest')
  })
})
