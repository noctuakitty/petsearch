const axios = require("axios")

export default{
    getLogin: function (userData) {
        console.log("user data", userData)
        return axios.post("/login", userData)
    },
    signUp: function (userData) {
        return axios.post("/register", userData)
    },
    getUser: function () {
        return axios.get("/user")
    },
    logOut: function () {
        return axios.get("/logout")
    },
    getPetFinder: function(petInfo) {
        return axios.post("/api/petfinder",petInfo)
    },
    getRescueGroups: function(eventInfo) {
        return axios.get("/api/rescuegroups", eventInfo)
    }
}