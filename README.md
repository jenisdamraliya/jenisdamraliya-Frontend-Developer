# Food Menu Webpage

## Project Overview
Your main goal is to create a Food Menu Webpage! 🍔🍕 The task involves building a landing page with the following sections:
- Filters section
- Food items section
- Header with the Logo and Search Bar
- Footer to balance the bottom of the web page

To make it even more interesting, we're using the Food API available at [TheMealDB](https://www.themealdb.com/api.php). Additionally, we aim to mimic the design, colors, and theme of [Swiggy](https://www.swiggy.com/) for a cohesive look. The application must be fully responsive and compatible across various screen sizes.

## Key Components

### Header Section
- Includes a logo and a search bar (Note: the search bar design needs to be achieved, but it does not need to be functional).

### Filters Section
- Styled based on the provided reference image.
- Upon clicking the “Filter” tag, a dropdown should appear.
- Only implement “Filter By Area” (See API docs for relevant endpoints). The dropdown should list Areas along with HTML Radio boxes. Users can select any Area, and clicking “Apply” will dynamically update the Food Items Section with matching food items from that Area.
- Implement Sorting Functionality to allow users to Sort Food Items Alphabetically.

### Food Items Section (Data Grid)
- By default, display all Indian food items (refer to the API docs). Note: we focus on showcasing food items within the scope of this assignment.
- Each food item card should include an image, name, and ratings (ratings can be generated randomly). Clicking on a food item opens a Modal with additional details about the selected item (see API docs for relevant endpoints).
- Clicking on a food item triggers a Modal that provides additional details about the selected food item. Ensure the Modal design is consistent with the overall aesthetics.
- Incorporate Pagination, maintaining consistency with the overall colors and theme.

### Footer Section
- A footer to balance the bottom of the web page.

## API Reference
- [TheMealDB API](https://www.themealdb.com/api.php)

## Tools & Technology
- Vue.js, Tailwind CSS, Vuex (State Management), Cypress

## Installation & Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/jenisdamraliya/jenisdamraliya-Frontend-Developer.git
    ```
2. Navigate to the project directory:
    ```bash
    cd jenisdamraliya-Frontend-Developer
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Project Functionality
1. **Landing Page**: The main page includes a header with a logo and search bar, filters section, food items section, and footer.
2. **Filters Section**: Users can filter food items by area using a dropdown menu, and sort food items alphabetically.
3. **Food Items Section**: Displays Indian food items by default with an image, name, and ratings. Users can click on a food item to see more details in a modal. Includes pagination for easy navigation.
4. **Modal**: Clicking on a food item opens a modal with additional details about the selected item.
5. **Responsive Design**: The webpage is fully responsive and compatible across various screen sizes.

## Testing
- Run Cypress tests to ensure the application works as expected:
    ```bash
    npx cypress open
    ```

## Deployment
https://jenisdamraliya-frontend-developer-scfw.vercel.app/

## Video Demonstration
https://drive.google.com/file/d/1Mu5uJC4ztA8bYDUyIS5x6OjcIPQBjax2/view?usp=sharing

