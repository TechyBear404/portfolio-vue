<template>
    <nav class="flex flex-col sm:flex-row gap-1 sm:gap-6 justify-end items-center sm:pr-10 py-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cv">Curriculum Vitae</RouterLink>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>