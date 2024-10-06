import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

/**
 * 读取纹理loader
 * @param path - 资源路径
 */
export function useTextureLoader(path: string) {
  return useLoader(TextureLoader, path);
}

/**
 * 读取GLTFloader
 * @param path - 资源路径
 */
export function useGLTFLoader(path: string) {
  return useGLTF(path);
}
