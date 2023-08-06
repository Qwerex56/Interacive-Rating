import type { Meta, StoryObj } from '@storybook/vue3';

import RatingButton from "../../components/RatingButton.vue";

const meta: Meta<typeof RatingButton> = {
  component: RatingButton,
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof RatingButton>;

export const Default: Story = {
  render: (args) => ({
    components: { RatingButton },
    setup: () => {
      return { args };
    },
    template: "<RatingButton v-bind='args' />",
  }),
  args: {
    ratingValue: 1,
  }
}