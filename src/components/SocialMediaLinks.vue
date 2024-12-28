<template>
  <div class="flex space-x-4">
    <a
      v-for="account in socialMediaAccounts"
      :key="account.platform"
      :href="account.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-600 transition-colors duration-300"
    >
      <component :is="getIconComponent(account.icon)" class="h-6 w-6" />
      <span class="sr-only">{{ account.platform }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { socialMediaAccounts } from '@/config/socialMediaConfig'
import { getIconComponent } from '@/utils/iconUtils'
</script>
