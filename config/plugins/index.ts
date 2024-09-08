import type { PluginOption } from "vite";
import progress from "vite-plugin-progress";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import pwa from "./pwa";
import compress from "./compress";
import visualizer from "./visualizer";

/**
 * vite 插件配置
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugin(viteEnv: ImportMetaEnv): PluginOption[] {
  const plugins = [react(), unocss(), progress()];

  if (viteEnv.VITE_VISUALIZER === "Y") plugins.push(visualizer());

  if (viteEnv.VITE_COMPRESS === "Y") plugins.push(compress(viteEnv));

  if (viteEnv.VITE_PWA === "Y") plugins.push(pwa());

  return plugins;
}
