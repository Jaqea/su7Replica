import { defineConfig, loadEnv } from "vite";
import {
  setupVitePlugin,
  createAliasConfig,
  createProxyConfig,
} from "./config";
import { getServiceConfig } from "./.service.config";

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(
    mode,
    `${process.cwd()}/env`,
    "",
  ) as unknown as ImportMetaEnv;

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === "Y";
  const serviceConfig = getServiceConfig(viteEnv);

  return {
    base: viteEnv.VITE_BASE_URL,
    define: {},
    resolve: {
      alias: createAliasConfig(),
    },
    envDir: "env",
    plugins: setupVitePlugin(viteEnv),
    css: {},
    optimizeDeps: {},
    server: {
      host: "0.0.0.0",
      port: 3200,
      open: true,
      proxy: createProxyConfig(isOpenProxy, serviceConfig),
    },
    build: {
      /** 禁用 gzip 压缩大小报告 */
      reportCompressedSize: false,
      /** 构建后创建独立的 source map 文件 */
      sourcemap: true,
      commonjsOptions: {
        ignoreTryCatch: true,
      },
    },
  };
});
