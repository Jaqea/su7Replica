import { RandomizedLightConfig, ShadowConfig } from '@/typings/shadowConfig';

export const SHADOWCONFIG: ShadowConfig = {
  position: [0, -1.16, 0],
  frames: 100,
  alphaTest: 0.9,
  scale: 10,
};

export const RANDOMIZEDLIGHTCONFIG: RandomizedLightConfig = {
  amount: 8,
  radius: 10,
  ambient: 0.5,
  position: [1, 5, -1],
};
