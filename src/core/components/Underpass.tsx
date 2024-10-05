import type { Mesh } from 'three';
import {
  useGLTF,
  shaderMaterial,
  CubeCamera,
  useCubeCamera,
  Environment,
} from '@react-three/drei';
import { UnsignedByteType } from 'three';
import { flatModel } from '@/utils';
import { extend, useFrame } from '@react-three/fiber';
import speedUpVertexShader from '@/assets/shaders/vert.glsl';
import speedUpFragmentShader from '@/assets/shaders/frag.glsl';

export default function Underpass(props) {
  // const { scene: totalScene } = useThree();
  const { scene } = useGLTF('/sm_speedup.gltf');
  const modelParts = flatModel(scene);

  // const carModel = totalScene.children[2];
  // let carModelParts = [];
  // if (carModel) {
  //   carModelParts = flatModel(carModel);
  // }

  const { fbo, update } = useCubeCamera();
  fbo.texture.type = UnsignedByteType;

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

  useFrame((state) => {
    const { uniforms } = speedupMesh.material;
    if (uniforms) {
      const t = state.clock.elapsedTime;
      uniforms.iTime.value = -t;
    }
    // carModelParts.forEach((item) => {
    //   item.visible = false;
    // });
    update();
    // carModelParts.forEach((item) => {
    //   item.visible = true;
    // });
  });

  return (
    <>
      <CubeCamera
        position={[0, 0, 0]}
        frames={Infinity}
        near={1}
        far={1000}
        resolution={256}
      >
        {() => <primitive object={scene} {...props} />}
      </CubeCamera>
      <Environment resolution={512} frames={Infinity} map={fbo.texture} />
    </>
  );
}
