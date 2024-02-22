const nextConfig = {
    rewrites: () => {
        return [
            {
                source: '/backend/:path*',
                destination: process.env.BACKEND_URL + '/:path*',
            },
        ]
    },
}

module.exports = nextConfig
