<script setup>
  import {ref} from 'vue';
  // import { userSelectionStore } from '@/stores/userSelection';
  // const user_store = userSelectionStore();
  const show_explaination = ref(false);

</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center pb-3">
        <h3 style="font-family:Orbitron">Your drill is:</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Bill Drill</v-card-title>
          <v-card-subtitle>
            Small statement on drill here?
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="primary"
              text
            >
              Details
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show_explaination = !show_explaination"
            >
              <v-icon>{{ show_explaination ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show_explaination">
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<style>

</style>
