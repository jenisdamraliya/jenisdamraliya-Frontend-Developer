<template>
    <div class="p-4">
        <div class="container mx-auto">
            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Restaurants with online food delivery in Pune
            </div>

            <!-- Button Row -->
            <div class="flex flex-wrap items-center gap-2">

                <!-- Filter Button -->
                <div class="relative">
                    <button @click="isFilterDropdownOpen = !isFilterDropdownOpen"
                        class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex items-center whitespace-nowrap text-sm cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100">
                        Filter
                        <img :src="FilterIcon" alt="Filter Icon" class="ml-2 w-4 h-4">
                    </button>

                    <div v-if="isFilterDropdownOpen"
                        class="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                        <h3 class="text-sm font-semibold mb-2">Filter by Area</h3>
                        <div class="space-y-2">
                            <label v-for="location in locations" :key="location" class="flex items-center space-x-2">
                                <input type="radio" class="form-radio text-gray-500" v-model="selectedFilter"
                                    :value="location">
                                <span class="text-gray-700">{{ location }}</span>
                            </label>
                        </div>
                        <button @click="applyFilter"
                            class="mt-3 w-full bg-black text-white py-1.5 rounded-lg hover:bg-gray-600 text-sm">
                            Apply
                        </button>
                    </div>
                </div>

                <!-- Sort Button -->
                <div class="relative">
                    <button @click="isSortDropdownOpen = !isSortDropdownOpen"
                        class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex items-center whitespace-nowrap text-sm cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100">
                        Sort By
                        <img :src="DownIcon" alt="Sort Icon" class="ml-2 w-4 h-4">
                    </button>

                    <div v-if="isSortDropdownOpen"
                        class="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                        <h3 class="text-sm font-semibold mb-2">Sort by</h3>
                        <div class="space-y-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" class="form-radio text-blue-500" v-model="selectedSort" value="asc">
                                <span class="text-gray-700">A-Z</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" class="form-radio text-blue-500" v-model="selectedSort"
                                    value="desc">
                                <span class="text-gray-700">Z-A</span>
                            </label>
                        </div>
                        <button @click="applySort"
                            class="mt-3 w-full bg-black text-white py-1.5 rounded-lg hover:bg-gray-600 text-sm">
                            Apply
                        </button>
                    </div>
                </div>

                <!-- Other Buttons -->
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Fast Delivery
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    New on Swiggy
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Ratings 4.0+
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Pure Veg
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Offers
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Rs. 300 - Rs. 600
                </button>
                <button
                    class="bg-white px-3 text-gray-800 border-gray-400 py-2 rounded-full border shadow-sm flex-shrink-0 whitespace-nowrap text-sm">
                    Less than Rs. 300
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import FilterIcon from '../assets/filter.svg';
import DownIcon from '../assets/down-icon.svg';

const store = useStore();
const isFilterDropdownOpen = ref(false);
const isSortDropdownOpen = ref(false);
const selectedFilter = ref(null);
const selectedSort = ref(null);

const locations = ['Hinjawadi', 'Baner', 'Aundh', 'Koregaon Park', 'Viman Nagar'];

const applyFilter = () => {
    store.dispatch("filterFoodItems", selectedFilter.value);
    isFilterDropdownOpen.value = false;
};

const applySort = () => {
    store.dispatch("sortFoodItems", selectedSort.value);
    isSortDropdownOpen.value = false;
};
</script>