import type { Mesh, MeshPhysicalMaterial } from 'three';
import { useResourceLoader } from '@/hooks';
import { flatModel } from '@/utils';

export default function Plane() {
  const startroomModel = useResourceLoader({
    name: 'startroom',
    type: 'gltfModel',
    path: 'startroom/sm_startroom.raw.gltf',
  });
  const startroomModelParts = flatModel(startroomModel.scene);
  const roomReflecFloorMesh = startroomModelParts[2] as Mesh;
  const roomFloorMaterial =
    roomReflecFloorMesh.material as MeshPhysicalMaterial;

  roomFloorMaterial.aoMap = useResourceLoader({
    name: 'startroom_ao',
    type: 'texture',
    path: 'startroom/t_startroom_ao.raw.jpg',
  });
  roomFloorMaterial.lightMap = useResourceLoader({
    name: 'startroom_light',
    type: 'texture',
    path: 'startroom/t_startroom_light.raw.jpg',
  });
  roomFloorMaterial.normalMap = useResourceLoader({
    name: 'floor_normal',
    type: 'texture',
    path: 'startroom/t_floor_normal.webp',
  });

  roomFloorMaterial.roughnessMap = useResourceLoader({
    name: 'floor_roughness',
    type: 'texture',
    path: 'startroom/t_floor_roughness.webp',
  });
  roomFloorMaterial.envMapIntensity = 0;

  return (
    <>
      <primitive object={roomReflecFloorMesh} position={[0, -1.2, 0]} />
    </>
  );
}
