<script>
  import { computed, defineComponent, onMounted, ref } from 'vue'
  import { FilterIcon } from '@heroicons/vue/outline'
  import Loading from 'vue3-loading-overlay'
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
  import { fetchPlanets, filterPlanets, sortPlanets } from '~/api/planets'

  export default defineComponent({
    components: {
      FilterIcon,
      Loading,
    },
    setup() {
      // Variables
      let filter = ref('')
      let isLoading = ref(false)
      let planets = ref([])

      // Computed Properties
      const filteredPlanets = computed(() => planets.value.filter(filterPlanets(filter.value)).sort(sortPlanets))

      // Functions
      async function getPlanets() {
        isLoading.value = true
        await new Promise((resolve) => setTimeout(resolve, 3000)) // is here to let the loading overlay being displayed
        planets.value = await fetchPlanets()
        isLoading.value = false
      }

      // Lifecycle hooks
      onMounted(() => {
        getPlanets()
      })

      return {
        filter,
        filteredPlanets,
        getPlanets,
        isLoading,
      }
    },
  })
</script>

<template>
  <div class="p-5 max-w-5xl mx-auto">
    <Loading :active="isLoading" :can-cancel="false" :is-full-page="true"></Loading>
    <!-- Title -->
    <div class="flex">
      <h1 class="text-2xl mb-4">Star Wars Planets</h1>
      <div class="flex-1 mb-4 flex items-end justify-end">
        <span class="text-sm text-gray-400">Composition API Template</span>
      </div>
    </div>

    <!-- Page content -->
    <div>
      <!-- Filter -->
      <div>
        <label for="filter_planets" class="block text-sm font-medium text-gray-700">Filter</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FilterIcon class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="filter_planets"
            id="filter_planets"
            v-model="filter"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Filter planets names..."
          />
        </div>
      </div>
      <!-- List Planets -->
      <div class="mt-4 grid grid-cols-5 gap-4 vld-parent">
        <div v-for="planet in filteredPlanets" :key="planet.name" class="w-full flex items-center justify-center h-24 bg-white rounded shadow">
          <span>{{ planet.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
