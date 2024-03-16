<template>
   <main class="main">
      <div class="w-[80vw] h-full" >
         <div class="h-[20vh]"></div>
            <div class="text-slate-100 text-5xl md:text-9xl typing " style="font-family: VariableFont;" ></div>
         <div class="w-full h-[0.2px] bg-slate-100 mb-6"></div>
         <yakMain />
         <div class="border-t border-gray-300 border-dashed "></div>
      </div>
   </main>
</template>

<script setup>
import { onMounted } from 'vue';
import yakMain from '../components/yakyak/yakMain.vue'
import TypeIt from 'typeit';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

   createTypeItEffect(".typing");
   gsap.to(".typing", {
      scrollTrigger: {
         trigger: ".mian",
         start: "0% 0%",
         end: "15% 0%",
         scrub: 1,
      },  
      x: "20vw",
      scale: 0.9,
      opacity: 0.8,
   });

});



function createTypeItEffect(element, options = {}) {
  // 默认选项
  const defaultOptions = {
    speed: 150, 
    loop: true, 
    lifeLike: true,
  };

  // 合并用户提供的选项和默认选项
  const mergedOptions = { ...defaultOptions, ...options };

  // 创建一个新的 TypeIt 实例并应用配置
  return new TypeIt(element, mergedOptions)
      .type("Rambleing on", { delay: 100 })
      .pause(100)
      .move(-6)
      .delete(1)
      .move(6)
      .pause(100)
      .delete(14)
      .type("YAKYAKe", { delay: 300 })
      .pause(200)
      .delete(1)
      .pause(200)
      .delete(2)
      .pause(200)
      .type("ak", { delay: 300 })
      .go();
}

</script>

<style scoped>
.main {
   background-color: #000000;
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
}
</style>
