import * as THREE from 'three';

// 遍历模型，使其扁平化
export const flatModel = (model: THREE.Object3D): THREE.Object3D[] => {
  const modelPartsArray: THREE.Object3D[] = [];
  model.traverse((obj) => {
    modelPartsArray.push(obj);
  });
  return modelPartsArray;
};
