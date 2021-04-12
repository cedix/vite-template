<script>
  import { computed, defineComponent, onMounted, ref } from 'vue'
  import { FilterIcon } from '@heroicons/vue/outline'
  import { fetchPlanets, filterPlanets, sortPlanets } from '~/api/planets'

  export default defineComponent({
    setup() {
      // Variables
      let filter = ref('')
      let planets = ref([])

      // Computed Properties
      const filteredPlanets = computed(() => planets.value.filter(filterPlanets(filter.value)).sort(sortPlanets))

      // Functions
      async function getPlanets() {
        planets.value = await fetchPlanets()
      }

      // Lifecycle hooks
      onMounted(() => {
        getPlanets()
      })

      return {
        filter,
        filteredPlanets,
        FilterIcon,
        getPlanets,
      }
    },
  })
</script>

<template>
  <div class="p-5 max-w-5xl mx-auto">
    <div class="flex">
      <h1 class="text-2xl mb-4">Star Wars Planets</h1>
      <div class="flex-1 mb-4 flex items-end justify-end">
        <span class="text-sm text-gray-400">Composition API Template</span>
      </div>
    </div>
    <div>
      <!-- Fitler -->
      <div>
        <label for="filter_planets" class="block text-sm font-medium text-gray-700">Filter</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="filter_planets"
            id="filter_planets"
            v-model="filter"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Filter planets names..."
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FilterIcon class="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <!-- List Planets -->
      <div class="mt-4 grid grid-cols-5 gap-4">
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