import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { flatModel } from '@/utils';

function useTextureLoader(url: string) {
  const map = useLoader(THREE.TextureLoader, url);
  return map;
}

export default function Plane() {
  const startRoomModel = useGLTF('/sm_startroom.raw.gltf');
  const startRoomModelParts = flatModel(startRoomModel.scene);

  const roomReflecFloorMesh = startRoomModelParts[2] as THREE.Mesh;
  const roomFloorMaterial =
    roomReflecFloorMesh.material as THREE.MeshPhysicalMaterial;
  roomFloorMaterial.aoMap = useTextureLoader('/t_startroom_ao.raw.jpg');
  roomFloorMaterial.lightMap = useTextureLoader('/t_startroom_light.raw.jpg');
  roomFloorMaterial.normalMap = useTextureLoader('/t_floor_normal.webp');
  roomFloorMaterial.roughnessMap = useTextureLoader('/t_floor_roughness.webp');
  roomFloorMaterial.envMapIntensity = 0;

  return (
    <>
      <primitive object={roomReflecFloorMesh} position={[0, -1.2, 0]} />
    </>
  );
}
