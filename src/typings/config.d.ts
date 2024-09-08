/**
 * 相机配置
 */
interface CameraConfig {
  fov: number;
  aspect: number;
  near: number;
  far: number;
}

/**
 * 渲染器配置
 */
interface RendererConfig {
  /* 渲染器宽度 */
  width: number;
  /* 渲染器高度 */
  height: number;
  /* 分辨率渲染风格 */
  updateStyle: boolean;
}
