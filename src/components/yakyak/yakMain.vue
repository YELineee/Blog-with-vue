<template>
   <div>
      <div
         v-for="(blogItem, index) in blogData"
         :key="index"
         class="w-full h-full text-slate-100 mianPage"
      >
         <div class="text-3xl md:text-4xl pt-8">{{ blogItem.title }}</div>
         <div class="text-sm text-slate-100 mb-3 mt-1">date: {{ blogItem.date }}</div>
         <div
            v-for="(contentPart, contentIndex) in blogItem.content"
            :key="contentIndex"
            class="p-1 md:p-3 text-sm md:text-xl text-slate-100"
         >
            {{ contentPart }}
         </div>
         <div class="pt-10 text-2xl text-slate-100">{{ blogItem.img }}</div>
         <div class="border-t border-gray-300 border-dashed mb-10"></div>
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '../../assets/blog/unicode.json'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const blogData = ref(data)

onMounted(() => {
   if (window.innerWidth > 768) {
      gsap.utils.toArray('.mianPage').forEach((el) => {
         gsap.to(el, {
            scrollTrigger: {
               trigger: el,
               start: '20% top',
               end: 'bottom 40%',
               scrub: 1
            },
            scale: 0.9,
            opacity: 0.8,
            y: 40
         })
      })
   } else {
      gsap.utils.toArray('.mianPage').forEach((el) => {
         gsap.to(el, {
            scrollTrigger: {
               trigger: el,
               start: '20% top',
               end: '300% top',
               scrub: 1
            },
            scale: 0.3,
            opacity: 0.8,
            y: 40
         })
      })
   } //bug here
})
</script>

<style>
::-webkit-scrollbar {
   display: none;
}
</style>
