import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

export default function CameraRig() {
  const v = new Vector3();

  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 1.7, 12 + Math.cos(t / 5) / 2),
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
}
