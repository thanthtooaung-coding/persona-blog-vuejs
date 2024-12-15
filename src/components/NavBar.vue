<template lang="">
  <header
    class="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg fixed w-full z-10 transition-all duration-300"
    :class="{ 'shadow-md': scrolled }"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <BookOpenIcon class="h-8 w-8 text-indigo-600 mr-2 animate-pulse" />
          <router-link
            to="/"
            class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
          >
            Vinn's Personal Blog
          </router-link>
        </div>
        <div class="hidden md:flex space-x-4">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-100 relative overflow-hidden group"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></span>
          </router-link>
        </div>
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
        >
          <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </nav>
    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-100"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { BookOpenIcon, MenuIcon, XIcon } from 'lucide-vue-next'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Categories', href: '/categories' },
  { name: 'Contact', href: '/contact' },
]

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang=""></style>
