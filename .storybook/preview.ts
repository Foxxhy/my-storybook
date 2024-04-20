import type { Preview } from "@storybook/react";
import 'foxxhy-my-design-system/normalize.css';
import 'foxxhy-my-design-system/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      }
    }
  },
};

export default preview;
