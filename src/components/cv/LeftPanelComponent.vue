<template>
    <div class="text-white bg-slate-800 h-full p-10 flex flex-col gap-10">
        <div>
            Photo
        </div>
        <div>
            <h1>Coordonnées</h1>
            <ul>
                <li>{{ data.personalData.address }}</li>
                <li>{{ data.personalData.phone }}</li>
                <li>{{ data.personalData.email }}</li>
                <li>{{ data.personalData.website }}</li>
            </ul>
        </div>
        <div>
            <h1>Langue</h1>
            <ul>
                <li v-for="(language, index) in data.languages" :key="index">{{ language.name }} - {{ language.level }}</li>
            </ul>
        </div>
        <div>
            <h1>Compétances</h1>
            <ul>
                <li v-for="(skill, index) in data.skills" :key="index">{{ skill }}</li>
            </ul>
        </div>
        <div>
            <h1>Centres d'intérêts</h1>
            <ul>
                <li v-for="(interest, index) in data.interests" :key="index">{{ interest }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type CvData from '@/types/CvData';
defineProps({
    data: {
        type: Object as PropType<CvData>,
        required: true
    }
});

</script>

<style>
h1 {
    @apply text-xl font-semibold uppercase !important;
}

ul {
    @apply py-2;
}

</style>