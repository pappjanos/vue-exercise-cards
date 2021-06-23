<template>
	<div class="home">
		<h1>Product catalog</h1>
		<ProductList :products="allProducts" />
	</div>
</template>

<script>
	import ProductList from '../components/ProductList'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'Home',
		computed: mapGetters(['allProducts']),
		components: {
			ProductList,
		},
		methods: {
			...mapActions(['fetchProducts']),
		},
		created() {
			this.fetchProducts()
		},
	}
</script>

<style scoped>
	.home {
		text-align: center;
	}
</style>