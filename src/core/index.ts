import * as THREE from 'three';
import { CAMERACONFIG, RENDERERCONFIG } from '@/constants';
import { createScene, createCamera, createRenderer } from './world';

/**
 * 创建场景世界
 * @param
 */
export default function createWorld() {
  const scene = createScene();
  const camera = createCamera(CAMERACONFIG);
  const renderer = createRenderer(RENDERERCONFIG);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  document.getElementById('main')?.appendChild(renderer.domElement);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
}
