<template>
   <main class="main">
      <div class="w-[80vw] h-full">
         <div class="h-[20vh]"></div>
         <div class="text-slate-100 text-8xl">YAKYak</div>
         <div class="w-full h-[0.2px] bg-slate-100 mb-6"></div>
         <yakMain />
         <div class="border-t border-gray-300 border-dashed "></div>
      </div>
   </main>
</template>

<script setup>
import yakMain from '../components/yakyak/yakMain.vue'
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
