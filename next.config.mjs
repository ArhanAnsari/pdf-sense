import { isServer } from '@tanstack/react-query';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) => {
    if (isServer) {
      // Ignore specific packages when running on the server
      config.resolve.alias.canvas = false;
      config.resolve.alias.encoding = false;
    }
    
    // Other potential configurations
    // e.g., adding plugins or optimizing performance

    return config;
  },
};

export default nextConfig;
// import { isServer } from '@tanstack/react-query';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (
//     config,
//     { buildId, dev, isServer, defaultLoaders, webpack }
//   ) => {
//     config.resolve.alias.canvas = false
//     config.resolve.alias.encoding = false
//     return config
//   },
// };

// export default nextConfig;
