/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Auto-detect from environment variable, or use hardcoded value
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || '/CV'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath and assetPrefix for GitHub Pages
  // Repository: nthien/CV -> basePath: /CV
  // If deploying to a subpath (e.g., username.github.io/repo-name)
  // Set NEXT_PUBLIC_BASE_PATH environment variable to '/repo-name'
  // For root domain (username.github.io), set to ''
  basePath: repoName,
  assetPrefix: repoName,
}

module.exports = nextConfig

