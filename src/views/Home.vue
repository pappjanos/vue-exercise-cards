<template>
	<div class="home">
		<h1>Product catalog</h1>
		<ProductList :products="products" />
	</div>
</template>

<script>
	import ProductList from '../components/ProductList'
	import { products } from '../assets/exercise'

	export default {
		name: 'Home',

		data: () => ({
			products: [],
		}),
		components: {
			ProductList,
		},
		created() {
			this.products = JSON.parse(products.value).products
		},
	}
</script>

<style scoped>
	.home {
		text-align: center;
	}
</style>