export default {
    usersCount: (state) => {
      return state.users.length
    },
    getAllMentees: (state) => {
      return state.users.filter((user) => {
        return user.type === 'mentee'
      })
    },
    getAllMentors: (state) => {
        return state.users.filter((user) => {
          return user.type === 'mentor'
        })
      },
    getUserWithUsername(state){
        return (username) => {
            return state.users.filter((user) =>{
                return user.username === username
            })
        }
     },
    getAllCareers: (state) => {
        return () => {
            return state.careers;
        }
    }
  }
