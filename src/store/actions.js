export default {
    addUser: ({ commit }, payload) => {
      commit('appendUser', payload)
    },
    setLogInUser: ({commit} , payload) => {
      commit('logInUser', payload)
    },
    doLogOutUser: ({commit}) => {
      commit('logOutUser')
    }
  } 
  