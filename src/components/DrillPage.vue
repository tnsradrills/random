<script setup>
  import { onMounted, ref } from 'vue';
  import { userSelectionStore } from '@/stores/userSelection';
  const user_store = userSelectionStore();
  const show_explaination = ref(false);
  const drills = ref([
    {
      title: 'Bill Drill',
      joke: 'Where speed meets precision, and ego meets reality.',
      dry: true,
      live: true,
      moving: false,
      shot_timer_rec: true,
      categories: [
        'accuracy',
        'recoil_control',
        'draw_speed',
        'time_pressure',
        'draw_speed',
      ],
      recommended_distances: [5, 7, 10],
      recommended_targets: ['IPSC', 'USPSA'],
      description: 'For live fire, you will need 6 rounds in your magazine. When ready to begin, holster or assume the low-ready position. On the start signal, draw and place 6 rounds into the A zone (or -0 zone) of your target as quickly and accurately as possible.',
      recommended_par: [
        {type: 'Standard', par: '3.5 seconds',},
        {type: 'Challenging', par: '2.5 or fewer seconds'}
      ]
    },
    {
      title: '10-10-10',
      joke: '10 yards, 10 shots, 10 seconds.',
      dry: true,
      live: true,
      moving: false,
      shot_timer_rec: true,
      categories: [
        'accuracy',
        'recoil_control',
        'draw_speed',
        'time_pressure'
      ],
      recommended_distances: [10],
      recommended_targets: ['B8'],
      description: 'For live fire, you will need 10 rounds in your magazine. When ready to begin, holster or assume the low-ready position. On the start signal, draw and place 10 shots on the target. All shots need to occur inside the 10 second time limit. Score hits as shown on the target.',
      recommended_par: [
        {type: 'Standard', par: 'Score 80 points or better',},
        {type: 'Challenging', par: 'Score 100 points'}
      ]
    },
    {
      title: 'Trigger Control At Speed',
      joke: 'Full throttle on the trigger, zero wobble on the sights.',
      dry: true,
      live: false,
      moving: false,
      shot_timer_rec: false,
      categories: [
        'accuracy',
        'time_pressure',
        'trigger_control'
      ],
      recommended_distances: ['Any'],
      recommended_targets: ['Any'],
      description: 'Using a shot timer or another signaling method, with no par time, pull the trigger as quickly as possible at the signal. The goal of this drill is working on getting a smooth trigger pull while still maintaining speed. To further isolate the trigger control, do not incorporate a target and focus on your sight alignment; try not to affect your sight alignment while still pulling the trigger as fast as possible.',
      recommended_par: []
    },
    {
      title: 'One-Reload-One',
      joke: 'Reload fast, hit faster.',
      dry: true,
      live: true,
      moving: false,
      shot_timer_rec: true,
      categories: [
        'time_pressure',
        'reloads',
        'draw_speed'
      ],
      recommended_distances: [5, 7, 10, 15],
      recommended_targets: ['USPSA', 'IDPA'],
      description: 'You will need a two magazines for this drill. For live fire, load both magazines with 1 round each. For dry fire, load 1 magazine with 1 dummy round if you intend to use them, then insert the other magazine and lock the action open. When ready to begin, holster or assume the low-ready position. On the start signal, draw and place 1 round into the A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then place another round into the same target zone.',
      recommended_par: [
        {type: 'Standard', par: '4.5 seconds',},
        {type: 'Challenging', par: '3.25 or fewer seconds'}
      ]
    },
    {
      title: 'Double-Reload-Double',
      joke: 'Double down.',
      dry: true,
      live: true,
      moving: false,
      shot_timer_rec: true,
      categories: [
        'time_pressure',
        'reloads',
        'recoil_control',
        'draw_speed',
      ],
      recommended_distances: [5, 7, 10, 15],
      recommended_targets: ['USPSA', 'IDPA'],
      description: 'You will need a two magazines for this drill. For live fire, load both magazines with 2 rounds each. For dry fire, load 1 magazine with 1 dummy round if you intend to use them, then insert the other magazine and lock the action open. When ready to begin, holster or assume the low-ready position. On the start signal, draw and place 1 round into the A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then place another round into the same target zone.',
      recommended_par: [
        {type: 'Standard', par: '4.75 seconds',},
        {type: 'Challenging', par: '3.25 or fewer seconds'}
      ]
    },
  ]);

  const selected_drill = ref(null)

  const select_drill = () => {
    // Filter drills based on user selections
    const possible_drills = drills.value.filter(d => {
      // Check dry vs live compatibility
      const isTypeCompatible = (user_store.selections.dry_vs_live === 'dry' && d.dry) || (user_store.selections.dry_vs_live === 'live' && d.live);

      // Check movement requirement compatibility
      const isMovementCompatible = user_store.selections.move_vs_static === 'move_allowed' || (user_store.selections.move_vs_static === 'static' && d.moving == false);

      // Check category compatibility
      const isCategoryCompatible = user_store.selections.category_selections.some(value => d.categories.includes(value));

      // Return true if all conditions are met
      console.log(d);
      console.log(isTypeCompatible);
      console.log(isMovementCompatible);
      console.log(isCategoryCompatible);
      return isTypeCompatible && isMovementCompatible && isCategoryCompatible;
    });

    // Select a random object if any match, otherwise handle no matches
    if (possible_drills.length > 0) {
      const random_object = possible_drills[Math.floor(Math.random() * possible_drills.length)];
      selected_drill.value = random_object;
    } else {
      selected_drill.value = null; // or handle as needed if no matches are found
    }
  };


  onMounted(() => {
    if (user_store.step_counter == 5) {
      select_drill();
    }
  })

</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center pb-3">
        <h3 style="font-family:Orbitron">Your drill is:</h3>
      </v-col>
    </v-row>

    <v-row v-if="selected_drill != null">
      <v-col cols="12">
        <v-card>
          <v-card-title style="font-family: Orbitron;">{{selected_drill.title}}</v-card-title>
          <v-card-subtitle>
            {{selected_drill.joke}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              class="border"
              color="primary"
               @click="show_explaination = !show_explaination"
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
              <v-card-text class="text-subtitle-1">
                {{selected_drill.description}}
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <v-row>
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Distances
                  </v-col>
                  <v-col v-for="(t, i) in selected_drill.recommended_distances" :key="i" cols="12" class="text-subtitle-2 py-1">
                    <span v-if="t =='Any'">{{t}}</span>
                    <span v-else>{{t + " yards"}}</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Target Styles
                  </v-col>
                  <v-col v-for="(t, i) in selected_drill.recommended_targets" :key="i" cols="12" class="text-subtitle-2 py-1">
                    {{t}}
                  </v-col>
                </v-row>
                <v-row v-if="selected_drill.shot_timer_rec">
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Par Times
                  </v-col>
                  <v-col v-for="(t, i) in selected_drill.recommended_par" :key="i" cols="12" class="text-subtitle-2 py-0">
                    {{t.type + ": " + t.par}}
                  </v-col>
                </v-row>
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
