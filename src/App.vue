<template>
  <v-app>
    <toolbar/>
    <v-main>
      <v-container>
        <router-view/>
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
