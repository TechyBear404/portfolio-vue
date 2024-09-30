<template>
    <Main class="lg:flex min-h-screen justify-center w-full p-4 ">
        <div class="flex w-[1024px] shadow-xl rounded-md overflow-hidden h-full">
            <div class="w-[300px] flex-none">
                <LeftPanelComponent :data=jsonData />
            </div>
            <div class="w-[724px]">
                <RightPanelComponent />
            </div>
        </div>
    </Main>
</template>

<script setup lang="ts">
import LeftPanelComponent from '@/components/cv/LeftPanelComponent.vue';
import RightPanelComponent from '@/components/cv/RightPanelComponent.vue';

import jsonData from '@/data/cv.json';

</script>