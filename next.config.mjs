/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['admin.asianmotors.co.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.asianmotors.co.in',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/currentstock',
        destination: '/buy-used-cars-hyderabad',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/sellyourcar.html',
        destination: '/sell-your-car-hyderabad',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
