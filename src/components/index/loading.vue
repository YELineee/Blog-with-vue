<template>
   <div class="absolute w-full h-[100vh] bg-black z-50 flex loadingPage">
      <div class="w-[30vw] m-auto relative">
         <img src="@/assets/img/circle_white.webp" alt="" class="circle" />
         <div
            class="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200"
            style="font-family: 'Times New Roman', Times, serif;"
         >
            {{ onLoading }}
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import gsap from 'gsap'

const finishLoading = () => {
   gsap.to('.loadingPage', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
         document.querySelector('.loadingPage')?.remove()
      }
   })
}

defineProps({
   onLoading: Number
})

defineExpose({
   finishLoading
})

onMounted(() => {
   gsap.to('.circle', {
      rotation: 360,
      repeat: -1,
      ease: 'linear',
      duration: 10 // 这里可以设置旋转一圈所需的时间，单位是秒
   })
})
</script>
