# Hosting, GSC and GA4 setup

## Current hosting
This package is configured for GitHub Pages using the `CNAME` file. Nginx is not available on GitHub Pages. Clean URLs are implemented using folder-based `index.html` pages.

## Google Search Console
1. Add `verticsecurity.com.au` as a Domain property.
2. Add the TXT verification record supplied by Google to the domain DNS.
3. After verification, submit `https://www.verticsecurity.com.au/sitemap.xml`.

Alternative: replace `google-site-verification-ADD-YOUR-TOKEN.html` with the exact verification file supplied by Google.

## Google Analytics 4
1. Create a GA4 property and web data stream for `https://www.verticsecurity.com.au`.
2. Copy the Measurement ID beginning with `G-`.
3. Open `assets/js/analytics.js` and place the ID between the quotes in `window.VERTIC_GA4_ID=""`.
4. Deploy and verify using Google Tag Assistant or GA4 Realtime.

## Optional Nginx migration
`nginx.conf.example` is supplied only if the site is later moved to a VPS or GCP Compute Engine. SSL certificate paths and server deployment must be configured on that server.
