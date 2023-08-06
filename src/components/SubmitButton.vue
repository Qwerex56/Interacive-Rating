<template>
  <button class="w-full h-[2.8125rem] bg-orange text-white
    rounded-full
  hover:bg-white hover:text-orange
    font-overpass font-bold uppercase 
    duration-100"
    @click="submitRating">
    Submit
  </button>
</template>

<script setup lang="ts">
import router from '@/router/index';

import { useRatingStore } from '@/stores/ratingStore';

const ratingStore = useRatingStore();

const props = defineProps({
  redirectsTo: {
    type: String,
    default: '/',
    validate: (value: string): boolean => {
      return router.hasRoute(value);
    }
  }
})

const submitRating = () => {
  if (!ratingStore.hasRating) {
    return;
  }

  router.push(props.redirectsTo);
}
</script>