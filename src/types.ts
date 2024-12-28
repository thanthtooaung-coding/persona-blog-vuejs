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
  iconName: Component
  description?: string
  posts?: Array<{ id: number; title: string }>
}

export interface PostDto {
  postId: number
  postTitle: string
  postDescription: string
  categoryCode: string
}

export interface CategoryPostDto {
  categoryId: number
  categoryName: string
  categoryDescription: string
  iconName: string
  posts: PostDto[]
}
