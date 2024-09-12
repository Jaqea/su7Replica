const CAMERA = {
  fov: 75,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000,
};

// const

const RENDERER = {
  logarithmicDepthBuffer: true,
  antialias: true,
};

export const CANVASCONFIG = {
  CAMERA,
  RENDERER,
};
