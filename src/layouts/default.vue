<script setup>
  import TheHeader from '../components/header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-1 bg-gray-50">
      <div class="max-w-5xl m-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
