// module.exports = {
// 	images: {
// 		domains: ['sprint-fe-project.s3.ap-northeast-2.amazonaws.com'],
// 	},
// };
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
				port: '',
				pathname: '/Sprint_Mission/**',
			},
		],
	},
};
