import type { Preview } from "@storybook/react";
import { initializeIndexedDB, indexedDBLoader } from "./addon-indexed-db";

initializeIndexedDB();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [indexedDBLoader],
};

export default preview;
