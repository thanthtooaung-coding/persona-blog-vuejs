<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
    <NavBar></NavBar>
    <router-view></router-view>
    <footer class="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg mt-12">
      <div
        class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center"
      >
        <span class="text-gray-500 mb-4 md:mb-0"
          >© 2024 Vinn's Personal Blog. All rights reserved.</span
        >
        <div class="flex space-x-4">
          <a
            v-for="item in socialLinks"
            :key="item.name"
            :href="item.href"
            target="_blank"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <component :is="item.icon" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { TwitterIcon, GithubIcon, LinkedinIcon } from 'lucide-vue-next'
import NavBar from './components/NavBar.vue'

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/VinnnDev', icon: TwitterIcon },
  { name: 'GitHub', href: 'https://github.com/thanthtooaung-coding', icon: GithubIcon },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thant-htoo-aung-b47374267',
    icon: LinkedinIcon,
  },
]

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientAnimation 3s ease infinite;
}
</style>
