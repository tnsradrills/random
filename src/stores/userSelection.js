import { defineStore } from 'pinia';
import {ref, reactive} from 'vue';

export const userSelectionStore = defineStore('userSelection', () => {
  const selections = reactive({
    dry_vs_live: null,
    move_vs_static: null,
  });
  const step_counter = ref(1);

  const reset_all = () => {
    for (let i in selections) {
      selections[i] = null;
    }
    step_counter.value = 1;
  };

  const attempt_next_step = () => {
    console.log(step_counter.value);
    switch (step_counter.value) {
      case 1: 
        if (selections.dry_vs_live != null) {
          step_counter.value = 2;
        }
        break;
      default:
        break;
    }
  }

  return {
    selections,
    step_counter,
    reset_all,
    attempt_next_step,
  }
});