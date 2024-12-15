<template>
  <article
    class="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group"
  >
    <div class="relative overflow-hidden">
      <img
        :src="post.imageUrl"
        :alt="post.title"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 m-2 rounded"
      >
        {{ post.category }}
      </div>
    </div>
    <div class="p-6">
      <h2
        class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300"
      >
        {{ post.title }}
      </h2>
      <p class="text-sm text-gray-500 mb-4 flex items-center">
        <CalendarIcon class="h-4 w-4 mr-1" />
        {{ formatDate(post.date) }}
        <span class="mx-2">•</span>
        <UserIcon class="h-4 w-4 mr-1" />
        {{ post.author }}
      </p>
      <p class="text-gray-700 mb-4">{{ truncateContent(post.content) }}</p>
      <router-link
        :to="{ name: 'ReadMore', params: { id: post.id } }"
        class="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 relative overflow-hidden group"
      >
        <span class="relative z-10">Read More</span>
        <span
          class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></span>
      </router-link>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { CalendarIcon, UserIcon } from 'lucide-vue-next'
import type { BlogPost } from '../types'

defineProps<{
  post: BlogPost
}>()

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const truncateContent = (content: string, maxLength: number = 100): string => {
  return content.length > maxLength ? content.slice(0, maxLength) + '...' : content
}
</script>
