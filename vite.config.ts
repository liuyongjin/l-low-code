import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths()],
  css: {
    devSourcemap: true,
    // preprocessorOptions: {
    // 	less: {
    // 		charset: false,
    // 	},
    // },
  },
});
