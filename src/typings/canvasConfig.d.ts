import { Dpr, Vector3 } from '@react-three/fiber';

/**
 * 相机配置
 */
interface CameraConfig {
  fov: number;
  position: Vector3;
}

/**
 * 渲染器配置
 */
interface RendererConfig {
  logarithmicDepthBuffer: boolean;
  antialias: boolean;
}

type DprConfig = Dpr;

type ShadowsConfig = boolean;
