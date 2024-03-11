<template>
   <div>
     <div v-for="(blogItem, index) in blogData" :key="index" class="w-full h-full text-slate-100">
       <div class="text-4xl pt-8">{{ blogItem.title }}</div>
       <div class="text-sm text-slate-100 mb-3">date: {{ blogItem.date }}</div>
       <div v-for="(contentPart, contentIndex) in blogItem.content" :key="contentIndex" class="p-3 text-xl text-slate-100">{{ contentPart }}</div>
       <div class="pt-10 text-2xl text-slate-100">{{ blogItem.img }}</div>
       <div class="border-t border-gray-300 border-dashed mb-10"></div>
     </div>
   </div>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 import data from '../../assets/blog/unicode.json'
 
 
 const blogData = ref(data)
 </script>

 <style>
::-webkit-scrollbar {
    display: none;
}
</style>
 