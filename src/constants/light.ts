import { SpotLightConfig, AmbientLightConfig } from '@/typings/lightConfig';

export const SPOTLIGHT: SpotLightConfig = {
  position: [0, 15, 0],
  angle: 0.3,
  penumbra: 1,
  castShadow: true,
  intensity: 2,
  'shadow-bias': -0.0001,
};

export const AMBIENTLIGHT: AmbientLightConfig = {
  intensity: 0.5,
};
