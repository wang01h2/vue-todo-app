import Index from './Index.vue'
import '../assets/css/tailwindcss.css'
describe('<Index />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Index)
  })
})
