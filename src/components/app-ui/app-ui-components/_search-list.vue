<template>
	<div class="search-list-view">
		<div class="sidebar-left-panel-header-view">
			<div class="sidebar-left-panel-header-view__title">
				<div class="sidebar-left-panel-header-view__title-text">
					Результаты поиска
				</div>
			</div>
		</div>
		<div class="Search-results"  data-scrollbar tabindex="1" >
			<div class="scroll-content" style="overflow: hidden; outline: none;">
				<div class="search-list-view__list">
				<ul class="search-page-view">
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, rem.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Ad voluptate harum perspiciatis, quisquam voluptatum, optio aspernatur hic quod.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Nesciunt iure officiis sequi quaerat eaque iste dolore porro cum.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Architecto veritatis qui vel a maiores, deleniti odit officiis natus.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Sit quasi quisquam vitae, perspiciatis voluptatem esse commodi ipsum repudiandae.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Dolore est excepturi animi atque culpa placeat, nesciunt eaque vitae.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Voluptatem officia molestiae quaerat harum porro, expedita iusto cum aliquid!</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Distinctio eius, illo vero magni veritatis voluptatem, nobis nesciunt nam.</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Adipisci, sunt, facere. Reprehenderit quam adipisci debitis blanditiis optio eaque!</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Molestiae a labore commodi, itaque vero quidem rem possimus voluptates?</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Illo laudantium doloribus quisquam culpa officia molestias saepe, in neque!</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Nisi expedita praesentium harum laborum a distinctio ad suscipit aliquam!</div>
						</div>
					</li>
					<li class="search-snippet-view">
						<div class="search-business-snippet-view">
							<div class="search-business-snippet-view__body">Cupiditate odit ea consequuntur itaque culpa officia odio, repellat tempore.</div>
						</div>
					</li>
				</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	import Scrollbar from 'smooth-scrollbar'
	import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
	export default {

		name: 'search-list',
		props: ['SearchInput'],
		data () {
			return {
				data_displayResultLabels: null,
				data_SearchInput: null
			}
		},
		computed: {
			get_searchResults(){
				return this.$store.getters.get_searchResults;
			},
			displayResultLabels(){
				let a1=[], a2=[], a3=[], a4=[], a5=[];
				let a = this.get_searchResults;

				for( var i = 0; i < a.length; i++ ){
					switch (a[i].category) {
						case 'Киришиавтосервис' : 
							a1.push(a[i].label);
							break;
						case 'Калининграднефтепродукт' : 
							a2.push(a[i].label);
							break;
						case 'Тверьнефтепродукт' : 
							a3.push(a[i].label);
							break;
						case 'Новгороднефтепродукт' : 
							a4.push(a[i].label);
							break;
						case 'Псковнефтепродукт' : 
							a5.push(a[i].label);
							break;
					};
				};
				let result = [

					{name: "Киришиавтосервис", data: a1}, 
					{name: "Калининграднефтепродукт", data: a2}, 
					{name: "Тверьнефтепродукт", data: a3}, 
					{name: "Новгороднефтепродукт", data: a4}, 
					{name: "Псковнефтепродукт", data: a5}

				];
				
				return result;
			},
		},
		methods: {
			searchDataToComponentData(){
				this.data_SearchInput = this.SearchInput;
				this.data_displayResultLabels = this.displayResultLabels;
			},
		},
		mounted(){
			this.searchDataToComponentData();
			Scrollbar.use(OverscrollPlugin)
			Scrollbar.init(document.querySelector('.Search-results'), {
				damping: 0.1,
				thumbMinSize: 20,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: true,
				plugins: {
					overscroll: {
						effect: 'bounce',
						damping: 0.2,
						maxOverscroll: 150,
						glowColor: '#87ceeb',
					}
				}
			});
		},
		components: {
		},
		watch: {
			get_searchResults(newCount, oldCount){
				this.searchDataToComponentData();
			},
		}
	}
</script>

<style lang='sass'>
	.search-list-view__list
		list-style: none
		margin: 0
		padding: 0
	.search-page-view
		list-style: none
		margin: 0
		padding: 0
	.search-snippet-view
		display: list-item
		background-color: #fff
		user-select: none
		text-decoration: none
		color: #333
		list-style: none
		padding: 0
		margin: 0
		border-style: none
		height: 170px
		&:after
			position: relative
			top: 0
			margin-bottom: 0
			display: block
			margin-right: -6px
			margin-left: -6px
			content: ''
			background-color: #ededed
			height: 1px
	.search-business-snippet-view
	.search-business-snippet-view__body
	.sidebar-left-panel-header-view
		border-bottom: 1px solid #ededed
		padding-right: 70px
		user-select: none
		background-color: #fff
		flex-shrink: 0
	.sidebar-left-panel-header-view__title
		position: relative
	.sidebar-left-panel-header-view__title-text
		white-space: nowrap
		text-overflow: ellipsis
		overflow: hidden
		font-size: 13px
		line-height: 36px
		padding-left: 16px
		padding-right: 70px
		color: #999
</style>