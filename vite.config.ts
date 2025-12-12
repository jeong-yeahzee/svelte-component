import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: "window"
  },
  plugins: [sveltekit()],
  publicDir: "static" // static 폴더를 public 폴더로 인식하도록 추가
});
