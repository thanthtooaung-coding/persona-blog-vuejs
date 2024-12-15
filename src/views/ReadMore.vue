<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div v-if="post" class="max-w-4xl mx-auto mt-16">
      <!-- Hero Section -->
      <div
        class="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
      >
        <div class="relative h-96">
          <img :src="post.imageUrl" :alt="post.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
            <div class="absolute bottom-0 p-8">
              <div
                class="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-sm font-semibold"
              >
                {{ post.category }}
              </div>
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ post.title }}</h1>
              <div class="flex items-center text-white/90 space-x-4">
                <div class="flex items-center">
                  <UserIcon class="h-5 w-5 mr-2" />
                  <span>{{ post.author }}</span>
                </div>
                <div class="flex items-center">
                  <CalendarIcon class="h-5 w-5 mr-2" />
                  <span>{{ formatDate(post.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="p-8">
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-gray-700 mb-6 leading-relaxed">{{ post.content }}</p>
            <div
              class="my-8 p-6 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg border border-indigo-100"
            >
              <h2
                class="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
              >
                Key Takeaways
              </h2>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <CheckCircleIcon class="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                  <span
                    >Vue 3's Composition API provides a more flexible way to organize component
                    logic</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                  <span
                    >TypeScript integration enhances development experience with better
                    tooling</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                  <span
                    >Modern build tools make it easier than ever to start a new Vue project</span
                  >
                </li>
              </ul>
            </div>
            <blockquote
              class="border-l-4 border-gradient-to-r from-indigo-600 to-pink-600 pl-4 my-8"
            >
              <p class="text-xl italic text-gray-700">
                "Vue 3 and TypeScript make a powerful combination for building robust web
                applications."
              </p>
            </blockquote>
            <p class="text-gray-700">
              In conclusion, this article has covered several important aspects of modern Vue.js
              development. We hope you found it informative and engaging.
            </p>
          </div>
        </div>
      </div>

      <!-- Share Section -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3
          class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
        >
          Share this article
        </h3>
        <div class="flex flex-wrap gap-4">
          <button
            @click="shareOnTwitter"
            class="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full hover:from-indigo-700 hover:to-pink-700 transition duration-300"
          >
            <TwitterIcon class="h-5 w-5 mr-2" />
            Share on Twitter
          </button>
          <button
            @click="shareOnFacebook"
            class="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full hover:from-indigo-700 hover:to-pink-700 transition duration-300"
          >
            <FacebookIcon class="h-5 w-5 mr-2" />
            Share on Facebook
          </button>
          <button
            @click="shareOnLinkedIn"
            class="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full hover:from-indigo-700 hover:to-pink-700 transition duration-300"
          >
            <LinkedinIcon class="h-5 w-5 mr-2" />
            Share on LinkedIn
          </button>
        </div>
      </div>

      <!-- Comment Section -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3
          class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
        >
          Leave a comment
        </h3>
        <form @submit.prevent="submitComment" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="commentForm.name"
                required
                class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="commentForm.email"
                required
                class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label for="comment" class="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              id="comment"
              v-model="commentForm.comment"
              rows="4"
              required
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 px-4 rounded-md hover:from-indigo-700 hover:to-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="flex justify-center items-center h-64">
      <div class="relative">
        <div
          class="h-16 w-16 rounded-full border-t-2 border-b-2 border-indigo-600 animate-spin"
        ></div>
        <div
          class="h-16 w-16 rounded-full border-t-2 border-b-2 border-pink-600 animate-spin absolute top-0 left-0"
          style="animation-direction: reverse"
        ></div>
      </div>
    </div>

    <!-- Back to Home Button -->
    <div class="mt-8 text-center">
      <router-link
        to="/"
        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full hover:from-indigo-700 hover:to-pink-700 transition duration-300"
      >
        <ArrowLeftIcon class="h-5 w-5 mr-2" />
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  CalendarIcon,
  UserIcon,
  ArrowLeftIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  CheckCircleIcon,
} from 'lucide-vue-next'
import type { BlogPost } from '../types'

const route = useRoute()
const post = ref<BlogPost | null>(null)

const commentForm = ref({
  name: '',
  email: '',
  comment: '',
})

onMounted(async () => {
  // Simulating API call to fetch post data
  const postId = Number(route.params.id)
  // Replace this with actual API call in a real application
  post.value = {
    id: postId,
    title: 'Vuejs Masterclass 2024 (Vuejs)',
    content:
      "Vue 3 and TypeScript make a powerful combination for building robust web applications. In this post, we'll explore how to set up a new project and leverage the benefits of static typing in your Vue components.",
    author: 'Thant Htoo Aung',
    date: '2024-12-12',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Learning',
  }
})

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`Check out this awesome article: ${post.value?.title}`)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value?.title || '')
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank')
}

const submitComment = () => {
  // Here you would typically send the comment to your backend
  console.log('Comment submitted:', commentForm.value)
  // Reset the form
  commentForm.value = { name: '', email: '', comment: '' }
  // Show a success message (you could use a toast notification here)
  alert('Comment submitted successfully!')
}
</script>

<style scoped>
/* Gradient border for blockquote */
blockquote {
  border-image: linear-gradient(to bottom, #4f46e5, #db2777) 1;
}
</style>
