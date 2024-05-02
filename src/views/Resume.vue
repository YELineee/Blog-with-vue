<template>
   <div
      class="grid-bg md:flex justify-center overflow-hidden pb-10 px-[6vw]"
      style="user-select: none"
   >
      <div class="md:w-1/3 text-white">
         <div
            class="text-[100px] md:text-[160px] mt-[15vh] leading-[0.8] relative"
            style="font-family: VariableFont"
         >
            HanJun<br />Daniel<br />Pan
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

            <div class="w-full justify-end mt-10 hidden md:block">
               <div class="w-20 h-10 p-[2px] border-white border-2 flex bg-transparent text-white">
                  <div
                     class="w-1/2 h-full text-[26px] flex justify-center items-center text-center"
                     @click="changeLanguage"
                     :class="{ activeee: selectedLanguage === 'en' }"
                  >
                     EN
                  </div>
                  <div
                     class="w-1/2 h-full text-[26px] flex justify-center items-center text-center"
                     @click="changeLanguage"
                     :class="{ activeee: selectedLanguage === 'zh' }"
                  >
                     中
                  </div>
               </div>
            </div>
         </div>
         <div
            class="text-[50px] md:text-[70px] mt-[20vh] leading-[1] whitespace-nowrap"
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
         <div class="w-full justify-end mt-10 block md:hidden">
            <div class="w-full h-10 p-[2px] border-white border-2 flex bg-transparent text-white">
               <div
                  class="w-1/2 h-full text-[26px] flex justify-center items-center text-center"
                  @click="changeLanguage"
                  :class="{ activeee: selectedLanguage === 'en' }"
               >
                  EN
               </div>
               <div
                  class="w-1/2 h-full text-[26px] flex justify-center items-center text-center"
                  @click="changeLanguage"
                  :class="{ activeee: selectedLanguage === 'zh' }"
               >
                  中
               </div>
            </div>
         </div>
         <component :is="selectedLanguage === 'zh' ? resumeZh : resumeEn" />
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import resumeZh from '@/components/resume/resume-zh.vue'
import resumeEn from '@/components/resume/resume-en.vue'

const selectedLanguage = ref('en')

const changeLanguage = () => {
   selectedLanguage.value = selectedLanguage.value === 'zh' ? 'en' : 'zh'
}
</script>

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

.activeee {
   color: #000000;
   background: #ffffff;
}
</style>
