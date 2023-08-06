<template>
  <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-dark-blue rounded-full">
    <img src="@/assets/icon-star.svg" alt="star" class="w-[0.87rem]" @click="handleClick">
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index';

const handleClick = () => {
  router.push('/');
}
</script>