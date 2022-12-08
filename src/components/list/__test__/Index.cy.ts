/// <reference types="cypress" />
import { mount } from 'cypress/vue'
import Index from '../Index.vue'
import 'tailwindcss/tailwind.css'
// import '../../../assets/css/tailwindcss.css'

describe('<Index />', () => {
  it('renders', () => {
    mount(Index, {
      props: {
        inputModel: '',
      },
    }).get('[data-cy="input"]')
  })
})
