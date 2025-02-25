import FoodItemModal from './FoodItemModal.vue'

describe('<FoodItemModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FoodItemModal)
  })
})