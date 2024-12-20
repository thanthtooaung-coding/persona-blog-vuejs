<template>
    <div class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-pink-600"></div>
      <div class="space-y-12">
        <div v-for="(event, index) in events" :key="index" class="relative">
          <div class="flex items-center">
            <div class="flex-1" :class="{ 'text-right pr-8': index % 2 === 0, 'order-2 pl-8': index % 2 !== 0 }">
            <h4 class="text-lg font-semibold text-indigo-600">{{ event.date }}</h4>
            <h5 class="text-gray-800 font-medium">{{ event.title }}</h5>
          </div>
          <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full"></div>
          <div class="flex-1 pl-8" :class="{ 'order-1': index % 2 !== 0 }">
            <p class="text-gray-600">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    events: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  }>();
  </script>
  
  