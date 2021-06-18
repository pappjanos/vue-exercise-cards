<template>
	<v-app-bar app color="primary" dark>
		<v-btn text>
			<h1
				class="pointer headline"
				@click="$router.push({ name: 'Home' }).catch(() => {})"
			>
				{{ title }}
			</h1>
		</v-btn>
		<v-spacer></v-spacer>
		<v-btn text>
			<v-img
				class="joke-icon"
				src="joke.png"
				@click="$router.push({ name: 'Joke' }).catch(() => {})"
			/>
		</v-btn>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			title: String,
		},
	}
</script>

<style scoped>
	.joke-icon {
		width: 30px;
	}
</style>