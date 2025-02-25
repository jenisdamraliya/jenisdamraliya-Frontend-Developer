<template>
    <transition name="fade" mode="out-in">
        <div class="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 backdrop-blur-sm"
            @click.self="closeModal">
            <div
                class="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-lg text-center transform transition-all duration-300 scale-95">
                <button @click="closeModal"
                    class="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl font-bold focus:outline-none">✕</button>
                <h2 class="text-xl font-bold mb-4">{{ item.name }}</h2>
                <img :src="item.image" alt="Food Image" class="w-full h-64 object-cover rounded-md mb-4" />
                <p>{{ item.description }}</p>
                <p class="mt-4">Rating: ⭐{{ item.rating }}</p>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    item: Object
});

const emits = defineEmits(['close']);

const closeModal = () => {
    emits('close');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>