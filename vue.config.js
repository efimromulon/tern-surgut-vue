// module.exports = {
// 	css: {
// 		loaderOptions: {
// 			// передача настроек в sass-loader
// 			sass: {
// 				// @/ это псевдоним к каталогу src/ поэтому предполагается,
// 				// что у вас в проекте есть файл `src/variables.scss`
// 				data: 
// 				`@import '@/sass/abstracts/_functions.sass';
// 				 @import '@/sass/abstracts/_mixins.sass';
// 				 @import '@/sass/abstracts/_variables.sass';
// 				 @import '@/sass/abstracts/_placeholders.sass';
// 				 @import '@/sass/base/_reset.sass';
// 				 @import '@/sass/base/_typography.sass';
// 				 @import '@/sass/custom-leaflet/_leaflet.sass';`
// 			}
// 		}
// 	}
// };
module.exports = {
	css: {
		loaderOptions: {
			// передача настроек в sass-loader
			sass: {
				// @/ это псевдоним к каталогу src/ поэтому предполагается,
				// что у вас в проекте есть файл `src/variables.scss`
				data: `@import '@/sass/abstracts/_mixins.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_variables.sass';@import '@/sass/abstracts/_placeholders.sass';@import '@/sass/base/_reset.sass'; @import '@/sass/base/_typography.sass';@import '@/sass/custom-leaflet/_leaflet.sass';`
			}
		}
	}
};
