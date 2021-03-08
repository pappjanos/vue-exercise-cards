<template>
  <v-container class="mt-10 mb-10">
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="400" :src="product.pic">
          </v-img>
          <div>
            <v-card-title>
              {{ product.title }}
            </v-card-title>

            <v-card-subtitle class="text-left">
              {{ product.subtitle }}
            </v-card-subtitle>
          </div>
          <v-card-text class="text--primary">
            <div>
              {{ product.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { products } from '@/assets/exercise'

export default {
  name: 'Details',
  data: () => ({
    parsedProducts: JSON.parse(products.value).products,
  }),
  computed: {
    product() {
      return this.parsedProducts.filter(
        (product) => product.id == this.$route.params.id
      )[0]
    },
  },
}
</script>
