# Cloudflare security headers

GitHub Pages does not allow repository-controlled HTTP response headers. If the domain is proxied through Cloudflare, create a Response Header Transform Rule for all requests and set:

- Strict-Transport-Security: max-age=31536000; includeSubDomains
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

Test the form and analytics after enabling the Content-Security-Policy. The site also includes a browser-level CSP meta tag as a partial GitHub Pages control.
