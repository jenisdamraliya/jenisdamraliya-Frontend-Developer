<template>
    <header class="p-4 flex justify-between items-center">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <img :src="isMobile ? swiggyLogoMobile : swiggyLogo" alt="Swiggy Logo" class="h-8 mr-4">
                <!-- <span class="text-xl font-bold">Food Menu App</span> -->
            </div>
            <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <input type="text" placeholder="search for restaurant and food"
                    class="px-3 py-2 pr-10 rounded bg-gray-200 w-full text-black md:px-5 md:py-3">
                <img :src="searchIcon" alt="Search Icon"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import swiggyLogo from '../assets/swiggy-logo.svg';
import swiggyLogoMobile from '../assets/swiggy-1.svg';
import searchIcon from '../assets/search-icon.svg';

const isMobile = ref(window.innerWidth <= 576);

const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= 576;
};

onMounted(() => {
    window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
});
</script>