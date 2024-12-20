<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mt-12 mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Blog Categories</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-2xl font-bold text-gray-800">{{ category.name }}</h2>
              <component :is="category.icon" class="w-8 h-8 text-indigo-500" />
            </div>
            <p class="text-gray-600 mb-4">{{ category.description }}</p>
            <ul class="space-y-2">
              <li
                v-for="post in category.posts"
                :key="post.id"
                class="border-b border-gray-200 last:border-b-0 pb-2 last:pb-0"
              >
                <router-link
                  :to="{ name: 'ReadMore', params: { id: post.id } }"
                  class="text-indigo-600 hover:text-indigo-800"
                >
                  {{ post.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CodeIcon, PenToolIcon, ChartBarIcon, CameraIcon } from 'lucide-vue-next'
import type { Category } from '../types'

const categories: Category[] = [
  {
    id: 1,
    name: 'Development',
    icon: CodeIcon,
    description:
      'Stay up-to-date with the latest in web development technologies and best practices.',
    posts: [
      { id: 1, title: 'Getting Started with Vue 3' },
      { id: 2, title: 'Mastering TypeScript' },
      { id: 3, title: 'Building Scalable APIs with Node.js' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    icon: PenToolIcon,
    description:
      'Explore the world of UI/UX design and learn how to create stunning user interfaces.',
    posts: [
      { id: 4, title: 'The Art of UI Design' },
      { id: 5, title: 'Color Theory for Web Designers' },
      { id: 6, title: 'Responsive Design Best Practices' },
    ],
  },
  {
    id: 3,
    name: 'Business',
    icon: ChartBarIcon,
    description:
      'Discover insights and strategies for running successful tech businesses and startups.',
    posts: [
      { id: 7, title: 'Startup Funding 101' },
      { id: 8, title: 'Marketing Strategies for Tech Companies' },
      { id: 9, title: 'Building a Strong Company Culture' },
    ],
  },
  {
    id: 4,
    name: 'Photography',
    icon: CameraIcon,
    description: 'Learn techniques and tips for capturing stunning photographs for your projects.',
    posts: [
      { id: 10, title: 'Introduction to Product Photography' },
      { id: 11, title: 'Mastering Lighting Techniques' },
      { id: 12, title: 'Post-Processing with Adobe Lightroom' },
    ],
  },
]
</script>
