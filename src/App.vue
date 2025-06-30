<script setup>
import { ScrollTrigger, SplitText } from "gsap/all";
import { RouterView } from "vue-router";
import Navbar from "./components/layout/Navbar.vue";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>
