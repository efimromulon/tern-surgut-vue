<template>
	<form class="search-form-view">
		<div class="search-form-view__input">
			<span class="input_air-search-large">
				<span class="input_air-search-large-context">
					<input 
						type="text" 
						class="input_air-search-large-control"
						placeholder="Поиск АЗС, городов, трасс"
						autocomplete="off"
						autocorrect="off"
						>
				</span>
			</span>
		</div>
	</form>
</template>

<script>
export default {

	name: '_search-input',

	data () {
		return {

		}
	}
}
</script>

<style lang="sass">
	.search-form-view
		display: flex
		width: 100%
		background-color: #fff
		border-radius: 4px
		overflow: hidden
		@include shadow(1)
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
		background-color: #fff
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