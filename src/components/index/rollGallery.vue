<template>
   <div class="w-fullh-full text-pink-400 overflow-hidden" ref="view">
      <div class="w-full h-[50vh] flex mt-[20vh] roll">
         <div class="flex-none w-[80vw] md:w-[40vw] bg-slate-500 m-4 overflow-hidden">
            <img class="object-cover w-full h-auto updown" src="../../assets/img/IMG_5087.webp" />
         </div>
         <div class="flex-none w-[80vw] md:w-[40vw] bg-slate-500 m-4 overflow-hidden">
            <img class="object-cover w-full h-auto updown" src="../../assets/img/IMG_5087.webp" />
         </div>
         <div class="flex-none w-[80vw] md:w-[40vw] bg-slate-500 m-4 overflow-hidden">
            <img class="object-cover w-full h-auto updown" src="../../assets/img/IMG_5087.webp" />
         </div>
         <div class="flex-none w-[80vw] md:w-[40vw] bg-slate-500 m-4 overflow-hidden">
            <img class="object-cover w-full h-auto updown" src="../../assets/img/IMG_5087.webp" />
         </div>
      </div>

      <h1>TODO list</h1>
      <ul>
         <li>1. Add a new blog post</li>
         <li>2. Update the navigation</li>
         <li>3. infinity gallery</li>
         <li>4. Ccode</li>
         <li>5. MORE & MORE animation !!!</li>
         <li>6. router</li>
      </ul>
   </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let ctx
const view = ref()

onMounted(() => {
   ctx = gsap.context((self) => {
      const roll = self.selector('.roll')
      const updown = self.selector('.updown')
      gsap.to(roll, {
         xPercent: -30,
         scrollTrigger: {
            trigger: roll,
            start: '20% bottom',
            end: '+=2000',
            scrub: true
         }
      })
      gsap.to(updown, {
         yPercent: -20,
         scrollTrigger: {
            trigger: updown,
            start: '20% bottom',
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
