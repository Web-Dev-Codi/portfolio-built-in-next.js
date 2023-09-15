/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["express", "mongodb", "mongoose"],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://webdevcodi:c1H9r3t6POa4UxWD@cluster0.4xfqs7d.mongodb.net/contact_db",
    EMAIL_PASS: "NqL2gdfjH+D&9zE.",
    USER: "cordiscobrian@gmail.com",
    RESEND_KEY: "re_Cd9n4ay5_7VuZqMQMdU2N527iEErayJUp",
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
