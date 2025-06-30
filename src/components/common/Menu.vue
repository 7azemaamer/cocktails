<script setup>
import { computed, ref, watch } from "vue";
import { sliderLists } from "../../constants";
import gsap from "gsap";

const currentIndex = ref(0);
const totalCocktails = sliderLists.length;
const contentRef = ref(null);
const goToSlide = (index) => {
  const newIndex = (index + totalCocktails) % totalCocktails;
  currentIndex.value = newIndex;
};

const getCocktailAt = (indexOffset) => {
  return sliderLists[
    (currentIndex.value + indexOffset + totalCocktails) % totalCocktails
  ];
};

const currentCoctail = computed(() => getCocktailAt(0));
const prevCoctail = computed(() => getCocktailAt(-1));
const nextCoctail = computed(() => getCocktailAt(1));

watch(currentIndex, () => {
  gsap.fromTo(
    ".details h2",
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      yPercent: 0,
      ease: "power1.inOut",
    }
  );
  gsap.fromTo(
    ".details p",
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      yPercent: 0,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ".cocktail-img",
    {
      opacity: 0,
      xPercent: -100,
    },
    {
      opacity: 1,
      xPercent: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  );
});
</script>
<template>
  <section id="menu" aria-labelledby="menu-heading">
    <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
    <img
      src="/images/slider-right-leaf.png"
      alt="right-leaf"
      id="m-right-leaf"
    />
    <h2 id="menu-heading" class="sr-only">Cocktail Menu</h2>
    <nav class="cocktail-tabs" aria-label="Cockatil Navigation">
      <button
        v-for="(cocktail, index) in sliderLists"
        :key="index + cocktail.name"
        :class="
          index === currentIndex
            ? 'text-white border-white'
            : 'text-white/50 border-white/50'
        "
        @click="() => goToSlide(index)"
      >
        {{ cocktail.name }}
      </button>
    </nav>
    <div class="content">
      <div class="arrows">
        <button class="text-left" @click="() => goToSlide(currentIndex - 1)">
          <span> {{ prevCoctail.name }} </span>
          <img
            src="/images/right-arrow.png"
            alt="right-arrow"
            aria-hidden="true"
          />
        </button>
        <button class="text-right" @click="() => goToSlide(currentIndex + 1)">
          <span> {{ nextCoctail.name }} </span>
          <img
            src="/images/left-arrow.png"
            alt="left-arrow"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="cocktail">
        <img
          :src="currentCoctail.image"
          class="object-contain cocktail-img"
          aria-hidden="true"
        />
      </div>
      <div class="recipe">
        <div ref="contentRef" class="info">
          <p>Recipe for:</p>
          <p id="title">{{ currentCoctail.name }}</p>
        </div>
        <div class="details">
          <h2>{{ currentCoctail.title }}</h2>
          <p>{{ currentCoctail.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
