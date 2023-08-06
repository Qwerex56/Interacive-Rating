import type { Meta, StoryObj } from '@storybook/vue3';

import StarLogo from '../../components/Icon/StarLogo.vue';

const meta: Meta<typeof StarLogo> = {
  component: StarLogo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StarLogo>;
export const Default: Story = {
  render: () => ({
    components: { StarLogo },
    template: "<StarLogo />"
  })
}