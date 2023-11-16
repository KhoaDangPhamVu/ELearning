import { defineStore, acceptHMRUpdate } from 'pinia'
import authService from '../services/authService';



export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: null,
    user: null,
    isUserLoggedIn: false
  
  }),
  
  getters:{
    getToken() {
      return this.token;
    }
  },
  actions: {
    async login(username, password) {
      const data = { username, password }
      console.log(data);
      try {
        const response = await authService.signIn(data);
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    logout() {
      try{
        this.setToken(null);
        this.setUser(null);
      }catch(error){
        const response = authService.signOut();
        this.setToken = null;
        this.setUser = null;
      }
      
    },
    setToken(token) {
      this.token = token;
      if(token){
        this.isUserLoggedIn = true;
      }else{
        this.isUserLoggedIn = false;
      }
    },
    setUser(user){
      this.user = user;
    }

  }
})


