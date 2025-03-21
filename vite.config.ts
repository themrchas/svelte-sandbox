import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
/*export default defineConfig({
  plugins: [svelte()],
})
  */

//Restore the configuration saved in README.md to bring back default/exclude App.svelte

export default defineConfig({
  plugins: [
      svelte({
          exclude: 'src/App.svelte',
          compilerOptions: {
              customElement: true,
          },
      }),
      svelte({
          include: 'src/App.svelte',
          exclude: 'src/lib/**/*',
      }),
  ],
});