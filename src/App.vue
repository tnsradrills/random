<script setup>
  import { userSelectionStore } from '@/stores/userSelection';
  import StepOne from './components/StepOne.vue';

  const user_store = userSelectionStore();

</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-img contain height="75px" src="'../../../images/chapter_logo.png"></v-img>
    </v-row>

    <StepOne v-if="user_store.step_counter == 1"/>

    <v-row class="mt-10" justify="center">
      <v-btn
        fab
        icon
        elevation="5"
        @click="user_store.attempt_next_step()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
    
  </v-container>
</template>


<style>

</style>
