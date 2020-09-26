<template>
  <div class="home">
    <v-container >
     <search-field></search-field>
          <div class="cards">
           <cards></cards>
          </div>
        </v-container>
  </div>
</template>
<script>
import searchField from '../components/search-field'
import cards from '../components/cards'
export default {
  name: 'Home',
  components: {
    'search-field': searchField,
    cards
  }
}
</script>
