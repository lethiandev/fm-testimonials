import { defineComponent, PropType } from 'vue'
import { fullName } from '@/utils/fullName'
import Author from '@/models/Author'
import VPortrait from './VPortrait'

export default defineComponent({
  name: 'ProfilePicture',
  props: {
    author: {
      type: Object as PropType<Author>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <VPortrait
        src={props.author.profileImageUrl}
        alt={fullName(props.author)}
      />
    )
  },
})
