import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
  repo = repoName.endsWith(".github.io") ? "" : `/${repoName}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
