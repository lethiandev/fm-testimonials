import { defineComponent, ref } from 'vue'
import Testimonial from '@/models/Testimonial'
import TestimonialGrid from '@/components/TestimonialGrid'

import danielImage from '@/assets/image-daniel.jpg'
import jonathanImage from '@/assets/image-jonathan.jpg'
import jeanetteImage from '@/assets/image-jeanette.jpg'
import patrickImage from '@/assets/image-patrick.jpg'
import kiraImage from '@/assets/image-kira.jpg'

import layoutStyles from '@/scss/layout.module.scss'

export default defineComponent({
  name: 'HomePage',
  setup() {
    // Uses static json but can be used to fetch data
    const testimonials = ref<Testimonial[]>(sampleData)

    return () => (
      <main class={layoutStyles.containerMain}>
        <div class={layoutStyles.containerMainWrapper}>
          <TestimonialGrid testimonials={testimonials.value} />
        </div>
      </main>
    )
  },
})

// Sample data for testimonials
// Comes directly from the challenge files
const sampleData: Testimonial[] = [
  {
    id: 1,
    author: {
      id: 1,
      profileImageUrl: danielImage,
      firstName: 'Daniel',
      lastName: 'Clifford',
      verified: true,
    },
    heading:
      'I received a job offer mid-course, and the subjects I learned ' +
      'were current, if not more so, in the company I joined. I ' +
      'honestly feel I got every penny’s worth.',
    content:
      'I was an EMT for many years before I joined the bootcamp. ' +
      'I’ve been looking to make a transition and have heard some ' +
      'people who had an amazing experience here. I signed up for ' +
      'the free intro course and found it incredibly fun! I enrolled ' +
      'shortly thereafter. The next 12 weeks was the best - and most ' +
      'grueling - time of my life. Since completing the course, I’ve ' +
      'successfully switched careers, working as a Software Engineer ' +
      'at a VR startup.',
  },
  {
    id: 2,
    author: {
      id: 2,
      profileImageUrl: jonathanImage,
      firstName: 'Jonathan',
      lastName: 'Walters',
      verified: true,
    },
    heading: 'The team was very supportive and kept me motivated',
    content:
      'I started as a total newbie with virtually no coding skills. ' +
      'I now work as a mobile engineer for a big company. This was one ' +
      'of the best investments I’ve made in myself.',
  },
  {
    id: 3,
    author: {
      id: 3,
      profileImageUrl: jeanetteImage,
      firstName: 'Jeanette',
      lastName: 'Harmon',
      verified: true,
    },
    heading: 'An overall wonderful and rewarding experience',
    content:
      'Thank you for the wonderful experience! I now have a job I ' +
      'really enjoy, and make a good living while doing something I love.',
  },
  {
    id: 4,
    author: {
      id: 4,
      profileImageUrl: patrickImage,
      firstName: 'Patrick',
      lastName: 'Abrams',
      verified: true,
    },
    heading:
      'Awesome teaching support from TAs who did the bootcamp ' +
      'themselves. Getting guidance from them and learning from ' +
      'their experiences was easy.',
    content:
      'The staff seem genuinely concerned about my progress which I ' +
      'find really refreshing. The program gave me the confidence ' +
      'necessary to be able to go out in the world and present myself ' +
      'as a capable junior developer. The standard is above the rest. ' +
      'You will get the personal attention you need from an incredible ' +
      'community of smart and amazing people.',
  },
  {
    id: 5,
    author: {
      id: 5,
      profileImageUrl: kiraImage,
      firstName: 'Kira',
      lastName: 'Whittle',
      verified: true,
    },
    heading: 'Such a life-changing experience. Highly recommended!',
    content:
      'Before joining the bootcamp, I’ve never written a line of code. ' +
      'I needed some structure from professionals who can help me learn ' +
      'programming step by step. I was encouraged to enroll by a former ' +
      'student of theirs who can only say wonderful things about the ' +
      'program. The entire curriculum and staff did not disappoint. ' +
      'They were very hands-on and I never had to wait long for ' +
      'assistance. The agile team project, in particular, was ' +
      'outstanding. It took my learning to the next level in a way ' +
      'that no tutorial could ever have. In fact, I’ve often referred ' +
      'to it during interviews as an example of my development ' +
      'experience. It certainly helped me land a job as a full-stack ' +
      'developer after receiving multiple offers. 100% recommend!',
  },
]
