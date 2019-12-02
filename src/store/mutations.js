export default {
    appendUser: (state, user) => {
      state.users.push(user)
    },
    logInUser: (state, user) => {
      state.appData.currentUser = user;
    },
    logOutUser: (state) =>{
      state.appData.currentUser = ""
    }
  }
  