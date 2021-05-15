<template>
  <div class="joke">
    <joke-of-the-day
      :joke="joke"
      :searchedJoke="searchedJoke"
      :picURL="url"
      :loading="loading"
      @click="searchForJoke"
    ></joke-of-the-day>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  data: () => ({
    joke: null,
    url: null,
    loading: null,
    searchedJoke: null,
  }),
  methods: {
    async getARandomJoke() {
      this.loading = true
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const extracted = await response.json()
      this.joke = extracted.value
      this.url = extracted.icon_url
      this.loading = false
    },
    async searchForJoke(value) {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${value}`
      )
      const extracted = await response.json()
      if (extracted.total == 0) {
        this.searchedJoke =
          "There is no joke for this search regarding Chuck Norris. It means this word probably doesn't exist."
      } else {
        this.searchedJoke = extracted.result[0].value
      }
    },
  },
  mounted() {
    this.getARandomJoke()
  },
}
</script>
