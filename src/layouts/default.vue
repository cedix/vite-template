<script setup>
import TheHeader from "../components/header.vue";
</script>

<template>
  <TheHeader />
  <main class="bg-gray-50">
    <div class="max-w-5xl m-auto min-h-screen">
      <router-view />
    </div>
  </main>
</template>
