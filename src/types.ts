import type { Component } from 'vue'

export interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  date: string
  imageUrl: string
  category: string
  excerpt?: string
}

export interface Category {
  id: number
  name: string
  icon: Component
  description?: string
  posts?: Array<{ id: number; title: string }>
}
