import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  // css: {
  //   devSourcemap: true,
  //   // preprocessorOptions: {
  //   // 	less: {
  //   // 		charset: false,
  //   // 	},
  //   // },
  // },
});
