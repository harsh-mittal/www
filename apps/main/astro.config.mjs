import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://harshmittal.net",
  vite: {
    plugins: [tailwind()],
  },
});
