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
	import axios from 'axios'
	export default {
		name: 'Joke',
		data: () => ({
			joke: Object,
			searchText: '',
		}),
		methods: {
			onSubmit() {
				if (this.searchText) {
					axios
						.get(
							`https://api.chucknorris.io/jokes/search?query=${this.searchText}`
						)
						.then((response) => {
							if (response.data.total === 0) {
								this.joke.value = 'There is no any joke with this word'
							} else {
								this.joke = response.data.result[0]
							}
						})
						.catch((e) => {
							this.errors.push(e)
						})
					this.searchText = ''
				}
			},
		},
		created() {
			axios
				.get(`https://api.chucknorris.io/jokes/random`)
				.then((response) => {
					this.joke = response.data
				})
				.catch((e) => {
					this.errors.push(e)
				})
		},
	}
</script>

<style>
	.joke {
		text-align: center;
	}
</style>