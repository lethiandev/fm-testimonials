import { computed, defineComponent, PropType } from 'vue'
import { fullName } from '@/utils/fullName'
import Author from '@/models/Author'
import ProfilePicture from './ProfilePicture'

import styles from '@/scss/profile.module.scss'

export default defineComponent({
  name: 'ProfileLine',
  props: {
    author: {
      type: Object as PropType<Author>,
      required: true,
    },
  },
  setup(props) {
    const verification = computed(() =>
      props.author.verified ? 'Verified Graduate' : 'Not Verified'
    )

    return () => (
      <div class={styles.profile}>
        <div class={styles.profilePicture}>
          <ProfilePicture author={props.author} />
        </div>
        <h3 class={styles.profileHeading}>{fullName(props.author)}</h3>
        <p class={styles.profileStatus}>{verification.value}</p>
      </div>
    )
  },
})
