type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

const serviceConfig: ServiceEnv = {
  dev: {
    url: "http://localhost:5000",
  },
  test: {
    url: "http://localhost:3000",
  },
  prod: {
    url: "http://localhost:3000",
  },
};

/**
 * 获取当前环境下的服务端配置
 * @param viteEnv
 */
export function getServiceConfig(
  viteEnv: ImportMetaEnv,
): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = "dev" } = viteEnv;

  return {
    proxyPattern: "/api",
    ...serviceConfig[VITE_SERVICE_ENV],
  };
}
