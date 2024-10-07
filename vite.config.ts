import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: "./",
    esbuild: {
      drop: ["console", "debugger"],
    },
    css: {
      devSourcemap: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        mockPath: "src/_mock",
        enable: command === "serve",
      }),
    ],
    // server: {
    //   open: true,
    //   host: true,
    //   port: 5173,
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:5173",
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
  };
});
