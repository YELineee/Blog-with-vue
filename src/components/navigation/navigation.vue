<template>
   <nav class="menu flex " :class="{ hide: isScrolled, show: isScrolledUp }">
      <a href="https://github.com/YELineee" class="menu__left "> YELineee </a>
      <ul class="menu__right flex">
         <li><a href="/music">MUSic</a></li>
         <li><a href="/yakyak">YAKYak</a></li>
         <li><a href="/">FEat</a></li>
      </ul>
   </nav>
</template>



<script>
export default {
   data() {
      return {
         isScrolled: false,
         isScrolledUp: false,
         lastScrollY: 0,
         scrollTimeout: null
      }
   },
   mounted() {
      window.addEventListener('scroll', this.handleScroll)
      this.setCurrentPage(); 
   },
   beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
   },
   methods: {
      handleScroll() {
         const currentScrollY = window.scrollY

         this.isScrolled = currentScrollY > 100
         this.isScrolledUp = currentScrollY < this.lastScrollY - 0.01
         this.lastScrollY = currentScrollY

         clearTimeout(this.scrollTimeout)
         this.scrollTimeout = setTimeout(() => {
            this.isScrolledUp = false
            this.showNavigation(false) // 隐藏导航栏
         }, 1000)
      },
      showNavigation(show) {
         // 根据show参数来切换导航栏的显示和隐藏
         this.isScrolled = show
      },
      setCurrentPage() {
         const path = window.location.pathname;
         const menuLeft = document.querySelector('.menu__left');
         const menuLinks = document.querySelectorAll('.menu__right li a');
         if (path === '/music') {
            menuLeft.style.color = '#ffffff'; 
            menuLinks.forEach(link => {
               link.style.color = '#ffffff'; 
            });
         } else if (path === '/yakyak') {
            menuLeft.style.color = '#ffffff';
            menuLinks.forEach(link => {
               link.style.color = '#ffffff';
            });
         } else if (path === '/') {
            menuLeft.style.color = '#000000'; 
            menuLinks.forEach(link => {
               link.style.color = '#000000'; 
            });
         }
      }
   }
}
</script>

<style scoped>
ul {
   margin: 0;
   padding: 0;
   list-style: none;
}

.menu {
   z-index: 100;
   position: fixed;
   top: 0;
   left: 50%;
   width: calc(100% - 80px);
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