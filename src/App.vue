<template>
   <div v-if="isReady">
      <navigation />
      <router-view></router-view>
   </div>
   <div>
      <loading :onLoading="onLoading" ref="childrenRef" />
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount, Ref } from 'vue'
import loading from './components/index/loading.vue'
import navigation from './components/navigation/navigation.vue'

let interval

const isReady: Ref<boolean> = ref(false)
let onLoading: Ref<number> = ref(0)
const childrenRef: Ref<any> = ref(null)

const finishLoading = function () {
   childrenRef.value.finishLoading()
}

onBeforeMount(() => {
   interval = setInterval(
      () => {
         onLoading.value += Math.floor(Math.random() * 50) 
         if (onLoading.value >= 100) {
            clearInterval(interval)
            isReady.value = true
         }
      },
      500 + Math.random() * 500
   ) 
})

onMounted(() => {
   setTimeout(() => {
      clearInterval(interval)
      onLoading.value = 100
   }, 2000)
   setTimeout(() => {
      finishLoading()
   }, 3200)
   setTimeout(() => {
      isReady.value = true
   }, 3500)
})
</script>
