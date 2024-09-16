import * as THREE from 'three';
import { useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';
import {
  Lightformer,
  Float,
  Environment,
  PerformanceMonitor,
} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina';

export default function EnvironmentLight({
  positions = [2, 0, 2, 0, 2, 0, 2, 0],
}) {
  const group = useRef();
  const [degraded, degrade] = useState(false);
  // useFrame((_, delta) => {
  //   (group.current.position.z += delta * 10 > 20) &&
  //     (group.current.position.z = -60);
  // });
  return (
    <>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={1}
      >
        <Lightformer
          intensity={0.75}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <group rotation={[0, 0.5, 0]}>
          <group ref={group}>
            {positions.map((x, i) => (
              <Lightformer
                key={i}
                form="circle"
                intensity={2}
                rotation={[Math.PI / 2, 0, 0]}
                position={[x, 4, i * 4]}
                scale={[3, 1, 1]}
              />
            ))}
          </group>
        </group>
        {/* Sides */}
        <Lightformer
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[20, 0.1, 1]}
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[20, 0.5, 1]}
        />
        <Lightformer
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 1, 1]}
        />
        {/* Accent (red) */}
        <Float speed={5} floatIntensity={2} rotationIntensity={2}>
          <Lightformer
            form="ring"
            color="red"
            intensity={1}
            scale={10}
            position={[-15, 4, -18]}
            target={[0, 0, 0]}
          />
        </Float>
        {/* Background */}
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Color color="#444" alpha={1} mode="normal" />
            <Depth
              colorA="blue"
              colorB="black"
              alpha={0.5}
              mode="normal"
              near={0}
              far={300}
              origin={[100, 100, 100]}
            />
          </LayerMaterial>
        </mesh>
      </Environment>
    </>
  );
}
