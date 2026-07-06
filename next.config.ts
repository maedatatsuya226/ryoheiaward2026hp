import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages向けに完全静的HTMLとして出力する
  output: "export",
  images: {
    // next/image のオンデマンド最適化はexport非対応のため無効化
    unoptimized: true,
  },
  // devサーバー(.next-dev)とnext build(.next)の作業フォルダを分離する。
  // next buildはdistDir設定に関わらず .next を必ず初期化するため、
  // dev側を .next-dev に退避させないと、dev起動中のbuildでdevが壊れて
  // "Cannot find module './NNN.js'" エラーが発生する。
  // devのフォルダは package.json の dev スクリプトが NEXT_DIST_DIR で指定する。
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
