<template>
  <div class="about">
    <v-container class="d-flex flex-column align-center">
      <div class="title">Oleksandr Lysiuk</div>
      <div class="mt-5">Front-end developer</div>
       <div class="mt-5">Email: olysiuk01@gmail.com</div>
       <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
         class="mt-5"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          href="https://github.com/LysiukOleksandr"
        >Github</v-btn>
      </template>
      <span>My github profile</span>
    </v-tooltip>

    </v-container>
  </div>
</template>
