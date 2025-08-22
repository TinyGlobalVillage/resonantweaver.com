import { withContentlayer } from 'next-contentlayer2';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
};

export default withContentlayer(nextConfig);