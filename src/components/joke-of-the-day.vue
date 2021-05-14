<template>
  <v-container>
    <div v-if="loading" class="d-flex justify-center mt-10">
      <v-skeleton-loader
        width="400"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
    </div>
    <v-row v-if="!loading" class="text-center">
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
  </v-container>
</template>

<script>
export default {
  props: ['joke', 'picURL', 'loading'],
}
</script>
