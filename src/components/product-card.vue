<template>
  <v-card class="mx-auto" :max-width="maxWidth">
    <v-img :src="product.pic" :height="height"></v-img>
    <v-card-title>
      {{ product.title }}
    </v-card-title>
    <v-card-subtitle class="text-left">
      {{ product.subtitle }}
    </v-card-subtitle>

    <slot name="description"></slot>
    <slot name="action-button"></slot>
  </v-card>
</template>

<script>
export default {
  props: ['product', 'maxWidth', 'height'],
}
</script>
