import { defineStore } from 'pinia';
import {ref, reactive} from 'vue';

export const userSelectionStore = defineStore('userSelection', () => {
  const selections = reactive({
    dry_vs_live: null,
    move_vs_static: null,
    category_selections: [],
  });
  const step_counter = ref(1);

  const reset_all = () => {
    for (let i in selections) {
      i != 'category_selections' ? selections[i] = null : selections[i] = [];
    }
    step_counter.value = 1;
  };

  const attempt_next_step = () => {
    switch (step_counter.value) {
      case 1: 
        if (selections.dry_vs_live != null) {
          step_counter.value = 2;
        }
        break;
      case 2: 
        if (selections.move_vs_static != null) {
          step_counter.value = 3;
          console.log(123);
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