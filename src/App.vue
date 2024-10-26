<script setup>
  import { userSelectionStore } from '@/stores/userSelection';
  import StepOne from './components/StepOne.vue';
  import StepTwo from './components/StepTwo.vue';
  import StepThree from './components/StepThree.vue';
  import SpinWheel from "./components/SpinWheel.vue";
  import Logo from '../src/assets/images/chapter_logo.png';
  import DrillPage from './components/DrillPage.vue';
  const user_store = userSelectionStore();
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-img contain height="75px" :src="Logo"></v-img>
    </v-row>

    <div v-if="user_store.step_counter <= 3">
      <v-slide-x-transition group hide-on-leave>
        <StepOne v-if="user_store.step_counter == 1" :key="1"/>
        <StepTwo v-if="user_store.step_counter == 2" :key="2"/>
        <StepThree v-if="user_store.step_counter == 3" :key="3"/>
      </v-slide-x-transition>
    </div>

    <div v-if="user_store.step_counter > 3">
      <v-scale-transition group mode="out-in">
        <SpinWheel :key="1" v-if="user_store.step_counter == 4"/>
        <DrillPage :key="2" v-if="user_store.step_counter == 5"/>
      </v-scale-transition>
    </div>

    <v-row class="mt-10" justify="center">
      <v-btn
        fab
        icon
        elevation="5"
        @click="user_store.step_counter -= 1"
        class="mr-5"
        v-if="user_store.step_counter > 1 && user_store.step_counter < 4"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        fab
        icon
        elevation="5"
        @click="user_store.attempt_next_step()"
        v-if="user_store.step_counter < 5"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>

      <v-btn
        fab
        icon
        elevation="5"
        @click="user_store.reset_all()"
        v-if="user_store.step_counter == 5"
        class="mb-10"
      >
        <v-icon>mdi-restart</v-icon>
      </v-btn>
    </v-row>
    
  </v-container>
</template>


<style>

</style>
