import type { Mesh, MeshStandardMaterial, Group } from 'three';
import {
  UnsignedByteType,
  Color,
  LinearSRGBColorSpace,
  NearestFilter,
} from 'three';
import { extend, useFrame } from '@react-three/fiber';
import {
  shaderMaterial,
  CubeCamera,
  useCubeCamera,
  Environment,
} from '@react-three/drei';
// import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useTextureLoader, useGLTFLoader } from '@/hooks';
import { flatModel } from '@/utils';
import { CAR } from '@/constants';
import speedUpVertexShader from '@/assets/shaders/speedUp/vert.glsl';
import speedUpFragmentShader from '@/assets/shaders/speedUp/frag.glsl';

export default function SpeedUp(props) {
  const { scene: carScene } = useGLTFLoader('car/mesh/sm_car.gltf');
  const { scene: underpassScene } = useGLTFLoader('/speedUp/sm_speedup.gltf');

  const carModelParts = flatModel(carScene);
  const carBody = carModelParts[2] as Mesh;
  const carWheel = carModelParts[35] as Group;
  const carBodyMaterial = carBody.material as MeshStandardMaterial;
  carBodyMaterial.color = new Color('#26d6e9');

  const aoMap = useTextureLoader('car/texture/car_body_ao_map.jpg');
  aoMap.flipY = false;
  aoMap.colorSpace = LinearSRGBColorSpace;
  aoMap.minFilter = NearestFilter;
  aoMap.channel = 1;
  carModelParts.forEach((item: Mesh) => {
    if (item.isMesh) {
      const itemMaterial = item.material as MeshStandardMaterial;
      itemMaterial.aoMap = aoMap;
    }
  });

  const { fbo, update } = useCubeCamera();
  fbo.texture.type = UnsignedByteType;
  const ColorShiftMaterial = shaderMaterial(
    {
      transparent: true,
      depthWrite: false,
      iTime: 0,
      uSpeed: 30,
      uOpacity: 1,
    },
    speedUpVertexShader,
    speedUpFragmentShader,
  );
  extend({ ColorShiftMaterial });

  const underpassModelParts = flatModel(underpassScene);
  const speedupMesh = underpassModelParts[1] as Mesh;
  speedupMesh.material = new ColorShiftMaterial();

  useFrame((state) => {
    const { uniforms } = speedupMesh.material;
    if (uniforms) {
      const t = state.clock.elapsedTime;
      uniforms.iTime.value = -t;
    }
    carModelParts.forEach((item) => {
      item.visible = false;
    });
    update();
    carModelParts.forEach((item) => {
      item.visible = true;
    });
    carWheel?.children.forEach((item) => {
      item.rotateZ(-10 * 0.2);
    });
  });

  return (
    <>
      <primitive object={carScene} {...CAR} />
      {/* <EffectComposer>
        <Bloom luminanceSmoothing={0.4} intensity={2} />
      </EffectComposer> */}

      <CubeCamera
        position={[0, 0, 0]}
        frames={Infinity}
        near={1}
        far={1000}
        resolution={256}
      >
        {() => (
          <>
            <primitive object={underpassScene} {...props} />
          </>
        )}
      </CubeCamera>
      <Environment
        resolution={512}
        frames={Infinity}
        map={fbo.texture}
      ></Environment>
    </>
  );
}
