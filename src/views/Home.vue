<template>
  <div class="home">
    <v-container >
     <search-field></search-field>
        </v-container>
  </div>
</template>
<script>
import searchField from '../components/search-field'
export default {
  name: 'Home',
  components: {
    'search-field': searchField
  }
}
</script>
