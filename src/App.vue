<template>
  <v-app>
<toolbar></toolbar>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
  </v-app>
</template>
<script>
import toolbar from './components/toolbar'
export default {
  name: 'App',
  components: {
    toolbar
  }
}
</script>
