import apiAuth from "./api/apiAuth";

export default {
    signIn(credentials){
        return apiAuth().post("signin",credentials)
    },
    signOut(){
        return apiAuth().post("signout")
    },
}