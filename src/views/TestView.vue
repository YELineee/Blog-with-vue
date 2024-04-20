<template>
   <main class="flex__col">
      <nav class="menu flex">
         <a href="#" class="menu__left"> Lorem ipsum </a>
         <ul class="menu__right flex">
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
      </nav>
      <section class="intro flex">
         <h1>GSAP Scroll animation<br />Text border on image</h1>
         <img
            src="https://images.unsplash.com/photo-1680268719962-acaffc32c3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
         />
         <p>
            Challenge 1 heure : Inspiration de l'animation du site
            <a href="https://www.torebentsen.com/">Tore S.Bentsen</a> (SOTD, 9 Avril, 2023)
            <br /><br />
            1 hour challenge : Insprired by
            <a href="https://www.torebentsen.com/">Tore S.Bentsen</a> website animation (SOTD, Apr
            9, 2023) <br /><br />
            Nulla hendrerit metus lacinia magna rhoncus suscipit. Sed faucibus posuere tempor. Ut
            suscipit et urna a gravida.
         </p>
      </section>
      <section class="list flex__col">
         <div class="list__item flex">
            <img
               src="https://images.unsplash.com/photo-1680268719962-acaffc32c3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            />
            <div class="list__item__title">Lorem ipsum</div>
            <div class="list__item__titleOutline">Lorem ipsum</div>
            <ul class="list__item__infos flex">
               <li><span>AGENCY</span> OKADA AGENTS</li>
               <li><span>ROLE</span> LEAD DESIGNER / DEVELOPER</li>
               <li><span>CLIENT</span> ROBERTO STUDIO</li>
               <li><span>YEAR</span> 2023</li>
            </ul>
            <div class="list__item__type">WEBSITE</div>
            <div class="list__item__project">PORTFOLIO</div>
         </div>

         <div class="list__item flex">
            <img
               src="https://images.unsplash.com/photo-1681068634386-50f0e81f50cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
            <div class="list__item__title">Lorem ipsum</div>
            <div class="list__item__titleOutline">Lorem ipsum</div>
            <ul class="list__item__infos flex">
               <li><span>AGENCY</span> OKADA AGENTS</li>
               <li><span>ROLE</span> LEAD DESIGNER / DEVELOPER</li>
               <li><span>CLIENT</span> ROBERTO STUDIO</li>
               <li><span>YEAR</span> 2023</li>
            </ul>
            <div class="list__item__type">WEBSITE</div>
            <div class="list__item__project">PORTFOLIO</div>
         </div>

         <div class="list__item flex">
            <img
               src="https://images.unsplash.com/photo-1680978560866-481aff9fd6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
            <div class="list__item__title">Lorem ipsum</div>
            <div class="list__item__titleOutline">Lorem ipsum</div>
            <ul class="list__item__infos flex">
               <li><span>AGENCY</span> OKADA AGENTS</li>
               <li><span>ROLE</span> LEAD DESIGNER / DEVELOPER</li>
               <li><span>CLIENT</span> ROBERTO STUDIO</li>
               <li><span>YEAR</span> 2023</li>
            </ul>
            <div class="list__item__type">WEBSITE</div>
            <div class="list__item__project">PORTFOLIO</div>
         </div>
      </section>
   </main>
</template>

