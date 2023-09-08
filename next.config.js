/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["express", "mongodb", "mongoose"],
  },
  env: {
    MONGO_URI:
      "mongodb+srv://webdevcodi:PU1F8vzLHSrtuDfq@clients.ldsasw9.mongodb.net/?retryWrites=true&w=majority,",
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
