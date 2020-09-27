<template >
   <v-form class="mt-3" @submit.prevent='onSubmit'>
    <v-col class="mx-auto d-flex row" cols="12" sm="8" xl="5" >
          <v-text-field
            v-model='value'
            label="Search"
             solo
          ></v-text-field>
          <v-btn class="mt-1 ml-3" type="submit" color="indigo accent-1" >Search</v-btn>
        </v-col>
  </v-form>
</template>

<script>

export default {
  name: 'search-field',
  data () {
    return {

      value: ''

    }
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('FETCH_REPOSITORIES', this.value)
    }
  }
}
</script>

<style>

</style>
