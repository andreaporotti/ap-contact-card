module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: { grid: true },
		...(process.env.NODE_ENV === 'production'
			? {
				cssnano: {
					preset: [
						'default',
						{
							discardComments: {
								removeAll: true,
							},
						},
					],
				},
			}
			: {}),
	},
};
