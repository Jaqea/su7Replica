import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CANVASCONFIG } from '@/constants';
import { Car, Light, Shadow, EnvironmentLight, CameraRig } from './components';

export default function World() {
  return (
    <Canvas {...CANVASCONFIG}>
      <Light />
      <Car
        scale={1.6}
        position={[-0.5, -0.18, 0]}
        rotation={[0, Math.PI / 5, 0]}
      />
      <Shadow />
      <EnvironmentLight />
      <CameraRig />
      <OrbitControls />
    </Canvas>
  );
}
