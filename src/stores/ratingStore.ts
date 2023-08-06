import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRatingStore = defineStore('rating', () => {
  const rating = ref<number | null>(null);

  const hasRating = computed<boolean>(() => {
    return rating.value !== null;
  });

  function pushRating(newRating: number) {
    console.log("pushRating")
    rating.value = newRating;
  }

  return { rating, hasRating, pushRating };
});