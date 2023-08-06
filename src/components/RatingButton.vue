<template>
  <button
    class="w-[2.625rem] h-[2.625rem] rounded-[50%] text-[.875rem] 
          font-overpass font-[700] text-center
          hover:bg-medium-gray hover:text-white
          duration-75"
    :class="isActive"
    @click="selectRating"
  >
  {{ ratingValue }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRatingStore } from '@/stores/ratingStore';

const ratingStore = useRatingStore();

const props = defineProps({
  ratingValue: {
    type: Number,
    required: true,
  },
  action: {
    type: (): void => {},
    required: false,
  }
})

const isActive = computed<string>((): string => {
  const inactive = 'bg-dark-blue text-medium-gray';
  const active = 'bg-orange text-white'

  return props.ratingValue === ratingStore.rating? active : inactive;
});

const selectRating = () => {
  ratingStore.pushRating(props.ratingValue);
}
</script>