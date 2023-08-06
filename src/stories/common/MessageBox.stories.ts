import type { Meta, StoryObj } from '@storybook/vue3';

import MessageBox from '../../components/MessageBox.vue';
import StepContainer from '../../components/StepContainer.vue';

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  render: () => ({
    components: { MessageBox, StepContainer },
    template: 
    `<StepContainer>
      <MessageBox>
        <template #title>
          How did we do?
        </template>
        <template #content>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </template>
      </MessageBox>
    </StepContainer>`
  })
}