/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages with a custom domain or subpath
  // Uncomment and set your repository name:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  // For root domain deployment, leave basePath and assetPrefix commented
}

module.exports = nextConfig

