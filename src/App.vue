<template>
	<v-app>
		<Header title="Vue exercise" />

		<v-main>
			<div class="mt-5 mb-5">
				<router-view></router-view>
			</div>
		</v-main>
	</v-app>
</template>

<script>
	import Header from './components/Header.vue'

	export default {
		name: 'App',
		components: {
			Header,
		},
	}
</script>
