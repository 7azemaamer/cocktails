<script setup>
import { ScrollTrigger, SplitText } from "gsap/all";
import { RouterView } from "vue-router";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
