<template>
  <div class="joke">
    <joke-of-the-day
      :joke="joke"
      :picURL="url"
      :loading="loading"
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
  }),
  methods: {
    async getARandomJoke() {
      this.loading = true
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const extracted = await response.json()
      console.log(extracted)
      this.joke = extracted.value
      this.url = extracted.icon_url
      this.loading = false
    },
  },
  mounted() {
    this.getARandomJoke()
  },
}
</script>
