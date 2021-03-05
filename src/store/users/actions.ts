import { ActionTree } from 'vuex'

import { RootState } from '~/store/types'
import { UsersState } from './types'

export const actions: ActionTree<UsersState, RootState> = {
  addUser({ commit }) {
    commit('incrementCountUsers')
  },
}
