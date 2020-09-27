<template>
   <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md4 lg3 v-for="(repository,index) in repositories"  :key='index'>
                 <v-card flat class="text-xs-center ma-3 pb-1" raised elevation="5" >
                   <v-responsive class="pt-4s">
                  <v-img :src='repository.owner.avatar_url ? repository.owner.avatar_url :"https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"'></v-img>
                   </v-responsive>
                   <v-card-title class="card-title">{{repository.full_name}}</v-card-title>
                       <v-card-text>
                         <v-icon>mdi-star {{repository.stargazers_count}}</v-icon>
                         900
                        </v-card-text>
                        <v-card-text>
                          <v-icon>mdi-calendar-clock</v-icon> {{repository.updated_at}}
                        </v-card-text>
                        <v-card-actions class="d-flex flex-row mb-6 justify-space-around"  >
                          <v-btn width="40%" :href='repository.html_url'>
                            <v-icon >mdi-github</v-icon>
                          </v-btn>
                          <v-btn width="40%">
                            Details
                          </v-btn>
                        </v-card-actions>
              </v-card>
              </v-flex>
            </v-layout>
</template>

<script>
export default {
  name: 'cards',
  computed: {
    repositories () {
      return this.$store.state.repositories
    }
  }
}
</script>

<style>
.card-title{
  white-space: nowrap;
  word-break: normal;
  overflow:hidden;
  text-overflow: ellipsis;
}
</style>
