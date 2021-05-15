<template>
  <v-container>
    <div v-if="loading" class="d-flex justify-center mt-10">
      <v-skeleton-loader
        width="400"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
    </div>
    <v-row v-if="!loading" class="text-center mb-10">
      <v-col cols="12">
        <div class="d-flex justify-center">
          <v-img :src="picURL" max-width="50" class="mb-2"></v-img>
        </div>
        <div class="text-h4 mb-2">Joke of the day:</div>
      </v-col>
      <v-col cols="12" class="text-center">
        {{ joke }}
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-10">
      <v-card width="450">
        <div class="d-flex flex-column align-center justify-center">
          <v-card-title>Search for a joke</v-card-title>
          <v-text-field
            outlined
            dense
            label="Type something to search for"
            placeholder="Type..."
            v-model="search"
            @keyup.enter="emitSearch"
          ></v-text-field>
          <v-btn
            small
            dark
            color="green"
            class="align-self-end ma-2"
            @click="emitSearch"
            >Make me laugh</v-btn
          >
          <div v-if="searchedJoke" class="pa-2 text-center text-subtitle-2">
            {{ searchedJoke }}
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['joke', 'picURL', 'loading', 'searchedJoke'],
  data: () => ({
    search: null,
  }),
  methods: {
    emitSearch() {
      if (this.search == '') this.search = null
      this.$emit('click', this.search)
    },
  },
}
</script>
