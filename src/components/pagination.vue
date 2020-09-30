<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-show="pagination.totalPages > 1"
              v-model="currentPage"
              :length="pagination.totalPages"
              :total-visible="7"
              @input="changePage"
            />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    changePage () {
      this.$store.dispatch('fetchRepositories', [this.pagination.searchValue, this.currentPage])
    }

  },
  computed: {
    ...mapGetters([
      'pagination'
    ])
  }
}
</script>
