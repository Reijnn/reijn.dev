module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,png,xml,js,css,ico,svg,woff,woff2,webp,txt,webmanifest}'
	],
	swDest: '/static/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};