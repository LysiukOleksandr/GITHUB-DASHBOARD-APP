<template>
<v-container >
  <div class="empty" v-if='repositories.length === 0'>Nothing here</div>
   <v-layout row wrap justify-center v-else>
              <v-flex xs12 sm6 md4 lg3 v-for="(repository,index) in repositories"  :key='index'>
                 <v-card flat class="text-xs-center ma-3 pb-1" raised elevation="5" >
                   <v-responsive class="pt-4s">
                  <v-img :src='repository.avatar'></v-img>

                   </v-responsive>
                   <v-card-title class="card-title">{{repository.name}}</v-card-title>
                       <v-card-text>
                         <v-icon>mdi-star</v-icon>
                          {{repository.stars}}
                        </v-card-text>
                        <v-card-text>
                          <v-icon>mdi-calendar-clock</v-icon> {{repository.updated}}
                        </v-card-text>
                        <v-card-actions class="d-flex flex-row mb-6 justify-space-around"  >
                          <v-btn width="40%" :href='repository.github'>
                            <v-icon >mdi-github</v-icon>
                          </v-btn>
                          <v-btn width="40%">
                            Details
                          </v-btn>
                        </v-card-actions>
              </v-card>
              </v-flex>
            </v-layout>
            </v-container>
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

.empty{
  text-align:center;
}
</style>
