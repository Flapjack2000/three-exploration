import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // For Turbopack
  experimental: {
    turbo: {
      rules: {
        '*.glsl': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.vert': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.frag': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
  },
  // For webpack (fallback)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    });
    return config;
  }
};

export default nextConfig;