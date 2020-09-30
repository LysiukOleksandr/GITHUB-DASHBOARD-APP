<template>
  <v-container>
    <v-card
      class="d-flex flex-column flex-sm-row pb-10"
      min-height="400px " >
      <v-responsive>
        <v-img
          width="200px"
          height="200px"
          class="rounded-circle mx-auto mt-5 pl-2"
          :src="details.avatar"/>
      </v-responsive>
      <v-layout class=" d-flex flex-column">
        <v-card-title class="pt-4 pb-0">
          {{details.name}}
        </v-card-title>
        <v-card-text class="pt-2 pb-0">
          Id: {{details.id}}
        </v-card-text>
        <v-card-text class="pt-2 pb-0">
          <v-icon>mdi-star</v-icon>
          {{details.stars}}
        </v-card-text>
        <v-card-text class="pt-4 pb-0">
          <v-icon>mdi-calendar-clock</v-icon> {{details.updated}}
        </v-card-text>
        <v-card-text class="mt-2 pb-0">
          Language: {{details.language}}
        </v-card-text>
        <v-card-text class="pt-4 pb-0">
          {{details.description}}
        </v-card-text>
        <v-card-text class="pt-4 pb-0">
          Status: {{details.status}}
        </v-card-text>
        <v-btn
          class="mt-5 ml-5"
          color="indigo accent-1"
          width="200px"
          :href="details.github">
          Github profile
        </v-btn>
        <v-btn
          class="mt-5 ml-5"
          color="indigo accent-1"
          width="200px"
          router
          to="/">
          Go back
        </v-btn>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    details () {
      return this.$store.state.repositoryDetails
    }
  },
  created () {
    const searchValue = `${this.$route.params.owner}/${this.$route.params.repo}`
    this.$store.dispatch('fetchRepositoryDetails', searchValue)
  }
}
</script>

<style>

</style>
