<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mt-12 mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Welcome to My Blog</h1>

      <!-- Featured Post -->
      <div v-if="featuredPost" class="mb-12 bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              :src="featuredPost.imageUrl"
              alt="Featured post"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Featured
            </div>
            <router-link
              :to="{ name: 'ReadMore', params: { id: featuredPost.id } }"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >{{ featuredPost.title }}
            </router-link>
            <p class="mt-2 text-gray-500">{{ featuredPost.excerpt }}</p>
            <div class="mt-4">
              <router-link
                :to="{ name: 'ReadMore', params: { id: featuredPost.id } }"
                class="text-indigo-500 hover:text-indigo-600 font-medium"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <div class="mb-12 bg-white rounded-lg shadow-xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Subscribe to My Newsletter</h2>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col md:flex-row gap-4">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <button
            type="submit"
            class="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </form>
      </div>

      <!-- Recent Posts -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="post in recentPosts"
            :key="post.postId"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img :src="post.imageUrl" :alt="post.postTitle" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">{{ post.postTitle }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.postDescription }}</p>
              <router-link
                :to="{ name: 'ReadMore', params: { id: post.postId } }"
                class="text-indigo-500 hover:text-indigo-600 font-medium"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Categories Preview -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
        <div v-if="categoriesLoading" class="text-center mb-4">
          <p class="text-gray-600">Loading categories...</p>
        </div>
        <div v-if="categoriesError" class="text-red-600 mb-4">
          {{ categoriesError }}
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="{ name: 'categories', params: { id: category.id } }"
            class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <component
              :is="getIconComponent(category.iconName)"
              class="w-12 h-12 mx-auto mb-2 text-indigo-500"
            />
            <span class="font-medium text-gray-800">{{ category.name }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { BlogPost, Category, PostDto } from '../types'
import { categoryService, postService } from '../services/api'
import { getIconComponent } from '@/utils/iconUtils'

const email = ref('')

const categories = ref<Category[]>([])
const categoriesLoading = ref(true)
const categoriesError = ref<string | null>(null)

const recentPosts = ref<PostDto[]>([])
const recentPostsLoading = ref(true)
const recentPostsError = ref<string | null>(null)

const featuredPost: BlogPost = {
  id: 1,
  title: 'The Future of Web Development',
  excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
  imageUrl:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  content: '', // Full content
  author: 'John Doe',
  date: '2024-03-15',
  category: 'Technology',
}

// const recentPosts: BlogPost[] = [
//   {
//     id: 2,
//     title: 'Getting Started with Vue 3',
//     excerpt: 'Learn the basics of Vue 3 and start building reactive web applications.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     content: '', // Full content
//     author: 'Thant Htoo Aung',
//     date: '2024-03-10',
//     category: 'Development',
//   },
//   {
//     id: 3,
//     title: 'The Art of UI Design',
//     excerpt: 'Discover the principles of creating beautiful and intuitive user interfaces.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     content: '', // Full content
//     author: 'Thant Htoo Aung',
//     date: '2024-03-05',
//     category: 'Design',
//   },
//   {
//     id: 4,
//     title: 'Mastering TypeScript',
//     excerpt: 'Take your JavaScript skills to the next level with TypeScript.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     content: '', // Full content
//     author: 'Thant Htoo Aung',
//     date: '2024-02-28',
//     category: 'Development',
//   },
// ]

const fetchCategories = async () => {
  try {
    categoriesLoading.value = true
    categoriesError.value = null
    categories.value = await categoryService.getCategories()
  } catch (error) {
    console.error('Error fetching categories:', error)
    categoriesError.value = 'Failed to load categories. Please try again later.'
  } finally {
    categoriesLoading.value = false
  }
}

const fetchRecentPosts = async () => {
  try {
    recentPostsLoading.value = true
    recentPostsError.value = null
    const posts = await postService.getRecentPosts()
    recentPosts.value = posts.map(post => ({
      ...post,
      imageUrl: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }))
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    recentPostsError.value = 'Failed to load recent posts. Please try again later.'
  }
}

const subscribeNewsletter = () => {
  console.log(`Subscribing email: ${email.value}`)
  // Reset the form
  email.value = ''

  alert('Thank you for subscribing to our newsletter!')
}

onMounted(fetchCategories)
onMounted(fetchRecentPosts)
</script>
