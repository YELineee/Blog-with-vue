<template>
   <div class="w-full h-auto" ref="view">
      <div class="h-[100vh] w-full bg-white flex justify-center items-center overflow-hidden">
         <div
            class="text-[80px] md:text-[200px] leading-[80px] md:leading-[200px] text-black relative"
            style="font-family: VariableFont"
         >
            <p class="text_1 select-none" @click="changeColor()">SADless</p>
            <p class="text_2 select-none" @click="changeFontColor()">HOPEless</p>
            <p class="text_3 select-none">WORTHless</p>
            <div class="">
               <img
                  class="absolute top-0 right-0 md:right-[-5vw] w-20 md:w-60 rotate"
                  src="@/assets/img/circle.webp"
                  alt=""
                  draggable="false"
               />
            </div>
         </div>
      </div>

      <div class="min-w-full min-h-[200vh] grid-bg">
         <div class="p-2 md:flex md:px-32 md:py-40">
            <div
               class="w-full md:ml-[3vw] md:w-[40vw] md:h-[80vh] overflow-hidden border-2 border-black"
            >
               <img
                  class="object-cover scale-[5] md:scale-[8] roll translate-y-40"
                  src="@/assets/img/IMG_5087.webp"
                  alt="?"
                  draggable="false"
               />
            </div>
            <div class="w-full">
               <div class="w-full md:py-4 text-center" style="font-family: VariableFont">
                  <div class="text-6xl mt-10 md:mt-0 md:text-8xl text-black">Daniel Pan</div>
                  <div class="w-full h-[0.2rem] bg-black"></div>
                  <div class="py-1 text-4xl md:text-5xl text-black">WTF with my right thigh</div>
               </div>
               <div class="text-xl md:text-2xl text-center text-black mt-10 p-10 ml-10">
                  <p>
                     Ola!👋👋👋<br />
                     I am Daniel Pan, A.K,A YELineee<br />
                     I am a daydreamer, and a human observer<br />
                     who is passionate about web development and design<br />
                  </p>
                  <p class="pt-10 mt-10">
                     你好啊!👋👋👋<br />
                     我是Daniel Pan，或者YELineee都是可以的<br />
                     我可以是一个白日梦想家，也可以是一个人类观察家<br />
                     我喜欢天马行空的各种想象，而且思维跳脱到我也有些时候找不到我的说话逻辑,就是如此野蛮生长着<br />
                     大多数时候就是靠着打游戏和听歌写代码过日子，肆意的让多巴胺在脑子源源不断的分泌着。<br />
                  </p>
                  <p class="p-3">
                     如此失败着，如此挥霍着<br />
                     也许，失败和挥霍就是那般勇敢和洒脱
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const view = ref()
let ctx

const changeColor = () => {
   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
   view.value.querySelector('.bg-black').style.backgroundColor = randomColor
}

const changeFontColor = () => {
   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
   view.value.querySelector('.text_1').style.color = randomColor
   view.value.querySelector('.text_2').style.color = randomColor
   view.value.querySelector('.text_3').style.color = randomColor
}

onMounted(() => {
   ctx = gsap.context((self) => {
      const text_1 = self.selector('.text_1')
      const text_2 = self.selector('.text_2')
      const text_3 = self.selector('.text_3')
      const rotate = self.selector('.rotate')
      const roll = self.selector('.roll')
      gsap.to(text_1, {
         xPercent: 80,
         opacity: 0.5,
         scale: 4,
         duration: 2,
         scrollTrigger: {
            trigger: text_1,
            start: '100% 30%',
            end: '+=600',
            scrub: true
         }
      })
      gsap.to(text_2, {
         xPercent: -20,
         opacity: 0.5,
         scale: 4,
         duration: 3,
         scrollTrigger: {
            trigger: text_1,
            start: '100% 30%',
            end: '+=600',
            scrub: true
         }
      })
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
            scrub: true
         }
      })
      gsap.to(rotate, {
         rotation: 360,
         repeat: -1,
         ease: 'linear',
         duration: 10 // 这里可以设置旋转一圈所需的时间，单位是秒
      })
      gsap.to(roll, {
         yPercent: 100,
         scrollTrigger: {
            trigger: roll,
            start: '30% bottom',
            end: '+=2000',
            scrub: true
         }
      })
   }, view.value) // <- Scope!
})

onUnmounted(() => {
   ctx.revert() // <- Easy Cleanup!
})
</script>

<style scoped>
.animated-text {
   transition:
      transform 0.1s ease,
      font-size 0.1s ease,
      opacity 0.1s ease;
}

.grid-bg {
   background-image: linear-gradient(to right, #88888844 1px, transparent 1px),
      linear-gradient(to bottom, #88888844 1px, transparent 1px);
   background-size: calc(5vw - 1px) 5vw;
   color: #88888844;
}

/* @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.rotate {
   animation: spin 5s linear infinite;
} */
</style>
