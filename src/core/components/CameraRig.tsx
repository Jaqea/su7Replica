import { MathUtils, Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { createNoise2D } from 'simplex-noise';
import gsap from 'gsap';

export default function CameraRig() {
  // const v = new Vector3();

  const noise2d = createNoise2D();
  const fbm = ({
    octave = 3,
    frequency = 2,
    amplitude = 0.5,
    lacunarity = 2,
    persistance = 0.5,
  } = {}) => {
    let value = 0;
    for (let i = 0; i < octave; i++) {
      const noiseValue = noise2d(frequency, frequency);
      value += noiseValue * amplitude;
      frequency *= lacunarity;
      amplitude *= persistance;
    }

    return value;
  };

  const { camera } = useThree();
  const tweenedPosOffset = new Vector3(0, 0, 0);

  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    // state.camera.position.lerp(
    //   v.set(Math.sin(t / 5), 1.7, 12 + Math.cos(t / 5) / 2),
    //   0.05,
    // );
    // state.camera.lookAt(0, 0, 0);

    const posOffset = new Vector3(
      fbm({
        frequency: t * 0.5 + MathUtils.randFloat(-10000, 0),
        amplitude: 2,
      }),
      fbm({
        frequency: t * 0.5 + MathUtils.randFloat(-10000, 0),
        amplitude: 1.5,
      }),
      fbm({
        frequency: t * 0.5 + MathUtils.randFloat(-10000, 0),
        amplitude: 2,
      }),
    );
    posOffset.multiplyScalar(0.1);
    gsap.to(tweenedPosOffset, {
      x: posOffset.x,
      y: posOffset.y,
      z: posOffset.z,
      duration: 1.2,
    });
    camera.position.add(tweenedPosOffset);
  });
}
