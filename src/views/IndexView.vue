<template>
  <div class="w-full h-[300vh]" ref="view">
    <div class="h-[100vh] w-full bg-slate-200 flex justify-center items-center overflow-hidden">
      <div class="text-[80px] md:text-[200px] leading-[80px] md:leading-[200px] mix-blend-multiply text-violet-800 relative"
        style="font-family: VariableFont;">
        <p class="text_1 select-none" @click="changeColor()">SADless</p>
        <p class="text_2 select-none" @click="changeFontColor()">HOPEless</p>
        <p class="text_3 select-none">WORTHless</p>
      </div>
    </div>
    <div class="w-full h-[100vh] bg-white">
      <div class="grid-bg w-full h-full">
        <test />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import test from '../components/index/test.vue';
gsap.registerPlugin(ScrollTrigger);

const view = ref();
let ctx;

onMounted(() => {

  ctx = gsap.context((self) => {
    const text_1 = self.selector('.text_1');
    const text_2 = self.selector('.text_2');
    const text_3 = self.selector('.text_3');
    gsap.to(text_1, {
        xPercent: 80, 
        opacity: 0.5,
        scale: 4,
        duration: 2,
        scrollTrigger: {
          trigger: text_1,
          start: '100% 30%',
          end: '+=600',
          scrub: true,
        },
      },
    );
    gsap.to(text_2, {
        xPercent: -20,
        opacity: 0.5,
        scale: 4,
        duration: 3,
        scrollTrigger: {
          trigger: text_1,
          start: '100% 30%',
          end: '+=600',
          scrub: true,
        },
      },
    );
    gsap.to(text_3, {
        xPercent: 100,
        yPercent: 100,
        opacity: 0.5,
        scale: 4,
        duration: 3,
        scrollTrigger: {
          trigger: text_1,
          start: '100% 30%',
          end: '+=600',
          scrub: true,
        },
      },
    );
    
  }, view.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
.animated-text {
  transition: transform 0.1s ease, font-size 0.1s ease, opacity 0.1s ease;
}

.grid-bg {
  position: absolute;
  background-image: linear-gradient(to right, #88888844 1px, transparent 1px), linear-gradient(to bottom, #88888844 1px, transparent 1px);
  background-size: 100px 100px;
  color: #88888844;
}
</style>
