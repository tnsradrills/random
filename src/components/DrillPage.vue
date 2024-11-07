<script setup>
import { onMounted, ref } from "vue";
import { userSelectionStore } from "@/stores/userSelection";
import BillDrillImg from "@/assets/images/bill_drill.jpg";
import ElPresImg from "@/assets/images/el_pres.jpg";
import TenTenTen from "@/assets/images/10_10_10.jpg";
import NinetyDeg from "@/assets/images/90_deg_transitions.png";
import FailureToStop from "@/assets/images/failure_to_stop.jpg";
import Malf1 from "@/assets/images/malfunction_1.jpg";
import Malf2 from "@/assets/images/malfunction_2.jpg";

const user_store = userSelectionStore();
const drills = ref([
  {
    title: "Bill Drill",
    joke: "Where speed meets precision, and ego meets reality.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: true,
    categories: ["recoil_control", "accuracy"],
    recommended_distances: [5, 7, 10],
    recommended_targets: ["IPSC", "USPSA"],
    dry_description: `When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and and simulate firing 6 rounds into the largest A zone (or -0 zone) of your target as quickly and accurately as possible.`,
    live_description: `You will need at least 6 rounds in your magazine.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and fire 6 rounds into the largest A zone (or -0 zone) of your target as quickly and accurately as possible.`,
    recommended_par: [
      { type: "Standard", par: "3.5 seconds" },
      { type: "Challenging", par: "2.5 or fewer seconds" },
    ],
    image: BillDrillImg,
  },
  {
    title: "10-10-10",
    joke: "10 yards, 10 shots, 10 seconds.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: true,
    categories: ["accuracy", "recoil_control"],
    recommended_distances: [10],
    recommended_targets: ["B8"],
    dry_description: `When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and simulate firing 10 rounds into the target.
        All shots need to occur inside the 10 second time limit.
        Focus on maintaining your sight picture and keeping it in the black rings of the target`,
    live_description: `You will need at least 10 rounds in your magazine.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and fire 10 rounds into the target.
        All shots need to occur inside the 10 second time limit. Score hits as shown on the target.`,
    recommended_par: [
      { type: "Standard", par: "Score 80 points or better" },
      { type: "Challenging", par: "Score 100 points" },
    ],
    image: TenTenTen,
  },
  {
    title: "Trigger Control At Speed",
    joke: "Full throttle on the trigger, zero wobble on the sights.",
    dry: true,
    live: false,
    moving: false,
    shot_timer_rec: false,
    categories: ["accuracy", "trigger_control"],
    recommended_distances: ["Any"],
    recommended_targets: ["Any"],
    dry_description: `Using a shot timer or another signaling method, with no par time, pull the trigger as quickly as possible at the signal.
        The goal of this drill is working on getting a smooth trigger pull while still maintaining speed.
        To further isolate the trigger control, do not incorporate a target and focus on your sight alignment;
        try not to affect your sight alignment at all while still pulling the trigger as fast as possible.`,
    recommended_par: [],
    image: null,
  },
  {
    title: "One-Reload-One",
    joke: "Reload fast, hit faster.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: true,
    categories: ["reloads"],
    recommended_distances: [5, 7, 10, 15],
    recommended_targets: ["USPSA", "IDPA"],
    dry_description: `You will need 2 magazines for this drill.
        If you intend to use dummy rounds: load 1 magazine with 1 dummy round, then insert the other magazine.
        When ready to begin, lock the action open, then holster or assume the low-ready position.
        On the start signal, draw and simulate firing 1 round into the largest A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then simulate firing another round into the same zone of the target.`,
    live_description: `You will need 2 magazines for this drill.
        Load both magazines with 1 round each.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and fire 1 round into the largest A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then fire another round into the same zone of the target.`,
    recommended_par: [
      { type: "Standard", par: "4.5 seconds" },
      { type: "Challenging", par: "3.25 or fewer seconds" },
    ],
    image: null,
  },
  {
    title: "Double-Reload-Double",
    joke: "Double down.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: true,
    categories: ["reloads", "recoil_control"],
    recommended_distances: [5, 7, 10, 15],
    recommended_targets: ["USPSA", "IDPA"],
    dry_description: `You will need 2 magazines for this drill.
        If you intend to use dummy rounds: load 1 magazine with 1 dummy round, then insert the other magazine.
        When ready to begin, lock the action open, then holster or assume the low-ready position.
        On the start signal, draw and simulate firing 2 rounds into the largest A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then simulate firing 2 additional rounds into the same zone of the target.`,
    live_description: `You will need 2 magazines for this drill.
        Load both magazines with 2 rounds each.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and fire 2 rounds into the largest A zone (or -0 zone) of the target, then drop the current magazine and perform a reload, then fire 2 the next two rounds into the same zone of the target.`,
    recommended_par: [
      { type: "Standard", par: "5 seconds" },
      { type: "Challenging", par: "3.75 or fewer seconds" },
    ],
    image: null,
  },
  {
    title: "90 Degree Transitions",
    joke: "Pick a side.",
    dry: true,
    live: true,
    moving: true,
    shot_timer_rec: true,
    categories: ["recoil_control", "transitions"],
    recommended_distances: [5, 7, 10],
    recommended_targets: ["USPSA", "IDPA"],
    dry_description: `You will need 2 targets for this drill.
        Set your targets up so that they require you make an approximate 90 degree turn to engage whichever target you are not facing; using the corner of a room will help accomplish this.
        When ready to begin, assume the low-ready position.
        On the start signal, simulate firing 2 rounds into the largest A zone (or -0 zone) of the first target, then turn and engage the second target in the same manner.
        Alternate which target you engage first on subsequent runs of the drill.`,
    live_description: `You will need 2 targets for this drill.
        Set your targets up so that they require you make an approximate 90 degree turn to engage whichever target you are not facing.
        Ensure that downrange of both targets and the space between them is safe for this drill before proceeding.
        You will need at least 4 rounds in your magazine.
        When ready to begin, assume the low-ready position.
        On the start signal, fire 2 rounds into the largest A zone (or -0 zone) of the first target, then turn and engage the second target in the same manner.
        Alternate which target you engage first on subsequent runs of the drill.`,
    recommended_par: [
      { type: "Standard", par: "2.5 seconds" },
      { type: "Challenging", par: "1.75 or fewer seconds" },
    ],
    image: NinetyDeg,
  },
  {
    title: "El Presidente",
    joke: "Welcome to the presidential fitness test for shooters.",
    dry: true,
    live: true,
    moving: true,
    shot_timer_rec: true,
    categories: ["recoil_control", "transitions", "reloads"],
    recommended_distances: [7, 10],
    recommended_targets: ["USPSA", "IDPA"],
    dry_description: `You will need 3 targets and 2 magazines for this drill.
        Set your targets up so that they are parallel to the firing line and approximately one yard apart from each other.
        When ready to begin, lock th action open, holster, face away from the targets, then raise your hands a few inches above your head (the surrender position).
        On the start signal, turn, draw, and simulate firing 2 rounds into the largest A zone (or -0 zone) of each target, perform a reload, then simulate firing 2 more rounds into the same zone of each target.
        Targets can be engaged from left-to-right or right-to-left at your preference.`,
    live_description: `You will need 3 targets and 2 magazines for this drill.
        Set your targets up so that they are parallel to the firing line and approximately one yard apart from each other.
        Load your magazines so that each one contains 6 rounds.
        When ready to begin, holster, face away from the targets, then raise your hands a few inches above your head (the surrender position).
        On the start signal, turn, draw, and fire 2 rounds into the largest A zone (or -0 zone) of each target, perform a reload, then fire 2 more rounds into the same zone of each target.
        Targets can be engaged from left-to-right or right-to-left at your preference, but all targets must be shot 4 times each at the conclusion of the drill.`,
    recommended_par: [
      { type: "Standard", par: "10 seconds" },
      { type: "Challenging", par: "7 or fewer seconds" },
    ],
    image: ElPresImg,
  },
  {
    title: "Failure To Stop",
    joke: "Sometimes asking nicely doesn't work out.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: false,
    categories: ["recoil_control", "accuracy", "trigger_control"],
    recommended_distances: [7, 10],
    recommended_targets: ["USPSA", "IDPA"],
    dry_description: `Visualization is important for this drill, as part of the goal is to mimic assessing if an immediate threat is still presenting itself.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and simulate firing 2 rounds into the largest A zone (or -0 zone) of the target.
        Assess the target without moving from where you are and, if a threat is still present, simulate firing an additional round into the smallest A / -0 zone of the target.
        The point of the drill is not to fire 3 shots as fast as possible; the last shot should have a noticeable pause before it is placed.`,
    live_description: `You will need at least 3 rounds in your magazine.
        Visualization is important for this drill, as part of the goal is to mimic assessing if an immediate threat is still presenting itself.
        When ready to begin, holster or assume the low-ready position.
        On the start signal, draw and fire 2 rounds into the largest A zone (or -0 zone) of the target.
        Assess the target without moving from where you are and, if a threat is still present, fire an additional round into the smallest A / -0 zone of the target.
        The point of the drill is not to fire 3 shots as fast as possible; the last shot should have a noticeable pause before it is placed.`,
    recommended_par: [],
    image: FailureToStop,
  },
  {
    title: "One Handed Bullseye",
    joke: "Bring out your inner deadeye.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: false,
    categories: ["accuracy", "trigger_control"],
    recommended_distances: ["Any"],
    recommended_targets: ["Any"],
    dry_description: `There is no time pressure with this drill.
        Using only your control hand (the hand pulling the trigger when both hands are otherwise in use), simluate firing a 5 round group in as tight a cluster as you can.
        Take your time and focus on exactly what the trigger on your firearm feels like;
        you want to be able to feel each stage of the trigger pull itself:
        take up, the wall, creep, the break, over travel, and the reset.`,
    live_description: `You will need at least 5 rounds in your magazine.
        There is no time pressure with this drill.
        Using only your control hand (the hand pulling the trigger when both hands are otherwise in use), fire a 5 round group in as tight a cluster as you can.
        Take your time and focus on exactly what the trigger on your firearm feels like;
        you want to be able to feel each stage of the trigger pull itself:
        take up, the wall, creep, the break, over travel, and the reset.`,
    recommended_par: [],
    image: null,
  },
  {
    title: "Support Hand One Handed Bullseye",
    joke: "Support hands need love too.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: false,
    categories: ["accuracy", "trigger_control"],
    recommended_distances: ["Any"],
    recommended_targets: ["Any"],
    dry_description: `There is no time pressure with this drill.
        Using only your support hand (the hand not pulling the trigger when both hands are otherwise in use), simulate firing a 5 round group in as tight a cluster as you can.
        Take your time and focus on exactly what the trigger on your firearm feels like;
        you want to be able to feel each stage of the trigger pull itself:
        take up, the wall, creep, the break, over travel, and the reset.`,
    live_description: `For live fire, you will need at least 5 rounds in your magazine.
        There is no time pressure with this drill.
        Using only your support hand (the hand not pulling the trigger when both hands are otherwise in use), fire a 5 round group in as tight a cluster as you can.
        Take your time and focus on exactly what the trigger on your firearm feels like;
        you want to be able to feel each stage of the trigger pull itself:
        take up, the wall, creep, the break, over travel, and the reset.`,
    recommended_par: [],
    image: null,
  },
  {
    title: "Immediate Action Malfunction Clearing",
    joke: "Hitting the reset button.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: false,
    categories: ["malfunctions"],
    recommended_distances: ["Any"],
    recommended_targets: ["Any"],
    dry_description: `Commonly referred to as "Tap-Rack-Bang", the purpose of this drill is to familiarize yourself with the method to clear the majority of semi-automatic handgun malfunctions.
        There is no time pressure, though a start signal is needed.
        If possible, it is best to utilize dummy rounds while performing this drill; load multiple into the magazine, then insert the magazine into the firearm and chamber a dummy round.
        If dummy rounds are not available, proceed without the use of a magazine for this drill.
        When ready to begin, assume the low-ready position.
        On the start signal, simulate firing a round at your target and experiencing a malfunction.
        To clear the malfunction, aggressively slam your palm into the bottom of the inserted magazine (or magwell if no magazine is in use) to ensure proper seating, then rack the slide aggressively once to extract the current round and chamber a new one, then resume simulating fire on your target.
        Do this multiple times to run the drill.`,
    live_description: `Commonly referred to as "Tap-Rack-Bang", the purpose of this drill is to familiarize yourself with the method to clear the majority of semi-automatic handgun malfunctions.
        There is no time pressure, though a start signal is needed.
        If possible, it is best to utilize dummy rounds while performing this drill; either ask a friend to mix a few dummy rounds in with live rounds, or do your best to mix them yourself without influencing your future actions, then insert the magazine into the firearm and chamber a round.
        If dummy rounds are not available, this drill can still be perform by loading a magazine with one round, inserting it into the firearm, and skipping the chambering of the round.
        When ready to begin, assume the low-ready position.
        On the start signal, fire a round at your target and until you experience a malfunction.
        To clear the malfunction, aggressively slam your palm into the bottom of the inserted magazine to ensure proper seating, then rack the slide aggressively once to extract the current round and chamber a new one, then resume fire on your target.
        Do this multiple times to run the drill.`,
    recommended_par: [],
    image: Malf1,
  },
  {
    title: "Remedial Action Malfunction Clearing",
    joke: "Rip, reload, rack, bang.",
    dry: true,
    live: true,
    moving: false,
    shot_timer_rec: false,
    categories: ["malfunctions", "reloads"],
    recommended_distances: ["Any"],
    recommended_targets: ["Any"],
    dry_description: `The purpose of this drill is to familiarize yourself with the method to clear a double feed malfunction in semi-automatic handguns.
        There is no time pressure, though a start signal is needed.
        Dummy rounds and at least 2 magazines are needed to perform this drill. Lock the slide of the firearm to the rear, insert a dummy round directly into the chamber, then insert a magazine with at least one dummy round in it into the firearm; the other magazine will need at least 1 dummy round in it.
        Gently release the slide such that it attempts to pick up a dummy round from the inserted magazine but fails due to the dummy round already in the chamber.
        When ready to begin, assume the low-ready position.
        On the start signal, simulate firing a round at your target and experiencing a double feed.
        To clear this type of malfunction, first attempt the Immediate Action Malfunction Clearing drill (tap-rack-bang) as you would to try to clear the majority of malfunctions.
        Then, remove the magazine out of the magwell by pressing the magazine release and pulling the magazine out by firmly grabbing its base plate; there will be some resistance.
        Next, rack the slide at least twice to ensure the chamber has been properly cleared.
        Then, reload with a fresh magazine; the magazine that was just removed may be compromised, so you do not want to reinsert it.
        Finally, rack the slide once more to chamber a fresh dummy round so you may resume simulated fire on your target.
        Do this multiple times to run the drill.`,
    live_description: `The purpose of this drill is to familiarize yourself with the method to clear a double feed malfunction in semi-automatic handguns.
        There is no time pressure, though a start signal is needed.
        Dummy rounds and at least 2 magazines are needed to perform this drill. Lock the slide of the firearm to the rear, insert a dummy round directly into the chamber, then insert a magazine with at least one dummy round in it into the firearm; the other magazine will need at least 1 live round in it.
        Gently release the slide such that it attempts to pick up the dummy round from the inserted magazine but fails due to the dummy round already in the chamber.
        When ready to begin, assume the low-ready position.
        On the start signal, attempt to fire a round at your target and experience a double feed.
        To clear this type of malfunction, first attempt the Immediate Action Malfunction Clearing drill (tap-rack-bang) as you would to try to clear the majority of malfunctions.
        Then, remove the magazine out of the magwell by pressing the magazine release and pulling the magazine out by firmly grabbing its base plate; there will be some resistance.
        Next, rack the slide at least twice to ensure the chamber has been properly cleared.
        Then, reload with a fresh magazine; the magazine that was just removed may be compromised, so you do not want to reinsert it.
        Finally, rack the slide once more to chamber a fresh live round so you may resume fire on your target.
        Do this multiple times to run the drill.`,
    recommended_par: [],
    image: Malf2,
  },
]);

