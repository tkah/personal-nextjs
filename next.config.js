/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'f1000research.com',
                port: '',
                pathname: '/img/share/og_research.png',
            },
            {
                protocol: 'http',
                hostname: 'appcontest.unm.edu',
                port: '',
                pathname: '/common/images/graph-ic.jpg',
            },
            {
                protocol: 'https',
                hostname: 'www.krqe.com',
                port: '',
                pathname: '/wp-content/uploads/sites/12/2022/03/Website-Logos-KRQE-News-250X60.png',
            },
            {
                protocol: 'http',
                hostname: 'webcore.unm.edu',
                port: '',
                pathname: '/v2/images/unm-logo.png',
            },
            {
                protocol: 'https',
                hostname: 'd4h3th6c0srvk.cloudfront.net',
                port: '',
                pathname: '/1c98dc91b9b33f3186b3bb9d587dcf03/dist/img/logo.png',
            },
        ],
    },
}

module.exports = nextConfig
