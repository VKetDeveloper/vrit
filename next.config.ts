import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 静的エクスポートモード
  // 他の設定オプションはここに追加
};

export default nextConfig;
