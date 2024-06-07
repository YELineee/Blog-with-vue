<template>
   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">Education</div>
      <div class="text-base md:text-2xl w-1/3">
         <p class="font-semibold">中南大学</p>
         <p class="font-normal italic">计算机科学</p>
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
                     class="font-semibold underline decoration-transparent hover:decoration-white cursor-pointer"
                  >
                     奇安信 白泽
                  </a>
                  <p class="font-normal italic">前端开发</p>
               </div>
            </div>
            <div class="text-base md:text-2xl w-1/2 italic text-right font-light">
               <p>2023 - 2024</p>
            </div>
         </div>
         <!-- <div class="text-base md:text-xl w-full md:mt-6 hidden md:block">
            <div class="pb-5">
               <p class="pb-2">项目职责：</p>
               <p>
                  负责系统研发和前端开发，主导从零到一的项目重构至Vue
                  3版本，承担了绝大多数前端页面的设计和实现，以及新特性的移植和集成。<br />
                  运用D3.js
                  Echarts等前端技术，结合可视化库和数据处理工具，实现复杂数据的直观展示，并确保用户界面的友好性和响应性。<br />
                  主导设计并开发攻击者画像的动态层次可视化，通过视觉化手段呈现攻击者行为的特征和模式，为安全团队提供更深入的洞察和决策支持。<br />
               </p>
            </div>
            <div class="pb-5">
               <p class="pb-2">技术栈：</p>
               <p>Vue3.0 SVG D3 Echarts</p>
            </div>
         </div> -->
         <!-- Project 2 -->
         <div class="flex mt-4 md:mt-10">
            <div class="w-1/2 text-base md:text-2xl">
               <div>
                  <a
                     href="https://www.csuligroup.com/CellCom/Prediction"
                     class="font-semibold underline decoration-transparent hover:decoration-white cursor-pointer"
                  >
                     CellCom
                  </a>
                  <p class="font-normal italic">前端开发</p>
               </div>
            </div>
            <div class="text-base md:text-2xl w-1/2 italic text-right font-light">
               <p>2023 - 2024</p>
            </div>
         </div>
         <!-- <div class="text-base md:text-xl w-full md:mt-6 hidden md:block">
            <div class="pb-5">
               <p class="pb-2">项目地址：</p>
               <a
                  href="https://www.csuligroup.com/CellCom/Prediction"
                  class="underline decoration-transparent hover:decoration-white cursor-pointer"
                  >www.csuligroup.com/CellCom/Prediction</a
               >
            </div>
            <div class="pb-5">
               <p class="pb-2">项目职责：</p>
               <p>
                  负责前端开发，网页设计与重构，致力于提升用户体验和交互性。主导页面重新设计，通过重构可视化效果布局，实现了更多功能的实现和用户体验的提升。通过优化布局和设计，提高了用户界面的交互性和响应速度，进一步增强了用户体验。协作团队，与设计师合作，确保页面设计与视觉效果的一致性，以及与后端工程师密切合作，确保前后端数据的有效交互。
               </p>
            </div>
            <div class="pb-5">
               <p class="pb-2">技术栈：</p>
               <p>HTML Sass Spring</p>
            </div>
         </div> -->
      </div>
   </div>

   <div class="border-t-4 border-white text-2xl md:text-5xl mt-20 flex pt-1">
      <div class="w-1/3" style="font-family: VariableFont">Org</div>
      <div class="w-2/3 text-base md:text-2xl">
         <div class="flex w-full">
            <div class="w-1/2">
               <p class="font-semibold">中南大学苹果实验室</p>
               <p class="font-normal italic">技术顾问</p>
            </div>
            <div class="w-1/2 text-right italic">
               <p>2022-NOW</p>
            </div>
         </div>
         <div class="flex w-full mt-10">
            <div class="w-1/2">
               <p class="font-semibold">中南大学可视化项目组</p>
               <p class="font-normal italic ">开发人员</p>
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
