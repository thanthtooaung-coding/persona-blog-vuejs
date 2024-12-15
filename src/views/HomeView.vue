<template>
  <main class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
    <h1 class="text-5xl font-extrabold text-center mb-12">
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 animate-gradient"
      >
        Latest Posts
      </span>
    </h1>
    <BlogList :posts="posts" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BlogList from '../components/BlogList.vue'
import type { BlogPost } from '../types'

const posts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Vuejs Masterclass 2024 (Vuejs)',
    content:
      "Vue 3 and TypeScript make a powerful combination for building robust web applications. In this post, we'll explore how to set up a new project and leverage the benefits of static typing in your Vue components.",
    author: 'Thant Htoo Aung',
    date: '2024-12-12',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Learning',
  },
  {
    id: 2,
    title: 'Chatify (Chat Application using React, Go)',
    content:
      'Chatify is a chat application developed by Thant Htoo Aung (Github - thanthtooaung-coding). Tech Stack - React, Go, RabbitMQ, WebSocket',
    author: 'Thant Htoo Aung',
    date: '2024-11-20',
    imageUrl:
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Full-Stack',
  },
  {
    id: 3,
    title: 'Work From Home System (Java Spring Boot)',
    content:
      'WorkHub: Work From Home System is developed by Thant Htoo Aung for DIR-ACE Technology',
    author: 'Thant Htoo Aung',
    date: '2024-04-24',
    imageUrl:
      'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Java',
  },
])
</script>
