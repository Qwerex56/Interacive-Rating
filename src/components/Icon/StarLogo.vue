<template>
  <div 
    class="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-dark-blue rounded-full
          desktop:w-[3rem] desktop:h-[3rem]">
    <img src="@/assets/icon-star.svg" alt="star" class="w-[0.87rem] desktop:w-[1.0469rem]" @click="handleClick">
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index';

const handleClick = () => {
  router.push('/');
}
</script>