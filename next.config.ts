// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Commented out to enable Next.js Server API Routes (/api/contact)
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "..",
  },
};

export default nextConfig;