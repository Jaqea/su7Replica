import * as THREE from 'three';

/**
 * 创建渲染器
 * @param config - 渲染器配置
 */
export default function createRenderer(config: RendererConfig) {
  const { width, height, updateStyle } = config;
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(width, height, updateStyle);

  return renderer;
}
