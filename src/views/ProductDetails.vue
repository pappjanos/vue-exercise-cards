<template>
	<div class="product-details">
		<Product :product="product" maxwidth="800px" height="400px">
			<template v-slot:description> {{ product.description }} </template>
		</Product>
	</div>
</template>

<script>
	import Product from '../components/Product.vue'
	import { products } from '../assets/exercise'

	export default {
		name: 'ProductDetails',
		data: () => ({
			product: Object,
		}),
		props: ['id'],

		components: {
			Product,
		},
		created() {
			this.product = JSON.parse(products.value).products.filter(
				(el) => el.id === parseInt(this.$route.params.id)
			)[0]
		},
	}
</script>

<style scoped>
	.product-details {
		text-align: center;
	}
</style>