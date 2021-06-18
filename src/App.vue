<template>
	<v-app>
		<Header title="Vue exercise" />

		<v-main>
			<div class="mt-5 mb-5">
				<router-view :products="products"></router-view>
			</div>
		</v-main>
	</v-app>
</template>

<script>
	import Header from './components/Header.vue'
	import { products } from './assets/exercise'

	export default {
		name: 'App',
		data: () => ({
			products: [],
		}),
		components: {
			Header,
		},
		created() {
			this.products = JSON.parse(products.value).products
		},
	}
</script>
