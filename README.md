# shiftshapr

Source for [shiftshapr.com](https://shiftshapr.com) — personal site.

## Stack (same as [nft.xowlz.com](https://nft.xowlz.com))

- **NGINX** serves `public/`; **`/api/*`** proxies to Node (port **4011**).
- **Express** — `api-server.js` (see `/home/ubuntu/xowlz` for the fuller reference app).

```bash
cp .env.example .env
npm install
npm run dev          # optional; listens on 4011
```

**Production:** install the systemd unit (adjust paths if needed), enable the API, reload nginx from `../../nginx/shiftshapr.com.conf`:

```bash
sudo cp shiftshapr-site.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now shiftshapr-site.service
sudo cp ../../nginx/shiftshapr.com.conf /etc/nginx/sites-available/shiftshapr.com.conf
sudo nginx -t && sudo systemctl reload nginx
```
