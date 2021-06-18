<template>
	<v-container>
		<v-row>
			<v-col
				class="d-flex child-flex"
				cols="12"
				sm="6"
				md="4"
				v-for="product in products"
				:key="product.id"
			>
				<Product :product="product" maxwidth="344px" height="200px">
					<template v-slot:show-more>
						<v-btn
							color="red"
							text
							@click="
								$router
									.push({ name: 'ProductDetails', params: { id: product.id } })
									.catch(() => {})
							"
						>
							Show more
						</v-btn>
					</template>
				</Product>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Product from './Product'
	export default {
		name: 'ProductList',
		props: {
			products: Array,
		},
		components: {
			Product,
		},
	}
</script>