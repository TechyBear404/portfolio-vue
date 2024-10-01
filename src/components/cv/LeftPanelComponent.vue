<template>
  <div class="text-white bg-slate-800 h-full p-10 flex flex-col gap-10">
    <div class="min-h-60">Photo</div>
    <div>
      <h1>Coordonnées</h1>
      <ul>
        <li><HomeIcon class="small-icon" />{{ data.personalData.address }}</li>
        <li>
          <PhoneIcon class="small-icon" /><a
            href="tel:data.personalData.phone"
            >{{ data.personalData.phone }}</a
          >
        </li>
        <li>
          <EnvelopeIcon class="small-icon" />{{ data.personalData.email }}
        </li>
        <li>
          <GlobeAltIcon class="small-icon" />{{ data.personalData.website }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Langue</h1>
      <ul>
        <li v-for="(language, index) in data.languages" :key="index">
          {{ language.name }} - {{ language.level }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Compétences</h1>
      <ul>
        <li v-for="(skill, index) in data.skills" :key="index">{{ skill }}</li>
      </ul>
    </div>
    <div>
      <h1>Centres d'intérêts</h1>
      <ul>
        <li v-for="(interest, index) in data.interests" :key="index">
          {{ interest }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/vue/24/solid";

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

ul {
  @apply py-2 flex flex-col gap-1;
}

li {
  @apply flex items-center gap-2;
}

.small-icon {
  @apply w-4 h-4;
}
</style>
