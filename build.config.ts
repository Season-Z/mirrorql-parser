import path from "path";

export default {
  entry: "./src/index.ts",
  formats: ["es", "cjs", "umd"],
  libName: "mirrorql-parser",
  fileName: "index",
  // 额外的 vite 配置
  vite: {
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    plugins: [],
  },
};
