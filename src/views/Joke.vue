<template>
	<div class="joke">
		<v-img class="mx-auto" :src="joke.icon_url" :width="50"></v-img>
		<h1>Joke of the day:</h1>
		<div class="pa-5">{{ joke.value }}</div>
		<v-container>
			<v-row justify="center">
				<v-col class="d-flex child-flex" cols="12" sm="6" md="4">
					<v-card class="mx-auto">
						<v-form @submit.prevent="onSubmit">
							<v-container>
								<v-text-field
									v-model="searchText"
									label="Type something to see a joke"
									required
								></v-text-field>
								<v-col class="text-right">
									<v-btn class="white--text" color="green" type="submit"
										>Make me Laugh</v-btn
									>
								</v-col>
							</v-container>
						</v-form>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'Joke',
		data: () => ({
			searchText: '',
		}),
		computed: mapGetters(['joke']),
		methods: {
			...mapActions(['fetchJoke', 'searchJoke']),
			onSubmit() {
				if (this.searchText) {
					this.searchJoke(this.searchText)
					this.searchText = ''
				}
			},
		},
		created() {
			this.fetchJoke()
		},
	}
</script>

<style>
	.joke {
		text-align: center;
	}
</style>