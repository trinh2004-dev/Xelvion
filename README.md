# Xelvion — xelvion.world

Landing page 1 trang cho startup Xelvion, chuẩn bị hồ sơ Claude Startups.

## Chạy local
```bash
npm install
npm run dev
# mở http://localhost:3000
```

## Deploy Vercel (khuyên dùng)
1. Push code lên GitHub
2. Vercel → Add New → Project → Import repo
3. Deploy → kiểm tra URL .vercel.app
4. Settings → Domains → thêm `xelvion.world` + `www.xelvion.world`
5. Làm theo DNS Vercel hiển thị (xem bên dưới)

## DNS Namecheap cho xelvion.world
Hiện tại bạn đang có (ảnh bạn gửi):
- CNAME `www` → `parkingpage.namecheap.com.`
- URL Redirect `@` → `http://www.xelvion.world/`

Để trỏ về Vercel, XÓA 2 dòng trên, thêm:
- `A @ 76.76.21.21`
- `CNAME www cname.vercel-dns.com`

Ưu tiên giá trị Vercel hiển thị trong dashboard của bạn nếu khác ví dụ trên.
Không xóa MX/TXT dùng cho email. Đợi 5 phút – vài giờ để DNS lan tỏa.

## Email founder@xelvion.world
- Tiết kiệm: Cloudflare Email Routing hoặc Namecheap forwarding về Gmail cá nhân
- Hộp thư thật: Zoho Mail / Google Workspace — cấu hình MX/SPF/DKIM/DMARC theo nhà cung cấp, không tự điền theo mẫu trên mạng.

## Hồ sơ Claude Startups
- Website live tại https://xelvion.world
- Email founder@xelvion.world hoạt động gửi/nhận
- Mục Technology nêu rõ dùng Claude API làm gì
- Tạo tài khoản tại Claude Console và nộp tại Claude Startups.
