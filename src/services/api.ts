import axios from 'axios'
import type { Category, CategoryPostDto, PostDto } from '../types'
import { BACKENDAPI } from '@/config/apiConfig'

const API_URL = BACKENDAPI

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await api.get<Category[]>('/categories')
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  },
  async getCategoriesWithPosts(): Promise<CategoryPostDto[]> {
    try {
      const response = await api.get<CategoryPostDto[]>('/categories/with-posts')
      return response.data
    } catch (error) {
      console.error('Error fetching categories with posts:', error)
      throw error
    }
  },
  async getCategoryById(id: number): Promise<Category> {
    try {
      const response = await api.get<Category>(`/categories/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching category:', error)
      throw error
    }
  },
  async createCategory(category: Category): Promise<Category> {
    try {
      const response = await api.post<Category>('/categories', category)
      return response.data
    } catch (error) {
      console.error('Error creating category:', error)
      throw error
    }
  },
  async updateCategory(category: Category): Promise<Category> {
    try {
      const response = await api.put<Category>(`/categories/${category.id}`, category)
      return response.data
    } catch (error) {
      console.error('Error updating category:', error)
      throw error
    }
  },
  async deleteCategory(id: number): Promise<void> {
    try {
      await api.delete(`/categories/${id}`)
    } catch (error) {
      console.error('Error deleting category:', error)
      throw error
    }
  },
  async deleteAllCategories(): Promise<void> {
    try {
      await api.delete('/categories')
    } catch (error) {
      console.error('Error deleting all categories:', error)
      throw error
    }
  },
}

export const postService = {
  async getRecentPosts(): Promise<PostDto[]> {
    try {
      const response = await api.get('/posts/recent')
      return response.data
    } catch (error) {
      console.error('Error fetching posts:', error)
      throw error
    }
  },
}
