<template>
	<div class="card-item-info">
		<div class="card-item-info__header">
			<div class="card-item-info__header-fuelType">{{currentInfoProp.fuelType}}</div>
			<div class="card-item-info__header-tank">резервуар <span>{{currentInfoProp.fuelTankNumber}}</span></div>
		</div>
		<div class="card-item-info__content">
			<div class="card-item-info__content-item">
				<div ref="ciiContentNumber0" class="card-item-info__content-item__number" @click="UPDATE_NUMBERS"><span>{{currentInfoProp.maxCapacity}}</span></div>
				<div class="card-item-info__content-item__expl"><span>Максимальный объем</span></div>
			</div>
			<div class="card-item-info__content-item">
				<div ref="ciiContentNumber1" class="card-item-info__content-item__number" @click="UPDATE_NUMBERS"><span>{{currentInfoProp.currentResidue}}</span></div>
				<div class="card-item-info__content-item__expl"><span>Текущий остаток</span></div>
			</div>
			<div class="card-item-info__content-item">
				<div ref="ciiContentNumber2" class="card-item-info__content-item__number" @click="UPDATE_NUMBERS"><span>{{currentInfoProp.nonRemovableResidue}}</span></div>
				<div class="card-item-info__content-item__expl"><span>Несливаемый остаток</span></div>
			</div>
			<div class="card-item-info__content-item">
				<div ref="ciiContentNumber2" class="card-item-info__content-item__number" @click="UPDATE_NUMBERS"><span>{{currentInfoProp.daysUntilExhaustion}}</span></div>
				<div class="card-item-info__content-item__expl"><span>Дней до исчерпания остаток</span></div>
			</div>
		</div>
	</div>
</template>
<script>
	import {TimelineMax, TweenMax, TweenLite} from 'gsap'
	import { CSSRulePlugin } from "gsap/all"
	export default {

		name: 'card-item-info',
		props: {
			currentInfoProp: {
				type: Object,
				required: true,
				activeComponentInfo: ''
			},
		},
		data () {
			return {

			}
		},
		mounted(){
		},
		methods: {
			UPDATE_NUMBERS(){
				var Cont={val:0} , NewVal = this.currentInfoProp.maxCapacity ;
				let that = this;
				TweenLite.to(Cont,.9,{val:NewVal,roundProps:"val",onUpdate:function(){
				that.$refs.ciiContentNumber0.innerHTML=Cont.val
				}});
			},
		},
	}
</script>
<style lang="sass">
.card-item-info
	position: relative
	display: flex
	user-select: none
	white-space: nowrap
	flex-direction: column
	flex-basis: 100%
	height: 60%
.card-item-info__header-tank
	margin-left: 15px
.card-item-info__header
	padding: 15px 15px 0 15px
	position: relative
	display: flex
	user-select: none
	white-space: nowrap
	flex-direction: row
.card-item-info__content
	padding: 15px
	position: relative
	display: flex
	user-select: none
	white-space: nowrap
	flex-direction: row
	height: 100%
.card-item-info__content-item
	flex-basis: 100%
	position: relative
	display: flex
	user-select: none
	white-space: nowrap
	flex-direction: column
	justify-content: center
.card-item-info__content-item__number
	display: flex
	height: 50%
	align-items: flex-end
	justify-content: center
	//padding-bottom: 5px
	font-size: 58px
	font-family: 'Oswald-Extralight'
.card-item-info__content-item__expl
	//padding-top: 5px
	display: flex
	height: 50%
	align-items: flex-start
	justify-content: center
	font-size: 22px
	text-align: center
	white-space: pre-wrap
</style>