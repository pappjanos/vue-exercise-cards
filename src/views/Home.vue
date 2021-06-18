<template>
	<div class="home">
		<h1>Product catalog</h1>
		<ProductList :products="products" />
	</div>
</template>

<script>
	import ProductList from '../components/ProductList'
	export default {
		name: 'Home',
		props: {
			products: Array,
		},
		components: {
			ProductList,
		},
	}
</script>

<style scoped>
	.home {
		text-align: center;
	}
</style>