/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: { 
        unoptimized: true,
        loader: 'custom',
        loaderFile: './src/lib/imageLoader.js'
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  }

export default nextConfig;
