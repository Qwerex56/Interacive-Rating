import type { Meta, StoryObj } from '@storybook/vue3';

import StepContainer from '../../components/StepContainer.vue';

const meta: Meta<typeof StepContainer> = {
  component: StepContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StepContainer>;
export const Default: Story = {
  render: () => ({
    components: { StepContainer },
    template: "<StepContainer class='text-white'>Container Elements Should go here</StepContainer>",
  })
}