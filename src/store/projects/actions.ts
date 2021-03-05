import { ActionTree } from 'vuex'

import { RootState } from '~/store/types'
import { ProjectsState } from './types'

export const actions: ActionTree<ProjectsState, RootState> = {
  addProject({ commit }) {
    commit('incrementCountProjects')
  },
}
