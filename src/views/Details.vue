<template>
  <v-container class="mt-10 mb-10">
    <v-row>
      <v-col>
        <product-card :product="product" :height="'400'">
          <template v-slot:description>
            <v-card-text class="text--primary">
              <div class="mt-5 mb-5">
                {{ product.description }}
              </div>
            </v-card-text>
          </template>
        </product-card>
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
