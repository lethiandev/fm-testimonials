import { defineComponent } from 'vue'
import HomePage from './pages/HomePage'
import '@/scss/theme.scss'

export default defineComponent({
  setup() {
    return () => <HomePage />
  },
})
