import { createStore } from 'vuex';

const generateRandomDiscount = () => {
    const discounts = [
        '₹50 OFF ABOVE ₹199',
        '₹75 OFF ABOVE ₹299',
        '₹100 OFF ABOVE ₹399',
        '₹125 OFF ABOVE ₹249',
        '₹150 OFF ABOVE ₹499'
    ];
    return discounts[Math.floor(Math.random() * discounts.length)];
};

const generateRandomCuisines = () => {
    const cuisinesList = [
        ['Indian', 'Punjabi', 'Tandoor'],
        ['Chinese', 'Szechwan', 'Noodles'],
        ['Italian', 'Pizza', 'Pasta'],
        ['Mexican', 'Tacos', 'Burritos'],
        ['Continental', 'Steak', 'Salad']
    ];
    return cuisinesList[Math.floor(Math.random() * cuisinesList.length)];
};

const generateRandomLocation = () => {
    const locations = ['Hinjawadi', 'Baner', 'Aundh', 'Koregaon Park', 'Viman Nagar'];
    return locations[Math.floor(Math.random() * locations.length)];
};

const generateRandomDeliveryTime = () => {
    return Math.floor(Math.random() * 30) + 10; // Random time between 10 and 40 minutes
};

const store = createStore({
    state() {
        return {
            foodItems: [],
            selectedItem: null,
            currentPage: 1,
            itemsPerPage: 6,
            selectedFilter: null,
            selectedSort: null
        };
    },
    getters: {
        filteredAndSortedItems(state) {
            let items = [...state.foodItems];

            // Apply filter
            if (state.selectedFilter) {
                items = items.filter(item => item.location === state.selectedFilter);
            }

            // Apply sorting
            if (state.selectedSort === 'asc') {
                items.sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.selectedSort === 'desc') {
                items.sort((a, b) => b.name.localeCompare(a.name));
            }

            // Pagination logic
            const start = (state.currentPage - 1) * state.itemsPerPage;
            const end = start + state.itemsPerPage;
            return items.slice(start, end);
        },
        totalPages(state) {
            return Math.ceil(state.foodItems.length / state.itemsPerPage);
        }
    },
    mutations: {
        setFoodItems(state, foodItems) {
            state.foodItems = foodItems;
        },
        setSelectedItem(state, item) {
            state.selectedItem = item;
        },
        clearSelectedItem(state) {
            state.selectedItem = null;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setSelectedFilter(state, filter) {
            state.selectedFilter = filter;
        },
        setSelectedSort(state, sortOrder) {
            state.selectedSort = sortOrder;
        }
    },
    actions: {
        async fetchFoodItems({ commit }) {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
            const data = await response.json();
            const foodItems = data.meals.map(meal => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
                rating: (Math.random() * 5).toFixed(1),
                discount: generateRandomDiscount(),
                cuisines: generateRandomCuisines(),
                location: generateRandomLocation(),
                deliveryTime: generateRandomDeliveryTime()
            }));
            commit('setFoodItems', foodItems);
        },
        filterFoodItems({ commit }, filter) {
            commit('setSelectedFilter', filter);
        },
        sortFoodItems({ commit }, sortOrder) {
            commit('setSelectedSort', sortOrder);
        },
        nextPage({ commit, state, getters }) {
            if (state.currentPage < getters.totalPages) {
                commit('setCurrentPage', state.currentPage + 1);
            }
        },
        prevPage({ commit, state }) {
            if (state.currentPage > 1) {
                commit('setCurrentPage', state.currentPage - 1);
            }
        },
        openModal({ commit }, item) {
            commit('setSelectedItem', item); 
        },
        closeModal({ commit }) {
            commit('clearSelectedItem'); 
        }
    }
});

export default store;
