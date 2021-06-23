<template>
	<div class="product-details">
		<Product :product="actualProduct" maxwidth="800px" height="400px">
			<template v-slot:description> {{ actualProduct.description }} </template>
		</Product>
	</div>
</template>

<script>
	import Product from '../components/Product.vue'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'ProductDetails',
		props: ['id'],
		computed: mapGetters(['actualProduct']),
		components: {
			Product,
		},
		methods: {
			...mapActions(['getActualProduct']),
		},
		created() {
			this.getActualProduct(this.$route.params.id)
		},
	}
</script>

<style scoped>
	.product-details {
		text-align: center;
	}
</style>