const puppeteer = require('puppeteer')
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const http = require('http')
const url = require('url')

const PORT = 3000
const OUTPUT_DIR = path.join(__dirname, '..', 'out')
const PDF_OUTPUT = path.join(__dirname, '..', 'CV_HienNguyen.pdf')

async function startServer() {
  return new Promise((resolve, reject) => {
    // Check if out directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      console.error('❌ Error: out/ directory not found. Please run "npm run build" first.')
      process.exit(1)
    }

    // Start a simple HTTP server to serve the static files
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url)
      let pathname = parsedUrl.pathname

      // Default to index.html
      if (pathname === '/' || pathname === '') {
        pathname = '/index.html'
      }

      const filePath = path.join(OUTPUT_DIR, pathname)

      // Check if file exists
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' })
          res.end('404 Not Found')
          return
        }

        // Set content type
        const ext = path.extname(filePath)
        const contentTypes = {
          '.html': 'text/html',
          '.css': 'text/css',
          '.js': 'application/javascript',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.svg': 'image/svg+xml',
        }
        const contentType = contentTypes[ext] || 'application/octet-stream'

        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)
      })
    })

    server.listen(PORT, (err) => {
      if (err) {
        reject(err)
      } else {
        console.log(`✅ Server started on http://localhost:${PORT}`)
        resolve(server)
      }
    })
  })
}

async function generatePDF() {
  let server
  let browser

  try {
    // Start server
    server = await startServer()

    // Wait a bit for server to be ready
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Launch browser
    console.log('🌐 Launching browser...')
    const launchOptions = {
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ],
    }

    // Try to use system Chrome if available (macOS)
    const possibleChromePaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
    ]

    for (const chromePath of possibleChromePaths) {
      if (fs.existsSync(chromePath)) {
        console.log(`✅ Found Chrome at: ${chromePath}`)
        launchOptions.executablePath = chromePath
        break
      }
    }

    browser = await puppeteer.launch(launchOptions)

    const page = await browser.newPage()

    // Set viewport for A4 size
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    })

    // Try to detect basePath by checking if /CV/pdf exists, otherwise use /pdf
    let pdfPagePath = '/pdf'
    const testPaths = ['/CV/pdf', '/pdf']
    
    for (const testPath of testPaths) {
      try {
        const response = await page.goto(`http://localhost:${PORT}${testPath}`, {
          waitUntil: 'domcontentloaded',
          timeout: 5000,
        })
        if (response && response.status() === 200) {
          pdfPagePath = testPath
          console.log(`✅ Found PDF page at: ${testPath}`)
          break
        }
      } catch (e) {
        // Continue to next path
      }
    }
    
    console.log(`📄 Loading PDF page: http://localhost:${PORT}${pdfPagePath}`)
    try {
      await page.goto(`http://localhost:${PORT}${pdfPagePath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000,
      })
    } catch (error) {
      console.log('⚠️  Network idle timeout, trying with domcontentloaded...')
      await page.goto(`http://localhost:${PORT}${pdfPagePath}`, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      })
    }

    // Wait for content to render
    console.log('⏳ Waiting for content to render...')
    await page.waitForTimeout(3000)

    // Generate PDF
    console.log('📄 Generating PDF...')
    await page.pdf({
      path: PDF_OUTPUT,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm',
      },
      preferCSSPageSize: true,
    })

    console.log(`✅ PDF generated successfully: ${PDF_OUTPUT}`)
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
    process.exit(1)
  } finally {
    if (browser) {
      await browser.close()
    }
    if (server) {
      server.close()
    }
  }
}

// Run
generatePDF()

