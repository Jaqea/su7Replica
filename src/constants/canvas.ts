import {
  CameraConfig,
  RendererConfig,
  DprConfig,
  ShadowsConfig,
} from '@/typings/canvasConfig';

const CAMERA: CameraConfig = {
  fov: 30,
  position: [5, 0, 15],
};

const RENDERER: RendererConfig = {
  logarithmicDepthBuffer: true,
  antialias: true,
};

const DPR: DprConfig = [1, 1.5];

const SHADOWS: ShadowsConfig = true;

export const CANVASCONFIG = {
  camera: CAMERA,
  gl: RENDERER,
  dpr: DPR,
  shadows: SHADOWS,
};
