module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import '@/sass/abstracts/_mixins.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_placeholders.sass';@import '@/sass/base/_reset.sass'; @import '@/sass/base/_typography.sass';@import '@/sass/custom-leaflet/_leaflet.sass';`
			}
		}
	}
};
