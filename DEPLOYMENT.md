# GitHub Pages Deployment Guide

## Vấn đề CSS 404

Nếu CSS bị 404 khi deploy lên GitHub Pages, đây là cách fix:

### Cách 1: Tự động (Đã cấu hình sẵn)

GitHub Actions workflow đã được cấu hình để tự động detect repository name và set `basePath`. Chỉ cần:

1. Push code lên GitHub
2. GitHub Actions sẽ tự động build và deploy
3. CSS sẽ hoạt động đúng

### Cách 2: Manual Configuration

Nếu bạn muốn cấu hình thủ công, sửa file `next.config.js`:

**Cho repository subpath** (ví dụ: `username.github.io/repo-name`):
```javascript
basePath: '/repo-name',
assetPrefix: '/repo-name',
```

**Cho root domain** (ví dụ: `username.github.io`):
```javascript
// Không cần basePath và assetPrefix
// Hoặc để trống
```

### Cách 3: Environment Variable

Set environment variable trước khi build:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

## Kiểm tra

Sau khi deploy, kiểm tra:
1. Mở DevTools → Network tab
2. Reload trang
3. Xem các file CSS có load thành công không
4. Nếu vẫn 404, kiểm tra path trong HTML source

## Troubleshooting

- **CSS vẫn 404**: Kiểm tra repository name có đúng không
- **Images không hiển thị**: Đảm bảo `images.unoptimized: true` trong config
- **Routes không hoạt động**: Đảm bảo `output: 'export'` trong config

