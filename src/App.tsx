import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <>
      <div id="canvas-container" className="w-full h-full">
        <Canvas
          gl={{ logarithmicDepthBuffer: true, antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 15], fov: 25 }}
        >
          <color attach="background" args={['#15151a']} />
          <hemisphereLight intensity={0.5} />
          <mesh
            scale={4}
            position={[3, -1.161, -1.5]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <mesh
            scale={4}
            position={[-3, -1.161, -1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
        </Canvas>
      </div>
      <h1 className="text-red-700">hello world</h1>
    </>
  );
}
