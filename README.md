# Xelvion — Engineering Scalable Software & AI Architectures (xelvion.world)

Corporate landing page and technical verification portal for startup accelerator evaluation (Anthropic Claude Startups, AWS Activate, Google for Startups, Y Combinator, Techstars).

---

## 🚀 Live Production Products & Verifications

Xelvion actively operates two live production web platforms:
1. **MegaMart**: High-concurrency e-commerce platform live at **[https://megamart24.tech](https://megamart24.tech)** with Redis flash-sale inventory locks, 3D interactive product inspection, Stripe/VNPAY sandbox payments, and NestJS + PostgreSQL + Prisma ORM.
2. **CineVN (Spatial Cinema 4K)**: Next-gen adaptive HLS video streaming engine live at **[https://cinevn.me](https://cinevn.me)** featuring hardware-accelerated Ambilight glow, Skip Intro, and strict open-license media compliance.

### Corporate Credentials
- **Official Domain**: `https://xelvion.world`
- **Founder Email**: `anhuynh@xelvion.world`
- **Live Products**:
  - MegaMart: `https://megamart24.tech` (200 OK, Nginx + Next.js)
  - CineVN: `https://cinevn.me` (200 OK, Caddy TLS + HLS.js)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000

# Production build test
npm run build
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub
2. In Vercel Dashboard: **Add New** → **Project** → Import this repo
3. Deploy → Verify preview URL
4. Go to **Settings** → **Domains** → Add `xelvion.world` and `www.xelvion.world`
5. Configure DNS records on your registrar (Namecheap / Cloudflare):
   - `A @ 76.76.21.21`
   - `CNAME www cname.vercel-dns.com`

---

## ✉️ Official Domain Email Setup (`anhuynh@xelvion.world`)

Startup programs (especially Claude Startups and AWS Activate) require an active business email on your domain:
- **Fast / Cost-effective**: Use Cloudflare Email Routing or Namecheap Email Forwarding forwarding directly from `anhuynh@xelvion.world` to your personal Gmail.
- **Professional Suite**: Google Workspace or Zoho Mail with proper `MX`, `SPF`, `DKIM`, and `DMARC` records.

---

## 📋 Startup Program Application Checklist

1. **Website Live**: Point DNS so `https://xelvion.world` is live.
2. **Email Active**: Ensure `anhuynh@xelvion.world` can send and receive emails.
3. **Claude Startups Submission**:
   - Sign up at [Claude Console](https://console.anthropic.com).
   - Apply at the official Anthropic Claude Startups portal: submit `xelvion.world`, `anhuynh@xelvion.world`, and highlight the live products (`megamart24.tech`, `cinevn.me`) and Claude 3.5 Sonnet / Haiku integration architecture.
