import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
  plugins: [
    react(), 
    dts({ include: ["lib"], exclude: ["src"] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "ReactSimpleContext",
      fileName: (format) => `react-simple-context.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
