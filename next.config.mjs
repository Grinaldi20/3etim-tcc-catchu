/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// permite imagens servidas pela API local (desenvolvimento em localhost)
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '3000',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3333',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '3333',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
