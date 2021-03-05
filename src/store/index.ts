// Import dependencies
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import { RootState } from './types'

// Import modules
import { store as ProjectsStore } from './projects'
import { store as UsersStore } from './users'

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

// create store
export const store = createStore<RootState>({
  state: {
    count: 6,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  modules: {
    projects: ProjectsStore,
    users: UsersStore,
  },
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
