export default {
    usersCount: (state) => {
        return () => {
            return state.users.length
        }
    },
    getAllMentees: (state) => {
        return () => {
            return state.users.filter((user) => {
                return user.type === 'mentee'
            })
        }
    },
    getAllMentors: (state) => {
        return () => {
            return state.users.filter((user) => {
                return user.type === 'mentor'
            })
        }
    },
    getUserWithUsername(state) {
        return (username) => {
            return state.users.filter((user) => {
                return user.username === username
            })
        }
    },
    loggedInUser(state){
            return state.appData.currentUser
    },
    getAllCareers: (state) => {
        return () => {
            return state.careers;
        }
    },

    getCareerByName: (state) => {
        return (careerName) => {
            return state.careers.filter((career) => {
                return career.career === careerName
            })[0]
        }

    },
    getMentorByCareer: (state) => {
        return (careerName) => {
            return state.users.filter((user) => {
                return user.type === "mentor" && user.jobTitle === careerName;
            })
        }
    },
    getMentorProfileWithUsername: (state) => {
        return (username) => {
            return state.mentors.filter((mentor) => {
                return mentor.username === username
            })
        }
    },
}