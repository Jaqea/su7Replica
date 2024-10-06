import type { Mesh, MeshStandardMaterial, Group } from 'three';
import { Color, LinearSRGBColorSpace, NearestFilter } from 'three';
import { useFrame } from '@react-three/fiber';
import { CAR } from '@/constants';
import { useTextureLoader, useGLTFLoader } from '@/hooks';
import { flatModel } from '@/utils';

export default function Car() {
  const { scene: carScene } = useGLTFLoader('car/mesh/sm_car.gltf');
  const aoMap = useTextureLoader('car/texture/car_body_ao_map.jpg');
  aoMap.flipY = false;
  aoMap.colorSpace = LinearSRGBColorSpace;
  aoMap.minFilter = NearestFilter;
  aoMap.channel = 1;

  const carModelParts = flatModel(carScene);
  const carBody = carModelParts[2] as Mesh;
  const carWheel = carModelParts[35] as Group;
  const carBodyMaterial = carBody.material as MeshStandardMaterial;
  carBodyMaterial.color = new Color('#26d6e9');

  carModelParts.forEach((item) => {
    if (item.isMesh) {
      const itemMaterial = item.material as MeshStandardMaterial;
      itemMaterial.aoMap = aoMap;
    }
  });

  useFrame(() => {
    carWheel?.children.forEach((item) => {
      item.rotateZ(-10 * 0.2);
    });
  });

  return <primitive object={carScene} {...CAR} />;
}
