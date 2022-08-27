import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    VitePluginFonts({
      google: {
        families: [
          { name: 'Space Mono', styles: 'wght@700' },
          { name: 'Lexend Deca', styles: 'wght@400'}
        ],
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
});
