module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import '@/sass/buttons/_theme-white-buttons.sass';@import '@/sass/themes/_theme-white.sass';@import '@/sass/abstracts/_mixins.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_placeholders.sass';@import '@/sass/base/_reset.sass'; @import '@/sass/base/_typography.sass';@import '@/sass/custom-leaflet/_leaflet.sass';`
			}
		}
	},
	// publicPath: process.env.NODE_ENV === 'production' ? 'http://hana103:8051/sngias/oilix_prd/map_dev/' : '/'
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
};