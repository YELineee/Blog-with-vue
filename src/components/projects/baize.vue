<template>
   <div class="grid-bg text-white pt-[10vh] md:pt-[20vh] px-4 md:px-[5vw] pb-48 overflow-x-hidden">
      <div class="text-3xl md:text-8xl w-full border-b-2 border-white">奇安信 白泽</div>

      <img class="mt-10 md:mt-20 md:w-2/3 mx-auto" src="@/assets/img/IMG_5087.webp" alt="" />

      <div class="mb-10 md:mt-[10vh] mt-20 text-2xl md:text-5xl w-full border-b-2 border-white">
         项目介绍
      </div>

      <div class="text-sm md:text-2xl px-1">
         <div>
            <p>
               从头开始重构原有的Vue2项目，转向使用Vue3版本的白泽项目。在这个新版本中，我们添加了更多的新功能，并引入了新的可视化图表以满足新的需求
            </p>
            <p class="mt-2 md:mt-10">项目地址：asdasdasdasddsadas</p>
         </div>
      </div>

      <div class="mb-10 md:mt-[10vh] mt-20 text-2xl md:text-5xl w-full border-b-2 border-white">
         项目速览
      </div>

      <div class="text-sm md:text-2xl pl-1 mb-8 md:mb-32">
         主页
         <div
            class="md:h-80 flex overflow-x-scroll hide-scrollbar"
            @mousedown="mouseDown"
            @mouseleave="leave"
            @mouseup="up"
            @mousemove="move"
            ref="scrollContainer"
         >
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
         </div>
      </div>

      <div class="text-sm md:text-2xl pl-1 mb-1">
         主页
         <div
            class="md:h-80 flex overflow-x-scroll hide-scrollbar"
            @mousedown="mouseDown"
            @mouseleave="leave"
            @mouseup="up"
            @mousemove="move"
            ref="scrollContainer"
         >
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
            <img
               draggable="false"
               class="mr-10 w-2/3 md:w-full h-2/3 md:h-full"
               src="@/assets/img/IMG_5087.webp"
               alt=""
            />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isDown: false,
         startX: 0,
         scrollLeft: 0
      }
   },
   methods: {
      mouseDown(e) {
         this.isDown = true
         this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft
         this.scrollLeft = this.$refs.scrollContainer.scrollLeft
      },
      leave() {
         this.isDown = false
      },
      up() {
         this.isDown = false
      },
      move(e) {
         if (!this.isDown) return
         e.preventDefault()
         const x = e.pageX - this.$refs.scrollContainer.offsetLeft
         const walk = (x - this.startX) * 1.5 //scroll-fast
         this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk
      }
   }
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

.hide-scrollbar {
   /* Chrome, Edge and Safari */
   scrollbar-width: none; /* Firefox */
   -ms-overflow-style: none; /* IE and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
   display: none; /* Chrome, Edge and Safari */
}
</style>
