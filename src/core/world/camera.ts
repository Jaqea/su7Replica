import * as THREE from 'three';

/**
 * 创建相机
 * @param config - 相机配置
 */
export default function createCamera(config: CameraConfig) {
  const { fov, aspect, near, far } = config;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  return camera;
}