const selected_drill = ref(null);

const select_drill = () => {
  // Filter drills based on user selections
  const possible_drills = drills.value.filter((d) => {
    // Check dry vs live compatibility
    const isTypeCompatible =
      (user_store.selections.dry_vs_live === "dry" && d.dry) ||
      (user_store.selections.dry_vs_live === "live" && d.live);

    // Check movement requirement compatibility
    const isMovementCompatible =
      user_store.selections.move_vs_static === "move_allowed" ||
      (user_store.selections.move_vs_static === "static" && d.moving == false);

    // Check category compatibility
    const isCategoryCompatible = user_store.selections.category_selections.some(
      (value) => d.categories.includes(value)
    );

    return isTypeCompatible && isMovementCompatible && isCategoryCompatible;
  });

  // Select a random object
  const random_object =
    possible_drills[Math.floor(Math.random() * possible_drills.length)];
  selected_drill.value = random_object;
};

onMounted(() => {
  if (user_store.step_counter == 5) {
    select_drill();
  }
});
</script>

<template>
  <div>
    <v-row justify="center" class="mt-15 pt-15">
      <v-col cols="12" class="text-center pb-3">
        <h3 style="font-family: Orbitron">Your drill is:</h3>
      </v-col>
    </v-row>

    <v-row v-if="selected_drill != null">
      <v-col cols="12">
        <v-card elevation="5">
          <v-card-title
            style="
              font-family: Orbitron;
              text-overflow: inherit;
              white-space: inherit;
            "
            >{{ selected_drill.title }}</v-card-title
          >
          <v-card-subtitle class="pb-3">
            {{ selected_drill.joke }}
          </v-card-subtitle>

          <v-expand-transition>
            <div v-show="true">
              <v-divider></v-divider>
              <v-card-text
                v-if="user_store.selections.dry_vs_live == 'dry'"
                class="text-subtitle-1"
              >
                {{ selected_drill.dry_description }}
              </v-card-text>
              <v-card-text v-else class="text-subtitle-1">
                {{ selected_drill.live_description }}
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <v-row>
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Distances
                  </v-col>
                  <v-col
                    v-for="(t, i) in selected_drill.recommended_distances"
                    :key="i"
                    cols="12"
                    class="text-subtitle-2 py-0"
                  >
                    <span v-if="t == 'Any'">{{ t }}</span>
                    <span v-else>{{ t + " yards" }}</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Target Styles
                  </v-col>
                  <v-col
                    v-for="(t, i) in selected_drill.recommended_targets"
                    :key="i"
                    cols="12"
                    class="text-subtitle-2 py-0"
                  >
                    {{ t }}
                  </v-col>
                </v-row>
                <v-row v-if="selected_drill.shot_timer_rec">
                  <v-col cols="12" class="text-subtitle-1 pb-0">
                    Recommended Par Times
                  </v-col>
                  <v-col
                    v-for="(t, i) in selected_drill.recommended_par"
                    :key="i"
                    cols="12"
                    class="text-subtitle-2 py-0"
                  >
                    {{ t.type + ": " + t.par }}
                  </v-col>
                </v-row>
                <v-row justify="center" v-if="selected_drill.image != null">
                  <v-img
                    :src="selected_drill.image"
                    max-height="500px"
                    max-width="100%"
                  ></v-img>
                </v-row>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style></style>
