<template>
  <v-container>
      <v-card class="d-flex flex-column flex-sm-row pb-10" min-height="400px" >
          <v-responsive>
        <v-img  max-width="200px" max-height="200px" class="rounded-circle mx-auto mt-5 pl-3" src="https://avatars1.githubusercontent.com/u/29249406?s=460&u=f730e38902b82734907e5d535cc3e5335988d5fe&v=4"></v-img>
            </v-responsive>
            <v-layout class=" d-flex flex-column">
            <v-card-title class="pt-4 pb-0">person name/rep name</v-card-title>
             <v-card-text class="pt-2 pb-0">
              <v-icon>mdi-star</v-icon>
              900
             </v-card-text>
             <v-card-text class="pt-4 pb-0">
              <v-icon>mdi-calendar-clock</v-icon> 26-09-2020
                </v-card-text>
                <v-card-text class="mt-2 pb-0">
                    Languages in rep
                </v-card-text>
                 <v-card-text class="pt-4 pb-0">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nobis saepe asperiores esse repudiandae, animi, et quaerat molestias iure minus quo? Rem sed odit labore aliquid quibusdam fuga quasi quam?
                </v-card-text>
                 <v-card-text class="pt-4 pb-0">
                    10 activities
                </v-card-text>
                 <v-btn class="mt-5 ml-5" color="indigo accent-1" width="200px">
                     Github profile
                 </v-btn>
                 <v-btn class="mt-5 ml-5" color="indigo accent-1" width="200px">
                     Go back
                 </v-btn>
            </v-layout>
      </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>

</style>
