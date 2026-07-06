import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages向けに完全静的HTMLとして出力する
  output: "export",
  images: {
    // next/image のオンデマンド最適化はexport非対応のため無効化
    unoptimized: true,
  },
};

export default nextConfig;
