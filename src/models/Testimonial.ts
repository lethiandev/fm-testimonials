import Author from './Author'

export default interface Testimonial {
  id: number
  author: Author
  heading: string
  content: string
}
