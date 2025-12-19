/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// Auto-detect from environment variable, or use hardcoded value
// For custom domain: set NEXT_PUBLIC_BASE_PATH='' (empty string) in GitHub Actions secrets
// For GitHub Pages subpath: set NEXT_PUBLIC_BASE_PATH='/repo-name' or leave empty to use default
// Default: '/CV' for GitHub Pages subpath
const repoName = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/CV'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath and assetPrefix for GitHub Pages
  // Repository: nthien/CV -> basePath: /CV (for GitHub Pages subpath)
  // Custom domain (cv.hiennguyen.tech) -> basePath: '' (root)
  // If deploying to a subpath (e.g., username.github.io/repo-name)
  // Set NEXT_PUBLIC_BASE_PATH environment variable to '/repo-name'
  // For custom domain, set NEXT_PUBLIC_USE_CUSTOM_DOMAIN=true
  basePath: repoName,
  assetPrefix: repoName,
}

module.exports = nextConfig

