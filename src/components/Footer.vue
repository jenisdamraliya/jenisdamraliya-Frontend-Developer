<template>
    <footer class="bg-gray-900 text-white py-6 mt-5">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div class="items-center">
                <img :src="swiggyLogo" alt="Swiggy Logo" class="h-8 mr-4">
                <p class="text-xs mt-2 text-gray-400">&#169; 2025 Jenis Damraliya</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import swiggyLogo from '../assets/swiggy-logo.svg';
</script>

<style scoped>
footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>