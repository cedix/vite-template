import { MutationTree } from 'vuex'

import { ProjectsState } from './types'

export const mutations: MutationTree<ProjectsState> = {
  incrementCountProjects(state) {
    state.countProjects++
  },
}
