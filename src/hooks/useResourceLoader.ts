import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

/**
 * 读取资源loader
 * @param type - 资源类型
 * @param name - 资源名称
 * @param path - 资源路径
 */
export function useResourceLoader({ type, name, path }: Resource) {
  let resource;
  console.log(name, type, path);
  // switch (type) {
  //   case 'texture':
  //     resource = useTextureLoader(path);
  //     break;
  //   case 'gltfModel':
  //     resource = useGLTFLoader(path);
  //     break;
  //   default:
  //     break;
  // }

  return {
    useTextureLoader,
    useGLTFLoader,
  };

  return resource;
}

function useTextureLoader(path: string) {
  return useLoader(TextureLoader, path);
}

function useGLTFLoader(path: string) {
  return useGLTF(path);
}
