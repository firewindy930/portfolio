/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for Vercel deployment
  // Vercel handles Next.js deployments natively
  transpilePackages: ["@workspace/ui"],
};

export default nextConfig;
