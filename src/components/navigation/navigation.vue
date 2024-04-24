<template>
   <nav class="menu flex" :class="{ hide: isScrolled, show: isScrolledUp }">
      <a href="https://github.com/YELineee" class="menu__left"> YELineee </a>
      <ul class="menu__right flex">
         <li><a href="/music" @click="test()">MUSic</a></li>
         <li><a href="/yakyak">YAKYak</a></li>
         <li><a href="/resume">ABOut</a></li>
      </ul>
   </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isScrolledUp = ref(false)
const lastScrollY = ref(0)
let scrollTimeout = null

const handleScroll = () => {
   const currentScrollY = window.scrollY

   isScrolled.value = currentScrollY > 100
   isScrolledUp.value = currentScrollY < lastScrollY.value - 0.01
   lastScrollY.value = currentScrollY

   clearTimeout(scrollTimeout)
   scrollTimeout = setTimeout(() => {
      isScrolledUp.value = false
      showNavigation(false) // 隐藏导航栏
   }, 1000)
}

const showNavigation = (show) => {
   // 根据show参数来切换导航栏的显示和隐藏
   isScrolled.value = show
}

const setCurrentPage = () => {
   const path = window.location.pathname
   const menuLeft = document.querySelector('.menu__left')
   const menuLinks = document.querySelectorAll('.menu__right li a')
   if (path === '/music') {
      menuLeft.style.color = '#ffffff'
      menuLinks.forEach((link) => {
         link.style.color = '#ffffff'
      })
   } else  {
      menuLeft.style.color = '#ffffff'
      menuLinks.forEach((link) => {
         link.style.color = '#ffffff'
      })
   }
}

onMounted(() => {
   window.addEventListener('scroll', handleScroll)
   setCurrentPage()
})

onBeforeUnmount(() => {
   window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
ul {
   /* position: absolute; */
   margin: 0;
   padding: 0;
   list-style: none;
}

.menu {
   z-index: 100;
   position: fixed;
   top: 0;
   left: 50%;
   width: calc(100vw - 80px);
   justify-content: space-between;
   margin: 40px 0;
   transform: translatex(-50%);
   transition: top 0.3s;
}

.menu.hide {
   top: -100px;
}

.menu.show {
   top: 0;
}

.menu a {
   font-weight: 600;
   color: #ffffff;
   text-decoration: none;
}

.menu ul {
   gap: 20px 60px;
}

@media screen and (max-width: 768px) {
   .menu {
      margin: 20px 0;
      font-size: 10px;
      z-index: 100;
      position: fixed;
      left: 50%;
      width: 90%;
      margin: 20px 0;
      transform: translatex(-50%);
      transition: top 0.3s;
   }

   .menu ul {
      gap: 20px 30px;
   }
}
</style>
