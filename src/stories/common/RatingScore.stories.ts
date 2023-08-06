import type { Meta, StoryObj } from '@storybook/vue3';

import RatingScore from '../../components/Icon/RatingScore.vue';

const meta: Meta<typeof RatingScore> = {
  component: RatingScore,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RatingScore>;
export const Default: Story = {
  render: () => ({
    components: { RatingScore },
    template: `<RatingScore><template #rating>2</template></RatingScore>`,
  }),
}