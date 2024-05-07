<template>
   <div class="grid-bg text-white pt-[10vh] md:pt-[20vh] px-4 md:px-[5vw] pb-48 overflow-x-hidden">
      <div class="text-3xl md:text-8xl w-full border-b-2 border-white">奇安信 白泽</div>

      <img class="mt-10 md:mt-20 md:w-2/3 mx-auto" src="@/assets/img/IMG_5087.webp" alt="" />

      <div class="mb-10 md:mt-[10vh] mt-20 text-2xl md:text-5xl w-full border-b-2 border-white">
         项目介绍
      </div>

      <div class="text-sm md:text-2xl px-1">
         <div>
            <p>
               从头开始重构原有的Vue2项目，转向使用Vue3版本的白泽项目。在这个新版本中，我们添加了更多的新功能，并引入了新的可视化图表以满足新的需求
            </p>
            <p class="mt-2 md:mt-10">项目地址：asdasdasdasddsadas</p>
         </div>
      </div>

      <div class="mb-10 md:mt-[10vh] mt-20 text-2xl md:text-5xl w-full border-b-2 border-white">
         项目速览
      </div>
      <imgScorll title="Github" :images="sliderImages" />
      <imgScorll title="Github" :images="sliderImages" />
      <imgScorll title="Github" :images="sliderImages" />
      
   </div>
</template>

<script setup>
import imgScorll from './imgScorll.vue'
const sliderImages = [
   { src: '/src/assets/img/IMG_5087.webp', alt: 'Image 1' },
   { src: '/src/assets/img/IMG_5087.webp', alt: 'Image 2' },
   { src: '/src/assets/img/IMG_5087.webp', alt: 'Image 3' }
   // Add more images as needed
]
</script>

<style scoped>
.grid-bg {
   background-color: black;
   background-image: linear-gradient(to right, #efefef44 1px, transparent 1px),
      linear-gradient(to bottom, #efefef44 1px, transparent 1px);
   background-size: 100px 100px;
   /* color: #efefef44; */
}
</style>
