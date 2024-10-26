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
      recommended_distance: 7,
      recommended_targets: ['IPSC', 'USPSA'],
      description: 'Begin with your firearm holstered or in the low-ready position if drawing from a holster is not allowed. On the start signal, draw and place 6 rounds into the A zone (or -0 zone) of your target as quickly and accurately as possible.',
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
      recommended_distance: 10,
      recommended_targets: ['B8'],
      description: 'Begin with your firearm holstered or in the low-ready position if drawing from a holster is not allowed. On the start signal, draw and place 10 shots on the target. All shots should occur inside the 10 second time limit. Score hits as shown on the target.',
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
      recommended_distance: 0,
      recommended_targets: ['Any'],
      description: 'Trigger Control at Speed is an isolation drill working on getting a smooth trigger pull while still maintaining speed. Using a shot timer or another signaling method, with no par time, pull the trigger as quickly as possible at the signal. To further isolate the trigger control, do not incorporate a target and focus on your sight alignment; try not to affect your sight alignment while still pulling the trigger as fast as possible.',
      recommended_par: []
    },
  ]);

  const selected_drill = ref(null)

  const select_drill = () => {
    const random_object = drills.value[Math.floor(Math.random() * 3)];
    selected_drill.value = random_object;
  }


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
                    Recommended Distance
                  </v-col>
                  <v-col cols="12" class="text-subtitle-2 pt-1" v-if="selected_drill.recommended_distance != 0">
                    {{selected_drill.recommended_distance + " " + "yards"}}
                  </v-col>
                  <v-col cols="12" class="text-subtitle-2 pt-1" v-else>
                    Any
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
