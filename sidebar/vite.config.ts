import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from "vite-plugin-singlefile"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [svelte(), viteSingleFile({ useRecommendedBuildConfig: false, removeViteModuleLoader: true })],
  build: {
    modulePreload: { polyfill: false },
    commonjsOptions: {
      sourceMap: true
    },
    // polyfillModulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'sidebar.html'),
        // Uncomment below code if you need Settings page & comment above code https://github.com/richardtallent/vite-plugin-singlefile/issues/51
        
        // settings: resolve(__dirname, 'settings.html'),  
      },
    },
  },
})
