<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { nextTick, onMounted, ref } from "vue";
import { useMediaQuery } from "@vueuse/core";

const videoRef = ref(null);
const isMobile = useMediaQuery("(max-width: 767px)");

onMounted(async () => {
  await nextTick();
  /* ================
   * Video Animations vars
   ================ */

  const startValue = isMobile.value ? "top 50%" : "center 60%";
  const endValue = isMobile.value ? "120% top" : "bottom top";

  const vtl = gsap.timeline({
    scrollTrigger: {
      trigger: "video",
      start: startValue,
      end: endValue,
      scrub: true,
      pin: true,
    },
  });
  videoRef.value.onloadedmetadata = () => {
    vtl.to(videoRef.value, {
      currentTime: videoRef.value.duration,
    });
  };
  /* ================
   * Text Animations
   ================ */
  const heroSplit = new SplitText(".title", { type: "chars, words" });
  const paraSplit = new SplitText(".subtitle", { type: "lines" });

  heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

  // char slide up animation
  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    stagger: 0.06,
    ease: "expo.out",
  });

  // line slide up animation
  gsap.from(paraSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    stagger: 0.06,
    ease: "expo.out",
    delay: 1,
  });

  // leafs moves when scroll up and down
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0);
});
</script>

<template>
  <section id="hero" class="noisy">
    <h1 class="title">MOJITO</h1>
    <img src="/images/hero-left-leaf.png" alt="left-leaf" class="left-leaf" />
    <img
      src="/images/hero-right-leaf.png"
      alt="right-leaf"
      class="right-leaf"
    />
    <div class="body">
      <div class="content">
        <div class="space-y-5 hidden md:block">
          <p>Cool. Crisp. Classic.</p>
          <p class="subtitle">
            Sip the Spirit <br />
            of Summer
          </p>
        </div>
        <div class="view-cocktails">
          <p class="subtitle">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes — designed to delight your
            senses.
          </p>
          <a href="#cocktails"> View Cocktails </a>
        </div>
      </div>
    </div>
  </section>
  <div class="video absolute inset-0">
    <video
      ref="videoRef"
      src="/videos/output.mp4"
      muted
      preload="auto"
      playsinline
    />
  </div>
</template>
