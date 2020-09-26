<template>
   <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md4 lg3 >
                 <v-card flat class="text-xs-center ma-3 pb-1" raised elevation="5" >
                   <v-responsive class="pt-4s">
                  <v-img src='https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png'></v-img>
                   </v-responsive>
                   <v-card-title>Name repository</v-card-title>
                       <v-card-text>
                         <v-icon>mdi-star</v-icon>
                         900
                        </v-card-text>
                        <v-card-text>
                          <v-icon>mdi-calendar-clock</v-icon> 26-09-2020
                        </v-card-text>
                        <v-card-actions class="d-flex flex-row mb-6 justify-space-around"  >
                          <v-btn width="40%">
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
  name: 'cards'
}
</script>