<script>
// YourComponent.vue

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
   // ... 其他组件选项

   mounted() {
      // 在组件加载后注册插件
      gsap.registerPlugin(ScrollTrigger)

      // 执行你的动画逻辑
      this.animateItems()
   },

   methods: {
      animateItems() {
         var items = document.querySelectorAll('.list__item')

         items.forEach((item) => {
            var itemTitle = item.querySelector('.list__item__title')
            var itemTitleOutline = item.querySelector('.list__item__titleOutline')
            var itemImg = item.querySelector('.list__item img')

            var itemTL = gsap.timeline({
               scrollTrigger: {
                  trigger: item,
                  start: '0% 75%',
                  end: '25% 50%',
                  scrub: 3
               }
            })

            itemTL.fromTo(
               itemTitle,
               { scale: 2, y: '100%' },
               { scale: 1, y: '0%', ease: 'power2.inOut' },
               0
            )
            itemTL.fromTo(
               itemTitleOutline,
               { scale: 2, y: '100%' },
               { scale: 1, y: '0%', ease: 'power2.inOut' },
               0
            )

            gsap.fromTo(
               itemImg,
               { x: '60vw', y: '60vh', rotate: -30 },
               {
                  x: '-60vw',
                  y: '-60vh',
                  rotate: 30,
                  ease: 'none',
                  scrollTrigger: {
                     trigger: item,
                     start: '50% 100%',
                     end: '100% 50%',
                     scrub: 3
                  }
               }
            )
         })
      }
   }
}
</script>

<style scoped>
:root {
   --font1: 'Poppins';
   --font2: 'Playfair Display';
   --dark: #221608;
}

body {
   margin: 0;
   background-color: #f7f0ea;
   font-family: var(--font1);
   overflow-x: hidden;
}

.flex,
.flex__col {
   display: flex;
   justify-content: center;
   align-items: center;
}

.flex__col {
   flex-direction: column;
}

ul {
   margin: 0;
   padding: 0;
   list-style: none;
}

main {
   width: 100%;
}

.menu {
   position: fixed;
   top: 0;
   left: 50%;
   width: calc(100% - 80px);
   justify-content: space-between;
   margin: 40px 0;
   transform: translatex(-50%);
}

.menu a {
   font-size: 1vw;
   font-weight: 600;
   color: var(--dark);
   text-decoration: none;
}

.menu ul {
   gap: 20px 60px;
}

.intro {
   position: relative;
   width: calc(100% - 80px);
   min-height: 100vh;
   gap: 80px;
}

.intro h1 {
   width: 50%;
   font-weight: 700;
   font-size: 4.8vw;
   line-height: 100%;
   text-transform: uppercase;
}

.intro img {
   position: absolute;
   z-index: -1;
   top: 50%;
   right: 50%;
   width: 33%;
   height: auto;
   aspect-ratio: 9/14;
   object-fit: cover;
   opacity: 0.2;
   transform: translateY(-50%);
}

.intro p {
   width: 50%;
   font-size: 1.6vw;
}

.intro p a {
   color: #000;
}

.list__item {
   position: relative;
   width: 100vw;
   height: calc(100vh - 40px);
   align-items: flex-end;
   padding-bottom: 40px;
}

.list__item__title,
.list__item__titleOutline {
   position: absolute;
   z-index: 1;
   top: 50%;
   left: 50%;
   font-family: var(--font2);
   font-size: 21vw;
   font-weight: 700;
   line-height: 80%;
   color: var(--dark);
   text-align: center;
   transform: translate(-50%, -50%);
}

.list__item__titleOutline {
   z-index: 3;
   color: transparent;
   -webkit-text-stroke: 2px var(--dark);
}

.list__item img {
   position: absolute;
   z-index: 2;
   top: 50%;
   left: 50%;
   width: 33%;
   height: auto;
   aspect-ratio: 9/14;
   object-fit: cover;
   transform: translate(-50%, -50%);
}

ul.list__item__infos {
   width: calc(100% - 80px);
   justify-content: space-between;
}

.list__item__infos li {
   font-size: 1vw;
}

.list__item__infos li span {
   color: #818181;
}

.list__item__type,
.list__item__project {
   position: absolute;
   top: 50%;
   font-size: 1vw;
   writing-mode: vertical-lr;
   text-orientation: upright;
   transform: translateY(-50%);
   color: #818181;
}

.list__item__type {
   left: 36px;
}

.list__item__project {
   right: 36px;
}

@media (min-width: 1900px) {
   .list__item__title,
   .list__item__titleOutline {
      font-size: 450px;
   }

   .list__item img,
   .intro__img {
      width: auto;
      height: 80%;
   }
}
</style>
