<template>
   <div class="w-full h-auto" ref="view">
      <div class="h-[100vh] w-full bg-black flex justify-center items-center overflow-hidden">
         <div
         class="text-[80px] md:text-[200px] leading-[80px] md:leading-[200px] text-slate-200 relative mt-[15vh]"
         style="font-family: VariableFont"
         >
            <img src="@/assets/img/IMG_8091.webp" alt="" class=" absolute w-[700px] -top-72 left-10 -rotate-[0deg] ">
            <p class="text_1 select-none" @click="changeColor()">SADless</p>
            <p class="text_2 select-none" @click="changeFontColor()">HOPEless</p>
            <p class="text_3 select-none">WORTHless</p>
            <div class="">
               <img
                  class="absolute top-0 right-0 md:right-[-5vw] w-20 md:w-60 rotate"
                  src="@/assets/img/circle_white.webp"
                  alt=""
                  draggable="false"
               />
            </div>
         </div>
      </div>
      <div
         class="min-w-full min-h-[200vh] bg-black px-10 pt-10 text-slate-200 overflow-hidden"
         style="font-family: VariableFont"
      >
         <!-- First line  -->
         <div class="h-[20rem] w-full flex">
            <div class="w-[95vw] h-[30rem] cover_1 -translate-y-4 bg-black absolute">

            </div>
            <div class="h-1/2 w-[15%] border-l-4 border-slate-200 text-5xl text-center font-bold">
               SAD
            </div>
            <div
               class="h-full w-[30%] border-l-4 border-r-4 border-slate-200 text-7xl text-center text-wrap"
            >
               <p>Danile</p>
               <p>Pan</p>
            </div>
            <div class="h-full w-full text-[24rem] leading-[18rem] font-bold text-center">
               02.11.11
            </div>
         </div>
         <!-- Second line -->
         <div class="h-[20rem] w-full"></div>
         <!-- Third line -->
         <div class="h-[30rem] w-full flex relative">
            <div
               class="h-full w-[15%] border-l-4 border-slate-200 text-5xl text-center font-bold z-10"
            ></div>
            <div
               class="h-full w-[30%] border-l-4 border-r-4 border-slate-200 text-6xl text-center text-wrap z-10 p-1"
            >
               <img
                  class="w-full rotate"
                  src="@/assets/img/circle_white.webp"
                  alt=""
                  draggable="false"
               />
            </div>
            <div
               class="h-full w-full text-9xl text-left z-10 font-light pl-8"
               style="font-weight: 100"
            >
               <p>Day DREAmer</p>
               <p>HUMan OBSErver</p>
               <p>FRee SPIrit</p>
               <p>KNOWledge SEEker</p>
               <p>LOYalist</p>
               <p>PRAYerful PERson</p>
            </div>

            <div class="h-[80rem] w-full flex absolute z-0 top-[20rem]">
               <div class="h-full w-full ml-2 overflow-hidden">
                  <div class="h-full w-full bg-black absolute z-10 cover_2"></div>
                  <img
                     class="w-full scale-[1] translate-y-[-50vw]"
                     src="@/assets/img/IMG_5089.webp"
                     alt=""
                     draggable="false"
                  />
               </div>
               <div class="h-full w-[30%] ml-2 text-6xl text-center text-wrap overflow-hidden">
                  <div class="h-full w-full bg-black absolute z-10 cover_2"></div>
                  <img
                     class="w-full scale-[2] -translate-y-48"
                     src="@/assets/img/IMG_5089.webp"
                     alt=""
                     draggable="false"
                  />
               </div>
               <div class="h-full w-[15%] ml-2 text-5xl text-center font-bold overflow-hidden">
                  <div class="h-full w-full bg-black absolute z-10 cover_2"></div>
                  <img
                     class="w-full scale-[2]"
                     src="@/assets/img/IMG_5089.webp"
                     alt=""
                     draggable="false"
                  />
               </div>
            </div>
         </div>
         <!-- Fourth line -->
         <div class="h-[80rem] w-full"></div>
         <!-- Fifth line -->
         <div class="h-[20rem] w-full flex">
            <div
               class="h-1/2 w-[15%] border-l-4 border-slate-200 text-5xl text-center font-bold"
            ></div>
            <div class="h-1/2 w-[30%] border-l-4 border-slate-200 text-6xl text-center text-wrap">
               Coming soon...
            </div>
            <div
               class="h-full w-full text-[24rem] border-l-4 border-slate-200 leading-[18rem] font-bold text-center"
            ></div>
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
      const cover_1 = self.selector('.cover_1')
      const cover_2 = self.selector('.cover_2')

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
         duration: 10
      })
      gsap.to(cover_1, {
         scaleY: 0, 
         transformOrigin: "bottom ",
         duration: 2, 
         scrollTrigger: {
            trigger: cover_1,
            start: 'top 70%', 
            scrub: false,
         }
      })
      gsap.to(cover_2, {
         scaleY: 0, 
         transformOrigin: "bottom ",
         duration: 2,
         scrollTrigger: {
            trigger: cover_2,
            start: 'top center', 
            scrub: false,
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
