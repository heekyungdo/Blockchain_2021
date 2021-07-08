import { createStore } from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      profile: {}
    }
    // 데이터같은 애. 현재상태
  },
  mutations: {
    user(state, data) {
      state.profile = data
    }
    // state에 접근을 할 수도 있고, state를 어떻게 다룰지 지정해주는 역할. 함수를 담을 수도 있음
    // 현재 상태를 변이시켜주는 것.
  },
  plugins: [
    persistedstate({
      paths: ['profile']
    })
  ]
})

export default store
