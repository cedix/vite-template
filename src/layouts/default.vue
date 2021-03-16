<script setup>
  import TheHeader from '../components/header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex flex-1 bg-gray-50">
      <router-view class="w-full" />
    </main>
  </div>
</template>
