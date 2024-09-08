/**
 * 后台服务环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod';

/** 后台服务环境配置 */
interface ServiceEnvConfig {
  url: string;
}

interface ServiceEnvConfigWithProxyPattern extends ServiceEnvConfig {
  /**
   * 匹配路径的正则字符串
   * - 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用)
   * - 与后端请求地址的前缀无关
   * - 有多个后端请求实例时，需要创建不同的值
   */
  proxyPattern: '/api';
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** hash路由模式 */
  readonly VITE_HASH_ROUTE: 'Y' | 'N';
  /** 路由首页（根路由重定向） */
  readonly VITE_ROUTE_HOME_PATH: string;
  /** 是否开启请求代理 */
  readonly VITE_HTTP_PROXY: 'Y' | 'N';
  /** 后端服务环境类型 */
  readonly VITE_SERVICE_ENV?: ServiceEnvType;
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS: 'Y' | 'N';
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE:
    | 'gzip'
    | 'brotliCompress'
    | 'deflate'
    | 'deflateRaw';
  /** 是否应用pwa */
  readonly VITE_PWA: 'Y' | 'N';
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER: 'Y' | 'N';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
