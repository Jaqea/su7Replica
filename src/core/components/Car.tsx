import type { Mesh, MeshStandardMaterial, Group } from 'three';
import { TextureLoader, Color } from 'three';
import { useGLTF } from '@react-three/drei';
import { flatModel } from '@/utils';
import { useFrame, useLoader } from '@react-three/fiber';

export default function Car(props) {
  const { scene } = useGLTF('/sm_car.gltf');
  const ao = useLoader(TextureLoader, '/t_car_body_AO.raw.jpg');

  const modelParts = flatModel(scene);
  const Wheel = modelParts[35] as Group;
  const body = modelParts[2] as Mesh;
  const bodyMat = body.material as MeshStandardMaterial;
  bodyMat.color = new Color('#26d6e9');

  modelParts.forEach((item: Mesh) => {
    if (item.isMesh) {
      const mat = item.material as MeshStandardMaterial;
      mat.aoMap = ao;
    }
  });

  useFrame(() => {
    Wheel?.children.forEach((item) => {
      item.rotateZ(-10 * 0.03);
    });
  });

  return <primitive object={scene} {...props} />;
}
