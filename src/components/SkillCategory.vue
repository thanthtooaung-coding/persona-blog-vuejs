<template>
    <div class="bg-white rounded-lg shadow-xl p-6">
      <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-4">
        {{ title }}
      </h3>
      <div class="space-y-4">
        <div v-for="skill in skills" :key="skill.name" class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">{{ skill.name }}</span>
            <span class="text-gray-600">{{ skill.level }}%</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-500 ease-out"
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    skills: Array<{ name: string; level: number }>;
  }>();
  </script>
  
  