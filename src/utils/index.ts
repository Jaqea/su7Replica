import { Object3D } from 'three';

// 遍历模型，使其扁平化
export const flatModel = (model: Object3D): Object3D[] => {
  const modelPartsArray: Object3D[] = [];
  model.traverse((obj) => {
    modelPartsArray.push(obj);
  });
  return modelPartsArray;
};
