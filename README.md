# Migrating Create React App to Vite
This repository contains a simple React application that has been migrated from Create React App (CRA) to Vite. The migration process involves updating the project structure, dependencies, and configuration files to align with Vite's build system.

# Getting Started with Vite + React App

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Available Scripts

This project includes the following scripts:

- `yarn dev` - Starts the development server.
- `yarn build` - Builds the app for production.
- `yarn test` - Runs the test suite.

## Migration Guide

To migrate a React application from CRA to Vite, follow these steps:

1. **Remove CRA Dependencies**: Uninstall CRA-specific dependencies from your project.
   ```
   yarn remove react-scripts
   ```

2. **Install Vite and React Plugin**: Add Vite and the React plugin to your project dependencies.
   ```
   yarn add vite @vitejs/plugin-react --dev
   ```

3. **Update Project Structure**: Adjust your project structure to fit Vite's conventions. This may include reorganizing your `src` folder and updating import paths.

   - Move your `index.html` file from the `public` folder to the root of your project.
   - Change all JavaScript file extensions from `.js` to `.jsx` in the `src` folder.
   - Update import paths in your components to reflect the new file extensions.
   - Vite handles assets directly from the `public` folder, so update your asset paths accordingly.

4. **Migrate Tests**: If you have tests set up, you'll need to migrate them to use Vite's testing framework (e.g., Vitest).

    - Install Vitest and related testing libraries:
      ```
      yarn add vitest @testing-library/react @testing-library/jest-dom jsdom --dev
      ```
    - Update your test files to import from `@testing-library/react` and adjust any configurations as needed.

5. **Update Vite Configuration**: Create a `vite.config.js` file in the root of your project and configure it for React.
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: 'jsdom',
     },
   });
   ```

6. **Update Package Scripts**: Modify the `scripts` section in your `package.json` file to use Vite commands.
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "test": "vitest"
     }
   }
   ```

7. **Configure Dev Server**: Update the Vite development server configuration in `vite.config.js` if needed.
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000,
       open: true,
     },
   });
   ```

  8. **Build for Production**: To build your application for production, run the following command:
    ```
    yarn build
    ```
