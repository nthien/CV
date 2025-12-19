# Generate PDF from CV

Script tự động tạo file PDF từ CV website sử dụng Puppeteer.

## Cách sử dụng

### 1. Build website trước:
```bash
npm run build
```

### 2. Generate PDF:
```bash
npm run pdf
```

Hoặc build và generate PDF cùng lúc:
```bash
npm run build:pdf
```

### 3. File PDF sẽ được tạo tại:
```
CV_HienNguyen.pdf
```

## Yêu cầu

- Node.js 18+
- Google Chrome hoặc Chromium (để Puppeteer sử dụng)
- Đã build website (`out/` directory tồn tại)

## Troubleshooting

Nếu gặp lỗi:
1. Đảm bảo đã chạy `npm run build` trước
2. Kiểm tra Chrome/Chromium đã được cài đặt
3. Trên macOS, script sẽ tự động tìm Chrome tại `/Applications/Google Chrome.app`

## CI/CD Integration

Script này có thể được tích hợp vào GitHub Actions để tự động generate PDF mỗi khi deploy.

