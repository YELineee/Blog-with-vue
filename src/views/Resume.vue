<template>
   <div
      class="grid-bg md:flex justify-center overflow-hidden pb-10 px-[8vw]"
      style="user-select: none"
   >
      <div class="md:w-1/3 text-white">
         <div class="text-[160px] mt-[15vh] leading-[0.8]" style="font-family: VariableFont">
            HanJu<br />Daniel<br />Pan
         </div>
         <div class="text-2xl mt-16 pl-[1vw] leading-normal whitespace-nowrap">
            <p><strong>Phone:</strong> +86 176 7142 4811</p>
            <p><strong>Email:</strong> 1638317920@qq.com</p>
            <p><strong>Porft:</strong> www.yelineeee.com</p>

            <div class="flex mb-2 mt-10">
               <a href="https://github.com/YELineee">
                  <img class="ml-0" draggable="false" src="../assets/svg/github.svg" alt="" />
               </a>
               <a>
                  <img class="ml-2" draggable="false" src="../assets/svg/linkedin.svg" alt="" />
               </a>
            </div>
            <div class="flex mb-2">
               <a
                  href="https://open.spotify.com/user/31dwkphfwo7lq3t5wxsjhgiijuba?si=856522bc2323435c"
               >
                  <img class="ml-0" draggable="false" src="../assets/svg/spotify.svg" alt="" />
               </a>
               <a href="https://discordapp.com/yelineee">
                  <img class="ml-2" draggable="false" src="../assets/svg/discord.svg" alt="" />
               </a>
            </div>
         </div>
         <div
            class="text-[70px] mt-[30vh] leading-[1] whitespace-nowrap"
            style="font-family: VariableFont"
         >
            <p class="mt-3">
               Web <br />
               Developer /
            </p>
            <p class="mt-3">
               Former <br />
               Athlete /
            </p>
            <p class="mt-3">
               Amateur <br />
               Designer /
            </p>
         </div>
      </div>

      <div class="md:w-2/3 md:ml-[10vw] mt-[9vh] text-white">
         <div class="border-t-4 border-white text-5xl mt-20 flex pt-1">
            <div class="w-1/3 pt-1" style="font-family: VariableFont">Personal</div>
            <div class="text-2xl w-2/3">will update soon...</div>
         </div>
         <div class="border-t-4 border-white text-5xl mt-20 flex pt-1">
            <div class="w-1/3" style="font-family: VariableFont">Education</div>
            <div class="text-2xl w-1/3">
               <p class="font-semibold">Central South University</p>
               <p class="font-normal italic">Computer Science</p>
            </div>
            <div class="text-2xl w-1/3 italic text-right font-light">
               <p>2021 - 2025</p>
            </div>
         </div>
         <div class="border-t-4 border-white text-5xl mt-20 flex pt-1">
            <div class="w-1/3" style="font-family: VariableFont">Projects</div>
            <div class="w-1/3 text-2xl">
               <div>
                  <p class="font-semibold">奇安信 白泽项目组</p>
                  <p class="font-normal italic">Vue.js + Ecarts + D3.js</p>
               </div>
               <div class="mt-10">And more... need time to organize && update</div>
            </div>
            <div class="text-2xl w-1/3 italic text-right font-light">
               <p>2023 - 2024</p>
            </div>
         </div>
         <div class="border-t-4 border-white text-5xl mt-20 flex pt-1">
            <div class="w-1/3" style="font-family: VariableFont">Org</div>
            <div class="text-2xl w-1/3">
               <div>
                  <p class="font-semibold">CSU IOS CLUB</p>
                  <p class="font-normal italic">Technical Consultant</p>
               </div>
               <div class="mt-10">
                  <p class="font-semibold">CSU Visualization</p>
                  <p class="font-normal italic">Developer</p>
               </div>
               <div class="mt-10">FK I don't remember need to update later</div>
            </div>
            <div class="text-2xl w-1/3 text-right italic">
               <div>
                  <p>2022-NOW</p>
                  <br />
               </div>
               <div class="mt-10">
                  <p>2023-NOW</p>
                  <br />
               </div>
            </div>
         </div>
         <div class="border-t-4 border-white text-5xl mt-20 flex pt-1">
            <div class="w-1/3" style="font-family: VariableFont">Skills</div>
            <div class="w-1/3 text-2xl">
               HTML <br />
               CSS<br />
               Rust<br />
               Python<br />
               JavaScript<br />
               TypeScript<br /><br />

               Git<br />
               Docker<br />
               Vim<br />
            </div>
            <div class="w-1/3 text-2xl">
               Vue.js<br />
               Svelte<br />
               TailwindCSS<br /><br />

               Echarts<br />
               D3.js<br />
               Three.js<br />
               Element-plus<br /><br />
            </div>
         </div>
      </div>
   </div>
</template>

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
