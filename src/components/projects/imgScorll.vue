<template>
   <div class="text-sm md:text-2xl pl-1 mb-8 md:mb-32">
      <div class="text-2xl md:text-4xl pb-2">
         {{ title }}
      </div>
      <div class=" text-zinc-300 text-sm md:text-xl italic mb-2">
         {{ images.length }} screen

      </div>
      <div
         class="md:h-80 flex overflow-x-scroll hide-scrollbar"
         @mousedown="mouseDown"
         @mouseleave="leave"
         @mouseup="up"
         @mousemove="move"
         ref="scrollContainer"
      >
         <img
            v-for="(image, index) in imageList"
            :key="index"
            draggable="false"
            class=" mr-4 md:mr-10 w-2/3 md:w-full h-2/3 md:h-full"
            :src="image.src"
            :alt="image.alt"
         />
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isDown: false,
         startX: 0,
         scrollLeft: 0,
         imageList: []
      }
   },
   props: {
      title: {
         type: String,
         required: true
      },
      images: {
         type: Array,
         required: true
      }
   },
   mounted() {
      console.log(this.images.length)
      this.imageList = this.images 
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
         const walk = (x - this.startX) * 1.2
         this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk
      }
   }
}
</script>

<style scoped>
.hide-scrollbar {
   scrollbar-width: none; /* Firefox */
   -ms-overflow-style: none; /* IE and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
   display: none; /* Chrome, Edge and Safari */
}
</style>
