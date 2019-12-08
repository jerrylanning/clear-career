export default {
    addUser: ({ commit }, payload) => {
      commit('appendUser', payload)
    },
    setLogInUser: ({commit} , payload) => {
      commit('logInUser', payload)
    },
    doLogOutUser: ({commit}) => {
      commit('logOutUser')
    },
    addMyMentor: ({commit}, payload) => {
      commit('appendMyMentor', payload)
    },
    removeMyMentor: ({commit}, payload) => {
      commit('deleteMyMentor', payload)
    },
    editUserContent: ({commit}, payload) =>{
      commit('changeUserContent', payload)
    },
    editMentorProfileContent: ({commit}, payload) =>{
      commit('changeMentorProfileContent', payload)
    },
    addMyPath: ({commit}, payload) => {
        commit('appendMyPath', payload)
    },
    removeMyPath: ({commit}, payload) => {
        commit('deleteMyPath', payload)
    },
    addTasks:({commit},payload) =>{
      commit('appendTasks', payload)
    },
    addTutorials:({commit},payload) =>{
      commit('appendTutorials', payload)
    },
    addArticles:({commit},payload) =>{
      commit('appendArticles', payload)
    },
    addNewMentorProfile:({commit},payload) =>{
      commit('appendNewMentorProfile', payload)
    },
  } 
  