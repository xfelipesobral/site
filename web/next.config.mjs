/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.psnprofiles.com'
            },
            {
                protocol: 'https',
                hostname: 'shared.cloudflare.steamstatic.com',
            }
        ]
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['felipesobral.com.br']
        }
    }
};

export default nextConfig;
