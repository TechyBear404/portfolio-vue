<template>
    <div class="text-slate-800 h-full">
        <div>
            <h1>{{ data.personalData.firstName }}</h1>
            <h1>{{ data.personalData.lastName }}</h1>
            <h1>{{ data.personalData.title }}</h1>
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