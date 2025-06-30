<script setup>
import { onMounted } from "vue";
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "@vueuse/core";
import gsap from "gsap";
const isMobile = useMediaQuery("(max-wdith:767px)");
const start = isMobile.value ? "top 20%" : "top top";
onMounted(() => {
  const maskedTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#art",
      start,
      end: "bottom center",
      scrub: 1.5,
      pin: true,
    },
  });
  maskedTimeline
    .to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    })
    .to(".masked-img", {
      scale: 1.4,
      maskPosition: "center",
      maskSize: "400%",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(".masked-content", {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
});
</script>
<template>
  <section id="art">
    <div class="container mx-auto h-full pt-20">
      <h2 class="will-fade">The ART</h2>
      <div class="content">
        <ul class="space-y-4 will-fade">
          <li
            v-for="(feature, index) of goodLists"
            :key="index"
            class="flex items-center gap-2"
          >
            <img src="/images/check.png" alt="check" />
            <p>{{ feature }}</p>
          </li>
        </ul>
        <div class="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="cocktail"
            class="abs-center masked-img size-full object-contain"
          />
        </div>
        <ul class="space-y-4 will-fade">
          <li
            v-for="(feature, index) of featureLists"
            :key="index"
            class="flex items-center justify-start gap-2"
          >
            <img src="/images/check.png" alt="check" />
            <p class="md:w-fit w-60">{{ feature }}</p>
          </li>
        </ul>
      </div>
      <div class="masked-container">
        <h2 class="will-fade">Sip-Worthy Perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
