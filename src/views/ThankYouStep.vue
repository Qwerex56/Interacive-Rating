<template>
  <StepContainer class="text-center items-center">
    <img class="mt-[1.125rem] mb-[1.5rem] w-[9rem] desktop:w-[10.125rem] desktop:mb-[2rem]" :src="ThankYouPng" alt="Thank you svg">
    <RatingScore class="mb-[1.5rem] desktop:mb-[2rem]">
      <template #rating>
        {{ ratingStore.rating }}
      </template>
    </RatingScore>
    <MessageContainer>
      <template #title>
        Thank you!
      </template>
      <template #content>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </template>
    </MessageContainer>
  </StepContainer>
</template>

<script setup lang="ts">
import StepContainer from '@/components/StepContainer.vue';
import RatingScore from '@/components/Icon/RatingScore.vue';
import MessageContainer from '@/components/MessageContainer.vue';

import ThankYouPng from '@/assets/illustration-thank-you.svg';

import { useRatingStore } from '@/stores/ratingStore';

const ratingStore = useRatingStore();
</script>