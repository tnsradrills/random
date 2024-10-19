<script setup>
  import {ref} from 'vue';
  import { userSelectionStore } from '@/stores/userSelection';
  const user_store = userSelectionStore();
  const location_types = ref([
    {
      text: 'Yes, I can move',
      value: 'move_allowed'
    },
    {
      text: "No, movement is restricted",
      value: 'static'
    }
  ]);

  const set_type = (type) => {
    user_store.selections.move_vs_static = type;
  }
</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center">
        <h3 style="font-family:Orbitron">Are you able to move around in your current environment?</h3>
      </v-col>
      <v-col cols="12" class="text-center" v-for="(l) in location_types" :key="l.value">
        <v-btn 
          flat
          outlined
          rounded
          :class="user_store.selections.move_vs_static == l.value ? '' : 'border'"
          :color="user_store.selections.move_vs_static == l.value ? 'primary' : null"
          @click="set_type(l.value)"
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
