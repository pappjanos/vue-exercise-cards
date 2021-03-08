<template>
  <div class="home">
    <h1 class="text-center mt-10">Product Catalog</h1>
    <v-container class="mt-10 mb-10">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(product, i) in parsedProducts"
          :key="i"
          class="text-center"
        >
          <product-card :product="product" :maxWidth="'344'" :height="'200'">
            <template v-slot:action-button>
              <div class="d-flex justify-end">
                <v-btn
                  color="red"
                  text
                  @click="$router.push(`/details/${product.id}`)"
                >
                  Show More
                </v-btn>
              </div>
            </template>
          </product-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { products } from '@/assets/exercise'

export default {
  name: 'Home',
  data: () => ({
    parsedProducts: JSON.parse(products.value).products,
  }),
}
</script>
