<template>
  <div class="text-slate-800 bg-white h-full p-10">
    <div id="headerCv" class="min-h-60">
      <h1 class="">{{ data.personalData.firstName }}</h1>
      <h1 class="">{{ data.personalData.lastName }}</h1>
      <h2 class="pt-2">{{ data.personalData.title }}</h2>
    </div>
    <div>
      <h1 class="py-6">Expériences professionnelles</h1>
      <ul class="flex flex-col gap-4">
        <li v-for="(experience, index) in data.experiences" :key="index">
          <h2>{{ experience.title }}</h2>
          <p>
            {{ experience.company }}, {{ experience.location }} |
            {{ experience.startDate }} - {{ experience.endDate }}
          </p>
          <p>{{ experience.description }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="py-6">Formations</h1>
      <ul class="flex flex-col gap-4">
        <li v-for="(formation, index) in data.formations" :key="index">
          <h2>{{ formation.title }}</h2>
          <p>
            {{ formation.school }}, {{ formation.location }} |
            {{ formation.startDate }} - {{ formation.endDate }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type CvData from "@/types/CvData";
defineProps({
  data: {
    type: Object as PropType<CvData>,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  @apply text-xl font-bold uppercase;
}
#headerCv h1 {
  @apply text-7xl font-extrabold;
}

h2 {
  @apply text-base font-bold uppercase;
}

#headerCv h2 {
  @apply text-2xl font-bold;
}
ul {
  @apply py-2;
}
</style>
