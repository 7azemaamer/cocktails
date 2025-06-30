<script setup>
import { onMounted } from "vue";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const titleSplit = SplitText.create("#contact h2", { type: "words" });
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
    },
  });
  tl.from(titleSplit.words, {
    opacity: 0,
    yPercent: 0,
    stagger: 0.02,
  })
    .from("#contact h3, #contact p", {
      opacity: 0,
      yPercent: 0,
      stagger: 0.02,
    })
    .to("#f-right-leaf", {
      y: "-50",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(
      "#f-left-leaf",
      {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
});
</script>
<template>
  <footer id="contact">
    <img
      src="/images/footer-right-leaf.png"
      alt="right-leaf"
      id="f-right-leaf"
    />
    <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />
    <div class="content">
      <h2>Where to Find Us</h2>
      <div>
        <h3>Visit Our Store</h3>
        <p>456, Madinty, Cairo, Egypt</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>+20 10 22 9 444 77</p>
        <p>zicoaamer@gmail.com</p>
      </div>
      <div>
        <h3>Open Every Day</h3>
        <p v-for="{ day, time } of openingHours" :key="day">
          {{ day }} : {{ time }}
        </p>
      </div>
      <div>
        <h3>Socials</h3>
        <div class="flex-center gap-5">
          <a
            v-for="social of socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
          >
            <img :src="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
