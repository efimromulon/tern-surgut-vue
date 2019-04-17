<template>
	<transition
		v-on:before-enter="beforeEnter"
		v-on:enter="enter"
		v-on:after-enter="afterEnter"
		v-on:enter-cancelled="enterCancelled"

		v-on:before-leave="beforeLeave"
		v-on:leave="leave"
		v-on:after-leave="afterLeave"
		v-on:leave-cancelled="leaveCancelled"
		mode="out-in"
	>
		<div class="search-form-view">
			<div class="search-form-view__input">
				<span class="input_air-search-large">
					<span class="input_air-search-large-context">
						<input 
							type="text" 
							class="input_air-search-large-control"
							placeholder="Поиск АЗС, городов, трасс"
							autocomplete="off"
							autocorrect="off"
							v-model="qQuery"
							@input="debouncedSearch"
						>
					</span>
				</span>
			</div>
		</div>
	</transition>
</template>

<script>

	import {mapActions, mapState} from 'vuex'
	import debounce from 'lodash/debounce'

	export default {

		name: 'search-input',

		data () {

			return {
				tl: null,
				buttonSearchId: 1,
			}
			
		},

		computed: {

			...mapState({
				searchQuery: state => state.search.searchQuery
			}),

			qQuery: {
				get(){return this.searchQuery},
				set(val){return this.setSearchQuery(val)},
			}

		},
		created(){
			this.tl = new TimelineMax();
		},
		methods: {
			beforeEnter: function (el) {
			},
			enter: function (el, done) {
		
				this.tl
				.to(el, 1, {width: '100%', onComplete: done}, +1.0);
			},
			afterEnter: function (el) {
			},
			enterCancelled: function (el) {
			},
			beforeLeave: function (el) {
			},
			leave: function (el, done) {
		
				this.tl
				.to(el, 1, {width: '0%', onComplete: done});
				
			},
			afterLeave: function (el) {
			},
			// leaveCancelled only available with v-show
			leaveCancelled: function (el) {

			},
			blurSearch(){
				//@blur="blurSearch" - вставить в input
				//this.qQuery = "";
				//this.$store.dispatch('reset_search');
				this.$store.dispatch('close_search');
			},
			SEARCH_BLUR(){
				this.$store.dispatch('close_search');
				this.$store.dispatch('toggle_ui_settings_button',{buttonArray: 'uiButtonSquare', id: this.buttonSearchId})
			},

			...mapActions(['search', 'setSearchQuery']),
			debouncedSearch: 
				debounce(
					function(e){
						console.log('Starting search');
						this.$store.dispatch('search', e.target.value);
					}, 
					500
				)

		},
	}

</script>

<style lang="sass">
	.search-form-view
		display: flex
		width: 0%
		background-color: #fff
		border-radius: 4px
		overflow: hidden
		@include shadow(2)
		transform: translate3d(0,0,0)
	.search-form-view__input
		width: 100%
		flex-grow: 1
	.input_air-search-large
		position: relative
		display: inline-flex
		box-sizing: border-box
		width: 100%
		background-clip: padding-box
		vertical-align: middle
		line-height: normal
		border: 0
	.input_air-search-large-context
		//border: 2px solid #fff
		border-right: 0
		border-left: 0
		display: block
		width: 100%
		height: 100%
		overflow: hidden
		cursor: text
		input
			text-align: center
	.input_air-search-large-control
		font-size: 14px
		line-height: 1.2em
		height: 45px
		color: #000
		background: 0 0
		border-left-width: 0
		position: relative
		display: inline-block
		box-sizing: border-box
		margin: 0
		padding: 0
		border: .6em transparent solid
		border-top: none
		border-bottom: none
		width: 100%
		vertical-align: baseline
		outline: none
</style>