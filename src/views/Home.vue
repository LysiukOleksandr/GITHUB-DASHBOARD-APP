<template>
  <div class="home">
    <v-container >
      <search-field/>
      <div class="cards">
        <cards/>
      </div>
      <div class="pagination">
        <pagination/>
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
