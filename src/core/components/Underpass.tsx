import type { Mesh } from 'three';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import { Clock, Vector3, Vector4 } from 'three';
import { flatModel } from '@/utils';
import { extend, useFrame } from '@react-three/fiber';
import speedUpVertexShader from '../../assets/vert.glsl';
import speedUpFragmentShader from '../../assets/frag.glsl';

export default function Underpass(props) {
  const { scene } = useGLTF('/sm_speedup.gltf');
  const modelParts = flatModel(scene);

  const ColorShiftMaterial = shaderMaterial(
    {
      transparent: true,
      depthWrite: false,
      iTime: 0,
      iResolution: [1, 1, 1],
      iMouse: [10, 10, 10, 10],
      uSpeed: 5,
      uOpacity: 1,
    },
    speedUpVertexShader,
    speedUpFragmentShader,
  );

  extend({ ColorShiftMaterial });

  const speedupMesh = modelParts[1] as Mesh;
  speedupMesh.material = new ColorShiftMaterial();

  useFrame(() => {
    const uniforms = speedupMesh.material.uniforms;
    if (uniforms) {
      const t = new Clock().getElapsedTime();
      uniforms.iTime.value = Math.random() * t;
      // const delta = t - 20;
      uniforms.iResolution.value = new Vector3(
        window.innerWidth,
        window.innerHeight,
        1,
      );
      const { x, y } = { x: 0, y: 0 };
      uniforms.iMouse.value = new Vector4(x, y, 0, 0);
      // uniforms.uSpeed.value = Math.random() * 10;
    }
  });

  return <primitive object={scene} {...props} />;
}
