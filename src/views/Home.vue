<template>
  <div class="home">
    <v-container >
     <search-field></search-field>
          <div class="cards">
           <cards></cards>
          </div>
          <div class="pagination">
            <pagination></pagination>
          </div>
        </v-container>
  </div>
</template>
<script>
import searchField from '../components/search-field'
import cards from '../components/cards'
import pagination from '../components/pagination'
export default {
  name: 'Home',
  components: {
    'search-field': searchField,
    cards,
    pagination
  }
}
</script>
