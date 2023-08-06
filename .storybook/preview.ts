import { type Preview, setup } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { App } from 'vue';
import { createPinia } from 'pinia';
import '@/index.css';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#787878',
        }
      ],
    },
  },
};

export default preview;
