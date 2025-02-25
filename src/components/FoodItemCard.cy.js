import FoodItemCard from './FoodItemCard.vue'

describe('<FoodItemCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FoodItemCard)
  })
})