<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text>
        <h1 class="pointer headline" @click="$router.push('/')">
          Vue Exercise
        </h1>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
