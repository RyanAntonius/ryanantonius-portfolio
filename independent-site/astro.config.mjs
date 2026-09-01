// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [
      {
        name: 'local-wix-media',
        transform(code, id) {
          if (!id.includes('/src/')) return null;
          const rewritten = code
            .replace(/https:\/\/static\.wixstatic\.com\/media\/[^'"\s)\\\]]+/g, (url) => `/media/${url.split('/').pop()}`)
            .replace(/https:\/\/video\.wixstatic\.com\/video\/([^/]+)\/[^'"\s)\\\]]+/g, (_url, id) => `/media/videos/${id}.mp4`);
          return rewritten === code ? null : { code: rewritten, map: null };
        },
      },
    ],
  },
});
