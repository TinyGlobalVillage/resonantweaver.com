// import { withContentlayer } from 'next-contentlayer2';
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   compiler: { styledComponents: true },
// };

// export default withContentlayer(nextConfig);

// import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enables built-in SSR for styled-components
  },
  trailingSlash: true,
};

export default nextConfig;
