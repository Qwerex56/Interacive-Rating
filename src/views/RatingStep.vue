<template>
  <StepContainer>
    <StarLogo class="mb-[1rem] desktop:mb-[1.875rem]" />
    <MessageBox class="mb-[1.5rem]">
      <template #title>
        How did we do?
      </template>
      <template #content>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </template>
    </MessageBox>
    <div class="flex mb-[1.5rem] gap-[1.125rem] desktop:mb-[2rem]">
      <RatingButton v-for="rate in 5" :key="rate" :rating-value="rate" />
    </div>
    <SubmitButton redirects-to="thankYou"/>
  </StepContainer>
</template>

<script setup lang="ts">
import StepContainer from '@/components/StepContainer.vue';
import RatingButton from '@/components/RatingButton.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import StarLogo from '@/components/Icon/StarLogo.vue';
import MessageBox from '@/components/MessageBox.vue';
</script>