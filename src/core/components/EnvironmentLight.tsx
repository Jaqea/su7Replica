import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';

const positions = [2, 0, 2, 0, 2, 0, 2, 0];

export default function EnvironmentLight() {
  const group = useRef();

  useFrame(
    (_, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -50),
  );

  return (
    <>
      <Environment frames={Infinity} blur={1} resolution={512}>
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
      </Environment>
      {/* <Environment
        background
        frames={Infinity}
        blur={1}
        resolution={512}
        files="/environment/envMap.hdr"
      >
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
      </Environment> */}
    </>
  );
}
