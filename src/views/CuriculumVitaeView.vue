<template>
  <Main class="lg:flex min-h-screen justify-center w-full p-4 bg-slate-200">
    <div
      class="grid grid-cols-3 shadow-xl rounded-md overflow-hidden h-full max-w-4xl"
    >
      <div class="">
        <LeftPanelComponent :data="cvData" />
      </div>
      <div class="col-span-2">
        <RightPanelComponent :data="cvData" />
      </div>
    </div>
  </Main>
</template>

<script setup lang="ts">
import LeftPanelComponent from "@/components/cv/LeftPanelComponent.vue";
import RightPanelComponent from "@/components/cv/RightPanelComponent.vue";
import type CvData from "@/types/CvData";
import jsonData from "@/data/cv.json";

const cvData = jsonData as CvData;
</script>
