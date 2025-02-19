import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/integration/**/*.spec.ts',
  },
});
