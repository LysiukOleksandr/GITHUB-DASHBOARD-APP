<template>
  <v-container >
    <v-layout >
    <v-timeline align-top dense class="mx-auto">
      <v-timeline-item v-for="(commit,index) in commits" :key=index color="indigo accent-1" >{{commit.message}}</v-timeline-item>
    </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
export default {
name:'timeline',
created(){
  this.$store.dispatch('fetchCommits');
},
computed:{
  commits(){
    return this.$store.state.commits
  }
}
}
</script>
