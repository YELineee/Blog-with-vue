<template>
  <div class="w-full h-full">
    <div class="h-[100vh] w-full bg-slate-200 flex justify-center items-center overflow-hidden" ref="mianPage">
      <div class="text-center text-[200px] leading-[200px] mix-blend-multiply text-violet-800" style="font-family: VariableFont;">
        <p ref="text_1" class="select-none" @click="changeColor()">SADless</p>
        <p ref="text_2" class="select-none" @click="changeFontColor()">HOPEless</p>
        <p ref="text_3" class="select-none">WORTHless</p>
      </div>
    </div>
    <div class="w-full h-[100vh]">
      <!-- <div></div>
      <img src="../assets/img/IMG_1437.jpg" alt="" class=""> -->
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit' 

export default {
  mounted() {
    // this.$nextTick(() => {
    //   new TypeIt(this.$refs.text_1, {
    //     strings: ["SADless","SADlessssss"],
    //     speed: 100,  
    //     waitUntilVisible: true,
    //     cursor: false
    //   }).go();
    // });
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollDistance = window.scrollY;

      this.$refs.text_1.style.fontSize = `${ 200 + scrollDistance / 1}px`; 
      this.$refs.text_1.style.opacity = 1.1 - scrollDistance / 600;
      this.$refs.text_1.style.transform = `rotate(-${scrollDistance / 20}deg) translateX(-${scrollDistance * 1.1}px)`;

      this.$refs.text_2.style.fontSize = `${200 + scrollDistance / 0.7}px`; 
      this.$refs.text_2.style.opacity = 1.2 - scrollDistance/ 600;
      this.$refs.text_2.style.transform = `rotate(${scrollDistance / 20}deg) translateX(${scrollDistance * 1.2}px)`;

      this.$refs.text_3.style.fontSize = `${200 + scrollDistance / 0.8}px`; 
      this.$refs.text_3.style.opacity = 1.3 - scrollDistance / 600;
      this.$refs.text_3.style.transform = `rotate(-${scrollDistance / 100}deg) translateY(-${scrollDistance * 0.1}px)`;
    },

    changeColor() {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.$refs.mianPage.style.backgroundColor = randomColor;
    },
    changeFontColor() {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.$refs.text_1.style.color = randomColor;
      this.$refs.text_2.style.color = randomColor;
      this.$refs.text_3.style.color = randomColor;
    }
  }
}
</script>

<style>
.animated-text {
  transition: transform 0.1s ease, font-size 0.1s ease, opacity 0.1s ease;
}
</style>
