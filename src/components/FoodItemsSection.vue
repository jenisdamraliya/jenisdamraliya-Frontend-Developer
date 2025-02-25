<template>
    <div class="p-4">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <FoodItemCard v-for="item in paginatedItems" :key="item.id" :item="item" @openModal="openModal" />
            </div>
            <FoodItemModal v-if="selectedItem" :item="selectedItem" @close="closeModal" />
            <div class="mt-4 flex justify-center">
                <button
                    class="text-gray-800 border border-gray-400 px-4 py-2 rounded-full mx-1 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100"
                    :disabled="currentPage === 1" @click="prevPage">Previous</button>
                <button
                    class="text-gray-800 border border-gray-400 px-4 py-2 rounded-full mx-1 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100"
                    :disabled="currentPage === totalPages" @click="nextPage">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import FoodItemCard from './FoodItemCard.vue';
import FoodItemModal from './FoodItemModal.vue';

const store = useStore();
const paginatedItems = computed(() => store.getters.filteredAndSortedItems);
const selectedItem = computed(() => store.state.selectedItem);
const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => store.getters.totalPages);

const fetchFoodItems = () => store.dispatch('fetchFoodItems');
const openModal = (item) => store.dispatch('openModal', item);
const closeModal = () => store.dispatch('closeModal');
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        store.dispatch('nextPage');
    }
};
const prevPage = () => {
    if (currentPage.value > 1) {
        store.dispatch('prevPage');
    }
};

onMounted(() => {
    fetchFoodItems();
});
</script>