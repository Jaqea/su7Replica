import { Vector3 } from '@react-three/fiber';

/**
 * 聚光灯配置
 */
interface SpotLightConfig {
  position: Vector3;
  angle: number;
  penumbra: number;
  castShadow: boolean;
  intensity: number;
  'shadow-bias': number;
}

/**
 * 环境光配置
 */
interface AmbientLightConfig {
  intensity: number;
}
