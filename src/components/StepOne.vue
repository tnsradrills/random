<script setup>
import { ref } from "vue";
import { userSelectionStore } from "@/stores/userSelection";
const user_store = userSelectionStore();
const practice_types = ref([
  {
    text: "Dry Fire",
    value: "dry",
  },
  {
    text: "Live Fire",
    value: "live",
  },
]);

const set_type = (type) => {
  user_store.selections.dry_vs_live = type;
};
</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center">
        <h3 style="font-family: Orbitron">
          What kind of training are you doing today?
        </h3>
      </v-col>
      <v-col
        cols="12"
        class="text-center"
        v-for="p in practice_types"
        :key="p.value"
      >
        <v-btn
          flat
          outlined
          rounded
          :class="user_store.selections.dry_vs_live == p.value ? '' : 'border'"
          :color="
            user_store.selections.dry_vs_live == p.value ? 'primary' : null
          "
          @click="set_type(p.value)"
          :ripple="false"
        >
          {{ p.text }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style></style>
