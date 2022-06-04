import { defineConfig } from 'windicss/helpers';
import { varToRgba } from './src/styles/functions';

export default defineConfig({
  darkMode: 'class',
  theme: {
    colors: {
      base: {
        100: varToRgba('--base-100'),
        200: varToRgba('--base-200'),
      },
    },
  },
});
