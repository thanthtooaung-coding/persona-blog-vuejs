<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </TransitionGroup>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TransitionGroup } from 'vue'
import BlogPost from './BlogPost.vue'
import type { BlogPost as BlogPostType } from '../types'

defineProps<{
  posts: BlogPostType[]
}>()
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}
.list-move {
  transition: transform 0.5s;
}
</style>
