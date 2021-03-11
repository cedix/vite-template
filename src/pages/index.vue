<script setup>
  // Imports
  import { computed } from 'vue'
  import { useStore } from '~/store'

  // Vuex Store
  const store = useStore()

  // Vuex Computed Properties
  const countGlobal = computed(() => store.state.count)
  const countProjects = computed(() => store.state.projects.countProjects)
  const countUsers = computed(() => store.state.users.countUsers)

  // Methods
  function incrementCountProjects() {
    store.dispatch(`projects/addProject`)
  }
  function incrementCountUsers() {
    store.dispatch(`users/addUser`)
  }
  function incrementGlobalCounter() {
    store.commit('increment')
  }
</script>

<template>
  <div class="px-4 py-5">
    <h1 class="text-2xl mb-4">Vite Page template</h1>
    <div class="grid grid-cols-3 gap-16">
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Global State Counter</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countGlobal }}</dd>
          </div>
        </div>
        <button
          type="button"
          class="mt-4 block items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="incrementGlobalCounter"
        >
          Increment Global Counter
        </button>
      </div>
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Number of Users</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countUsers }}</dd>
          </div>
        </div>
        <button
          type="button"
          class="mt-4 block items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="incrementCountUsers"
        >
          Increment nb users
        </button>
      </div>
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Number of Projects</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countProjects }}</dd>
          </div>
        </div>
        <button
          type="button"
          class="mt-4 block items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="incrementCountProjects"
        >
          Increment nb projects
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>
