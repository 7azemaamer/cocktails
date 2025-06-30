<script setup>
import { onMounted } from "vue";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#cocktails",
      start: "top 30%",
      end: "bottom 80%",
      scrub: true,
    },
  });

  timeline
    .from("#c-left-leaf", {
      x: -100,
      y: 100,
    })
    .from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
});
</script>

<template>
  <section class="noisy" id="cocktails">
    <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
    <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

    <div class="list">
      <div class="popular">
        <h2>Most popular cocktails</h2>
        <ul>
          <li v-for="drink of cocktailLists" :key="drink.name">
            <div class="md:me-28">
              <h3>{{ drink.name }}</h3>
              <p>{{ drink.country }} | {{ drink.detail }}</p>
            </div>
            <span>- {{ drink.price }}</span>
          </li>
        </ul>
      </div>
      <div class="loved">
        <h2>Most loved mocktails</h2>
        <ul>
          <li v-for="drink of mockTailLists" :key="drink.name">
            <div class="me-28">
              <h3>{{ drink.name }}</h3>
              <p>{{ drink.country }} | {{ drink.detail }}</p>
            </div>
            <span>- {{ drink.price }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
