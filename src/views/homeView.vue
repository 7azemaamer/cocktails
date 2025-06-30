<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const textAnimation = ref("text");
const paraAnimation = ref("para");
onMounted(() => {
  gsap.to(`#${textAnimation.value}`, {
    ease: "power1.inOut",
    opacity: 1,
    y: 0,
  });
  gsap.fromTo(
    `.${paraAnimation.value}`,
    {
      opacity: 0,
      y: 20,
    },
    {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      stagger: 0.1,
    }
  );
});
</script>

<template>
  <div class="bg-[#121212] w-full h-[100vh] p-20">
    <h1 id="text" class="opacity-0 translate-y-20 text-white text-4xl mb-3">
      GsapText
    </h1>
    <p class="para text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam totam
      itaque accusamus iste atque recusandae deserunt explicabo aspernatur, quo
      doloribus dolore aut esse labore amet molestias repudiandae ipsam! Debitis
      consequuntur voluptatum velit ducimus. Excepturi numquam, repellendus
      consectetur at incidunt aut perspiciatis rerum voluptatum mollitia! Nulla,
      consequatur quae atque perferendis aliquid fugit dolores, vero beatae
      accusamus quasi ipsam doloribus nostrum quos corrupti mollitia reiciendis
      maiores nesciunt rerum hic quisquam tempore! Aliquam quod quis deleniti
      saepe suscipit nisi quibusdam numquam esse enim inventore tempora odio
      quisquam similique ipsa nemo nihil nobis doloremque qui quae, expedita
      explicabo! Nihil obcaecati dolore rem culpa!
    </p>
  </div>
</template>
