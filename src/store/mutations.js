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
        let givenUser = state.users.filter((user)=> {
            return user.username === data.userName
        })
        givenUser[0].paths.push({career: data.path, finishedRequirements: []});
    },
    deleteMyPath: (state, data) => {
        let givenUser = state.users.filter((user)=> {
            return user.username === data.userName
        })[0]
        givenUser.paths.splice(givenUser.paths.findIndex(x => x.career ===data.path), 1)
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
    appendTasks: (state, data) => {
      let givenMentor = state.mentors.filter((mentor) => {
        return mentor.username === data.username
      })[0]
      givenMentor.tasks.push(data.task)
    },
    appendTutorials: (state, data) => {
      let givenMentor = state.mentors.filter((mentor) => {
        return mentor.username === data.username
      })[0]
      givenMentor.videos.push(data.tutorial)
    },
    appendArticles: (state, data) => {
      let givenMentor = state.mentors.filter((mentor) => {
        return mentor.username === data.username
      })[0]
      console.log(givenMentor)
      givenMentor.articles.push(data.article)
    },
    appendNewMentorProfile: (state, user) => {
      state.mentors.push(user)
    },
  }
  