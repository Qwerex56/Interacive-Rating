import type { Meta, StoryObj } from '@storybook/vue3';

import SubmitButton from '../../components/SubmitButton.vue';

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  render: (args) => ({
    components: { SubmitButton },
    setup: () => {
      return { args };
    },
    template: '<SubmitButton />'
  })
}