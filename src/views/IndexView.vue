<template>
   <desktopView v-if="windowWidth > 1000" />
   <mobileView v-else />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import desktopView from '@/components/index/desktopView.vue'
import mobileView from '@/components/index/mobileView.vue'

const windowWidth = ref(0)

const handleResize = () => {
   windowWidth.value = window.innerWidth
}

onMounted(() => {
   windowWidth.value = window.innerWidth
   window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
   window.removeEventListener('resize', handleResize)
})
</script>
