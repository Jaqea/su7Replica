import { Object3D } from 'three';

/**
 * 模型扁平化
 * @param model - 模型
 */
export const flatModel = (model: Object3D): Object3D[] => {
  const modelPartsArray: Object3D[] = [];
  model.traverse((obj) => {
    modelPartsArray.push(obj);
  });
  return modelPartsArray;
};
