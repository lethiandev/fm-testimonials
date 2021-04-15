import { computed, defineComponent, PropType } from 'vue'
import { fullName } from '@/utils/fullName'
import { Variant } from '@/utils/variant'
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
    variant: {
      type: String as PropType<Variant>,
      default: '',
    },
  },
  setup(props) {
    const verification = computed(() =>
      props.author.verified ? 'Verified Graduate' : 'Not Verified'
    )

    return () => (
      <article class={styles.profile}>
        <div class={styles.profilePicture}>
          <ProfilePicture author={props.author} variant={props.variant} />
        </div>
        <h3 class={styles.profileHeading}>{fullName(props.author)}</h3>
        <p class={styles.profileStatus}>{verification.value}</p>
      </article>
    )
  },
})
