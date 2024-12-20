<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mt-20 mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="mt-1 block w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Reset the form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  alert('Thank you for your message. We will get back to you soon!')
}
</script>
