import { Vector3 } from '@react-three/fiber';

/**
 * 接触阴影配置
 */
interface ContactShadowsConfig {
  position: Vector3 & [x: number, y: number, z: number];
  resolution: number;
  frames: number;
  scale: number;
  blur: number;
  opacity: number;
  far: number;
}
