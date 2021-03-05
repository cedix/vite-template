import { MutationTree } from 'vuex'

import { UsersState } from './types'

export const mutations: MutationTree<UsersState> = {
  incrementCountUsers(state) {
    state.countUsers++
  },
}
