import Filters from './Filters.vue'

describe('<Filters />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Filters)
  })
})