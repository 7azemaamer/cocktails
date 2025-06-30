<script setup>
import { onMounted } from "vue";
import { navLinks } from "../../constants";

import gsap from "gsap";

onMounted(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
  });

  navTween.fromTo(
    "nav",
    {
      backgroundColor: "transparent",
    },
    {
      backgroundColor: "#00000050",
      backgroundFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut",
    }
  );
});
</script>

<template>
  <nav>
    <div>
      <a href="home" class="flex items-center gap-2">
        <img src="/public/images/logo.png" />
        <p>Velvet Pour</p>
      </a>
      <ul>
        <li v-for="nav in navLinks" :key="nav.id">
          <a :href="nav.link" class="text-white">
            {{ nav.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
