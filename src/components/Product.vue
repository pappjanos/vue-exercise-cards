<template>
	<v-card class="mx-auto" :max-width="maxwidth">
		<v-img :src="product.pic" :height="height"></v-img>

		<v-card-title> {{ product.title }} </v-card-title>

		<v-card-subtitle class="text-left">
			{{ product.subtitle }}
		</v-card-subtitle>
		<slot name="description"></slot>

		<v-card-actions>
			<v-spacer></v-spacer>
			<slot name="show-more"> </slot>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'Product',
		props: {
			product: Object,
			maxwidth: String,
			height: String,
		},
	}
</script>