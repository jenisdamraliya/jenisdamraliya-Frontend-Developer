import FoodItemsSection from './FoodItemsSection.vue'

describe('<FoodItemsSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FoodItemsSection)
  })
})