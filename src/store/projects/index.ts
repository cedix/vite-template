import { Module } from 'vuex'
// import { Store as VuexStore, DispatchOptions, CommitOptions, Module } from 'vuex'

import { RootState } from '~/store/types'
import { ProjectsState } from './types'
import { state } from './state'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const store: Module<ProjectsState, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
