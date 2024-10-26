<script setup>
  import {ref} from 'vue';
  import { userSelectionStore } from '@/stores/userSelection';
  const user_store = userSelectionStore();
  const category_list = ref([
    {
      text: 'Accuracy',
      value: 'accuracy'
    },
    {
      text: "Recoil Control",
      value: 'recoil_control'
    },
    {
      text: "Draw Speed",
      value: 'draw_speed'
    },
    {
      text: "Reloads",
      value: 'reloads'
    },
    {
      text: "Target Transitions",
      value: 'transitions'
    },
    {
      text: "Time Pressure",
      value: 'time_pressure'
    },
    {
      text: "Trigger Control",
      value: 'trigger_control'
    }
  ]);

  const push_or_drop_selection = (type) => {
    if (user_store.selections.category_selections.includes(type)) {
      const index = user_store.selections.category_selections.indexOf(type);
      user_store.selections.category_selections.splice(index, 1);
    } else {
      user_store.selections.category_selections.push(type);
    }
  }
</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center pb-3">
        <h3 style="font-family:Orbitron">Select some drill categories to include:</h3>
      </v-col>
      <v-col cols="12" class="text-center py-1" v-for="(l) in category_list" :key="l.value">
        <v-btn
          flat
          outlined
          rounded
          :class="user_store.selections.category_selections.includes(l.value) ? '' : 'border'"
          :color="user_store.selections.category_selections.includes(l.value) ? 'primary' : ''"
          @click="push_or_drop_selection(l.value)"
          :ripple="false"
        >
          {{l.text}}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<style>

</style>
