import { mount } from 'cypress/vue'
import Index from './Index.vue'
import 'tailwindcss/tailwind.css'

describe('<Index />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    mount(Index)
  })
})
