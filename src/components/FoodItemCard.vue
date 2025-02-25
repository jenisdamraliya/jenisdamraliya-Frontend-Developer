<template>
    <div @click="openModal"
        class="shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
        <img :src="item.image" alt="Food Image" class="w-full h-40 object-cover rounded-md mb-4" />
        <div class="mb-4">
            <h3 class="text-lg font-bold">{{ item.name }}</h3>
            <p class="text-sm text-gray-600">{{ item.location }}</p>
            <p class="text-sm text-gray-600">Rating: ⭐{{ item.rating }}</p>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sm text-green-500">{{ item.discount }}</span>
            <span class="text-sm text-gray-500">{{ item.deliveryTime }} mins</span>
        </div>
        <div class="mt-4">
            <p class="text-sm text-gray-800">Cuisines: {{ item.cuisines.join(', ') }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    item: Object
});

const emits = defineEmits(['openModal']);

const openModal = () => {
    emits('openModal', props.item);
};
</script>