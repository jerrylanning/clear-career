export default {
    appendUser: (state, user) => {
      state.users.push(user)
    },
    logInUser: (state, user) => {
      state.appData.currentUser = user;
    },
    logOutUser: (state) =>{
      state.appData.currentUser = ""
    },
    appendMyMentor: (state, data) => {
      console.log(data.mentor)
      let givenUser = state.users.filter((user) => {
        return user.username === data.username
      })
      givenUser[0].mentors.push(data.mentor)
    },
    deleteMyMentor: (state, data) => {
      let givenUser = state.users.filter((user) => {
        return user.username === data.username
      })
      let index = givenUser[0].mentors.indexOf(data.mentor)
      givenUser[0].mentors.splice(index,1)
    },
    appendMyPath: (state, data) => {
        console.log("this is what im looking at -> " + data.userName)
        let givenUser = state.users.filter((user)=> {
            return user.username === data.userName
        })
        console.log(givenUser[0])
        givenUser[0].paths.push({career: data.path, finishedRequirements: []});
        console.log("the users current paths are " + givenUser[0].paths)
    },
    deleteMyPath: (state, data) => {
        console.log(data)
        let givenUser = state.users.filter((user)=> {
            return user.username === data.username
        })
        givenUser[0].paths = givenUser[0].paths.splice(givenUser.paths.indexOf(data.path), 1)
        console.log("the users current paths are " + givenUser.paths.toString())
    },
    changeUserContent: (state, user) =>{
      let givenUser = state.users.filter((user) => {
        return user.username === user.username
      })
      givenUser[0] = user;
    },
    changeMentorProfileContent: (state, mentorProfile) =>{
      let givenMentor = state.mentors.filter((mentor) => {
        return mentor.username === mentorProfile.username
      })
      givenMentor[0] = mentorProfile;
    },
  }
  