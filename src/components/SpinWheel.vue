<script setup>
  import { userSelectionStore } from '@/stores/userSelection';
  import { onMounted, ref, defineProps} from 'vue';
  const props = defineProps(['millie1', 'millie2']);
  const user_store = userSelectionStore();
  const wheel = ref(null);
  const hexToHsl = (hex, lightnessReduction = 6.9) => {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Convert RGB to HSL
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    // Reduce lightness by 10%
    l = Math.max(0, l - lightnessReduction / 100);

    // Convert HSL to string format
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  // Array of subdued colors
  const colors = [
    hexToHsl('#E50000'), hexToHsl('#FF8D00'), hexToHsl('#FFEE00'), hexToHsl('#028121'),
    hexToHsl('#004CFF'), hexToHsl('#760088'), hexToHsl('#FFAFC7'), hexToHsl('#73D7EE'),
    hexToHsl('#613915'), hexToHsl('#000000')
  ];
  const show_spin = ref(false);
  const spin_wheel = () => {
    let val1 = Math.ceil(Math.random() * 3600);
    show_spin.value = true;
    wheel.value.style.transform = "rotate(" + val1 + "deg)";
    setTimeout(() => {
      user_store.step_counter++;
    }, 3250)
  }
  onMounted(() => {
    setTimeout(() => {
      spin_wheel();
    }, 1000);
  })
</script>

<template>
  <div>
    <div class="wheel-component">
      <div class="wheel-container">
        <div class="center-axis"></div>
        <div class="wheel" ref="wheel">
          <span
            v-for="i in 20"
            :key="i"
            :style="{
              '--i': (i - 1),
              backgroundColor: colors[(i - 1) % colors.length],
              clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(2 * Math.PI * (i - 1) / 20)}% ${50 + 50 * Math.sin(2 * Math.PI * (i - 1) / 20)}%, ${50 + 50 * Math.cos(2 * Math.PI * i / 20)}% ${50 + 50 * Math.sin(2 * Math.PI * i / 20)}%)`
            }"
          >
          </span>
        </div>
      </div>
    </div>
    <div class="millie-position">
      <v-img v-if="!show_spin" height="50%" width="50%" :src="props.millie1"></v-img>
      <v-img v-if="show_spin" height="50%" width="50%" :src="props.millie2"></v-img>
    </div>
  </div>
</template>


<style scoped>
  .wheel-component {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .wheel-container::before {
    content: '';
    position: absolute;
    top: -2vh;
    width: 2vw;
    height: 4vh;
    background: #ff0000;
    z-index: 1001;
    clip-path: polygon(50% 15%, 90% 20%, 50% 90%, 10% 20%);
  }

  .wheel-container {
    position: absolute;
    min-width: 300px;
    min-height: 300px;
    max-width: 85vw;
    max-height: 85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 225px;
  }

  .wheel {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0.69vw white;
    border-radius: 50%;
    transition: transform 3s ease-in-out;
    overflow: hidden;
  }

  .wheel span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%);
    filter: drop-shadow(0 0 2px white);
  }

  .center-axis {
    position: absolute;
    inset: 135px;
    background: #eaeaea;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    z-index: 1000;
    filter: drop-shadow(0 0 2px white);
  }

  .millie-position {
    position: absolute;
    max-width: 300px;
    max-height: 300px;
    min-width: 150px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    top: 420px;
    left: calc(69px + ((100vw - 50px) / 50 * 25));
  }
</style>
