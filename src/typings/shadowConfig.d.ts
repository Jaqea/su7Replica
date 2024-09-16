import { Vector3 } from '@react-three/fiber';

/**
 * 阴影配置
 */
interface ShadowConfig {
  position: Vector3;
  frames: number;
  alphaTest: number;
  scale: number;
}

/**
 * 投射阴影的光源配置
 */
interface RandomizedLightConfig {
  position: Vector3 & [x: number, y: number, z: number];
  amount: number;
  radius: number;
  ambient: number;
}
