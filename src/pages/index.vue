<script setup>
  // Imports
  import { computed } from 'vue'
  import { useStore } from '~/store'

  // Components
  import { BookOpenIcon, TemplateIcon, UsersIcon } from '@heroicons/vue/outline'
  import VButton from '~/components/UI/button.vue'

  // Model
  import { Size } from '~/model/size'

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
  <div class="p-5 max-w-5xl mx-auto">
    <div class="flex">
      <h1 class="text-2xl mb-4">Vite Page template</h1>
      <div class="flex-1 mb-4 flex items-end justify-end">
        <span class="text-sm text-gray-400">Vuex example</span>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-16">
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Global State Counter</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countGlobal }}</dd>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <v-button class="mt-4" :size="Size.l" text="Increment Global Counter" @click="incrementGlobalCounter">
            <template #leadingIcon>
              <BookOpenIcon class="w-6 h-6" />
            </template>
          </v-button>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Number of Users</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countUsers }}</dd>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <v-button class="mt-4" :size="Size.l" text="Increment nb users" @click="incrementCountUsers">
            <template #leadingIcon>
              <UsersIcon class="w-6 h-6" />
            </template>
          </v-button>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">Number of Projects</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">{{ countProjects }}</dd>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <v-button class="mt-4" :size="Size.l" @click="incrementCountProjects">
            <template #default> Increment nb projects </template>
            <template #leadingIcon>
              <TemplateIcon class="w-6 h-6" />
            </template>
          </v-button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
