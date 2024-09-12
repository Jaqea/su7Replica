import { Canvas } from '@react-three/fiber';

export default function World() {
  return (
    <div id="canvas-container" className="w-full h-full">
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}
      >
        <color attach="background" args={['#15151a']} />
      </Canvas>
      <Canvas>
        <color attach={'background'} args={['#15151a']} />
      </Canvas>
    </div>
  );
}
