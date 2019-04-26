<template>
	<div class="card-item" @click="clickCardItem">
		<div class="card-item__gasMark">{{cardData.fuelType}}</div>
		<div class="card-item__current-residue">{{cardData.currentResidue}}</div>
		<div class="card-item__rating">
			<div class="card-item__rating-residue">нормально</div>
			<div class="card-item__rating-slider">
				<div class="rating-slider__wrapper" :class="[getSliderClassName()]"></div>
			</div>
		</div>
		<div class="card-item__tank-selector">резервуар 1 2</div>
	</div>
</template>

<script>

	import {TimelineMax, TweenMax, TweenLite} from 'gsap'
	import { CSSRulePlugin } from "gsap/all"

	export default {

		name: 'card-item',
		props: {
			cardData: {
				type: Object,
				required: true,
			},
		},
		data () {
			return {
				ratingInPercent: '',
				rating: 0,
				currentColor: '',
			}
		},
		methods: {
			getSliderClassName(){
				let a = `rating-slider__wrapper--${this.cardData.id}`
				return a;
			},
			clickCardItem(){
				console.log(this.cardData);
				this.UPDATE_SLIDER();
				this.$store.dispatch('update_fuelstock_active', this.cardData.id)
			},
			UPDATE_SLIDER(){
				let target = this.getSliderClassName();
				console.log(target);
				this.rating = (this.cardData.currentResidue / this.cardData.maxCapacity) * 100;
				this.ratingInPercent = `${this.rating}%`;
				let colors = [

				];
				switch(true){
					case this.rating <= 20:
						this.currentColor = '#FF0000';
						break;
					case this.rating <= 40:
						this.currentColor = '#EBBC00';
						break;
					case this.rating <= 60:
						this.currentColor = '#FBE1A5';
						break;
					case this.rating <= 80:
						this.currentColor = '#95E658';
						break;
					case this.rating >  80:
						this.currentColor = '#48F228';
						break;
				}
				
				var rule = CSSRulePlugin.getRule(`.${target}:after`);
				TweenLite.to(rule, 0.3, {cssRule:{width:this.ratingInPercent, backgroundColor: this.currentColor}});
			},
		}
	}
</script>
<style lang="sass">
	.card-item
		position: relative
		flex-basis: 100%
		border: 1px solid rgba(#707070, .13)
		background-color: white
		transition: all 0.3s ease-in-out 0s
		border-top: none
		&:first-child
			border-left: none
		&:last-child
			border-right: none
		&:hover
			background-color: #C39DFA
			transform: scale(1.075)
			z-index: 10
			@include shadow(3)
			.card-item__gasMark, .card-item__current-residue, .card-item__rating-residue, .card-item__tank-selector
				color: white !important
	.card-item__gasMark
		padding: 25px 10px 0px 10px
		text-align: center
		font-size: 16px
		color: #8E8E8E
		transition: all 0.3s ease-in-out 0s
	.card-item__current-residue
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		//padding: 10px 10px 0px 10px
		text-align: center
		font-size: 28px
		font-family: 'Oswald-Regular'
		transition: all 0.3s ease-in-out 0s
	.card-item__rating
		position: relative
		//background-color: blue
		top: 35%
	.card-item__rating-residue
		padding: 0px 10px 0px 10px
		text-align: center
		font-size: 14px
		color: #8E8E8E
		transition: all 0.3s ease-in-out 0s
	.card-item__rating-slider
		margin-top: 10px
		width: calc(100% - 30px)
		position: relative
		padding: 0 15px
	.rating-slider__wrapper
		position: relative
		width: 100%
		height: 3px
		&:before
			content: ""
			position: absolute
			width: 100%
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: rgba(#682AC2, .13)
			z-index: 2
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--0
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--1
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--2
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--3
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--4
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--5
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--6
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.rating-slider__wrapper--7
		&:after
			content: ""
			position: absolute
			height: 3px
			border-radius: 1px
			bottom: 0
			//left: 15px
			transform-origin: left bottom
			background-color: #FF0000
			z-index: 3
			transition: all 0.3s ease-in-out 0s
	.card-item__tank-selector
		position: absolute
		bottom: 0%
		left: 50%
		transform: translate(-50%, 0%)
		padding: 0px 10px 15px 10px
		font-size: 12px
		color: #505050
		transition: all 0.3s ease-in-out 0s


</style>