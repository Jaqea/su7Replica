import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CANVASCONFIG } from '@/constants';
import {
  Car,
  Light,
  Shadow,
  Plane,
  EnvironmentLight,
  CameraRig,
  Underpass,
} from './components';

export default function World() {
  return (
    <Canvas {...CANVASCONFIG}>
      <color attach={'background'} args={['#15151a']} />
      <Light />
      <Car
        scale={1.6}
        position={[-0.5, -1.16, 0]}
        // rotation={[0, -Math.PI / 3.2, 0]}
        rotation={[0, -Math.PI, 0]}
      />
      <EnvironmentLight />
      <Shadow />
      <Plane />
      <Underpass position={[-0.5, -1.16, 0]} />
      <CameraRig />
      <OrbitControls />
    </Canvas>
  );
}
