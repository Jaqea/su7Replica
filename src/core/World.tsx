import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CANVASCONFIG } from '@/constants';
import {
  // Car,
  // Shadow,
  Plane,
  // EnvironmentLight,
  CameraRig,
  SpeedUp,
} from './components';

export default function World() {
  return (
    <Canvas {...CANVASCONFIG}>
      <color attach={'background'} args={['#000000']} />
      {/* <Car /> */}
      {/* <EnvironmentLight /> */}
      {/* <Shadow /> */}
      <Plane />
      <SpeedUp position={[-0.5, -1.16, 0]} />
      <CameraRig />
      <OrbitControls />
    </Canvas>
  );
}
