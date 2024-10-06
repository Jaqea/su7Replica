import type { Mesh, MeshPhysicalMaterial } from 'three';
import {
  Color,
  Matrix4,
  Vector2,
  LinearSRGBColorSpace,
  SRGBColorSpace,
  RepeatWrapping,
} from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useTextureLoader, useGLTFLoader } from '@/hooks';
import { flatModel } from '@/utils';
import speedUpVertexShader from '@/assets/shaders/plane/vert.glsl';
import speedUpFragmentShader from '@/assets/shaders/plane/frag.glsl';

export default function Plane() {
  const startroomModel = useGLTFLoader('startroom/sm_startroom.raw.gltf');
  const startroomModelParts = flatModel(startroomModel.scene);
  const roomReflecFloorMesh = startroomModelParts[2] as Mesh;
  const roomFloorMaterial =
    roomReflecFloorMesh.material as MeshPhysicalMaterial;

  // roomFloorMaterial.aoMap = useTextureLoader(
  //   'startroom/t_startroom_ao.raw.jpg',
  // );
  // roomFloorMaterial.aoMap.flipY = false;
  // roomFloorMaterial.aoMap.colorSpace = LinearSRGBColorSpace;
  // roomFloorMaterial.aoMap.channel = 1;

  roomFloorMaterial.lightMap = useTextureLoader(
    'startroom/t_startroom_light.raw.jpg',
  );
  roomFloorMaterial.lightMap.flipY = false;
  roomFloorMaterial.lightMap.colorSpace = SRGBColorSpace;
  roomFloorMaterial.lightMap.channel = 1;

  roomFloorMaterial.normalMap = useTextureLoader(
    'startroom/t_floor_normal.webp',
  );
  roomFloorMaterial.normalMap.flipY = false;
  roomFloorMaterial.normalMap.colorSpace = LinearSRGBColorSpace;
  roomFloorMaterial.normalMap.wrapS = RepeatWrapping;
  roomFloorMaterial.normalMap.wrapT = RepeatWrapping;

  roomFloorMaterial.roughnessMap = useTextureLoader(
    'startroom/t_floor_roughness.webp',
  );
  roomFloorMaterial.roughnessMap.flipY = false;
  roomFloorMaterial.roughnessMap.colorSpace = LinearSRGBColorSpace;
  roomFloorMaterial.roughnessMap.wrapS = RepeatWrapping;
  roomFloorMaterial.roughnessMap.wrapT = RepeatWrapping;

  // roomFloorMaterial.envMapIntensity = 0;
  roomFloorMaterial.color = new Color('#000000');

  const ColorShiftMaterial = shaderMaterial(
    {
      iTime: 0,
      uColor: new Color('#000000'),
      uSpeed: 30,
      uReflectMatrix: new Matrix4(),
      uReflectTexture: null,
      uReflectIntensity: 25,
      uMipmapTextureSize: new Vector2(window.innerWidth, window.innerHeight),
    },
    speedUpVertexShader,
    speedUpFragmentShader,
  );
  extend({ ColorShiftMaterial });

  const shaderMat = new ColorShiftMaterial();
  for (const key in roomReflecFloorMesh.material) {
    let k = key;
    if (key.startsWith('_')) {
      k = key.split('_')[1];
    }

    if (shaderMat[k] === undefined) shaderMat[k] = 0;
    shaderMat[k] = roomReflecFloorMesh.material[k];
  }
  roomReflecFloorMesh.material = shaderMat;

  useFrame((state) => {
    const { uniforms } = roomReflecFloorMesh.material;
    if (uniforms) {
      const t = state.clock.elapsedTime;
      uniforms.iTime.value = -t;
    }
  });

  return (
    <>
      <primitive
        object={roomReflecFloorMesh}
        position={[0, -1.2, 0]}
        scale={[2, 1, 0.45]}
      />
    </>
  );
}
