<template>
   <!-- <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3 md:pt-1" style="font-family: VariableFont">Personal</div>
      <div class="text-base md:text-2xl w-2/3">
         Hello, I'm Daniel pan, A.K.A Yelineeeeeeeeeeeee. I'm a junior student studying at CSU. I
         enjoy all kinds of wild imaginations, and sometimes my thoughts leap so far that even I
         can't find the logic in my speech.
      </div>
   </div> -->

   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">Education</div>
      <div class="text-base md:text-2xl w-1/3">
         <p class="font-semibold">Central South University</p>
         <p class="font-normal italic">Computer Science</p>
      </div>
      <div class="text-base md:text-2xl w-1/3 italic text-right font-light">
         <p>2021 - 2025</p>
      </div>
   </div>

   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">
         <p>Projects</p>
         <p class="text-sm md:text-xl pt-6">{Click if ur interested }</p>
      </div>
      <div class="w-2/3">
         <!-- Project 1 -->
         <div class="flex">
            <div class="w-1/2 text-base md:text-2xl">
               <div>
                  <a
                     href="/projects/baize"
                     class="font-semibold underline decoration-1 hover:decoration-2 cursor-pointer"
                  >
                     Qianxin Baize
                  </a>
                  <p class="font-normal italic">Independent Developer</p>
               </div>
            </div>
            <div class="text-base md:text-2xl w-1/2 italic text-right font-light">
               <p>2023 - 2024</p>
            </div>
         </div>
         <div class="text-base md:text-xl w-full md:mt-6 hidden md:block">
            <!-- <div class="pb-5">
               <p class="pb-2">Responsibilities:</p>
               <p>
                  Frontend Development and System Research & Development. Led the ground-up
                  reconstruction of the project to Vue 3, taking charge of the majority of frontend
                  page designs and implementing the integration of new features. Designed and
                  implemented the visualization of network attack behavior correlation graphs with
                  multi-level association and global/local interaction exploration. Developed
                  dynamic hierarchical visualizations for attacker profiles.
               </p>
            </div> -->
            <!-- <div class="pb-5">
               <p class="pb-2">TechStack:</p>
               <p>Vue3.0 SVG D3 Echarts</p>
            </div> -->
         </div>

         <!-- <div class="hidden md:block border-dashed border-b-2 border-white"></div> -->
         <!-- Project 2 -->
         <div class="flex mt-4 md:mt-8">
            <div class="w-1/2 text-base md:text-2xl">
               <div>
                  <a
                     href="https://www.csuligroup.com/CellCom/Prediction"
                     class="font-semibold underline decoration-1 hover:decoration-2 cursor-pointer"
                  >
                     CellCom
                  </a>
                  <p class="font-normal italic">Frontend Developer</p>
               </div>
            </div>
            <div class="text-base md:text-2xl w-1/2 italic text-right font-light">
               <p>2023 - 2024</p>
            </div>
         </div>
         <div class="text-base md:text-xl w-full md:mt-6 hidden md:block">

            <!-- <div class="pb-5">
               <p class="pb-2">Responsibilities:</p>
               <p>
                  Frontend Development, Web Design, and Refactoring. Responsible for redesigning web
                  pages and implementing additional features. Implemented layout refactoring for
                  enhanced visualization effects and incorporated various animation processes,
                  significantly improving user experience.
               </p>
            </div> -->
            <!-- <div class="pb-5">
               <p class="pb-2">TechStack:</p>
               <p>HTML Sass Spring</p>
            </div> -->
         </div>
      </div>
   </div>

   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">Org</div>
      <div class="w-2/3 text-base md:text-2xl">
         <div class="flex w-full">
            <div class="w-1/2">
               <p class="font-semibold">CSU IOS CLUB</p>
               <p class="font-normal italic">Technical Consultant</p>
            </div>
            <div class="w-1/2 text-right italic">
               <p>2022-NOW</p>
            </div>
         </div>
         <div class="flex w-full mt-10">
            <div class="w-1/2">
               <p class="font-semibold">CSU Visualization</p>
               <p class="font-normal italic">Developer</p>
            </div>
            <div class="w-1/2 text-right italic">
               <p>2022-NOW</p>
            </div>
         </div>
      </div>
   </div>

   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">Skills</div>
      <div class="w-1/3 text-base md:text-2xl">
         HTML <br />
         CSS<br />
         Python<br />
         JavaScript<br />
         TypeScript<br /><br />

         Git<br />
         Docker<br />
         Vim<br />
      </div>
      <div class="w-1/3 text-base md:text-2xl">
         Vue.js<br />
         Svelte<br />
         TailwindCSS<br /><br />

         Echarts<br />
         D3.js<br />
         Three.js<br />
         Element-plus<br /><br />
      </div>
   </div>
</template>

<script setup></script>

<style scoped>
.grid-bg {
   background-color: black;
   background-image: linear-gradient(to right, #efefef44 1px, transparent 1px),
      linear-gradient(to bottom, #efefef44 1px, transparent 1px);
   background-size: 100px 100px;
   /* color: #efefef44; */
}

.maintop {
   background-color: rgba(67, 67, 67, 0.4);
   backdrop-filter: blur(2px);
}

.mainpage {
   background-color: rgba(255, 255, 255, 0.4);
   backdrop-filter: blur(2px);
}
</style>
