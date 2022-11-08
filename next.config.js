/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos', 'cdn.sanity.io'],
	},
	rewrites: async () => [
		{
			source: '/',
			destination: '/index.html',
		},
	],
}

module.exports = nextConfig
