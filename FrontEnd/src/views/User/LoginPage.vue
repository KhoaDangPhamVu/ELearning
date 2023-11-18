<!-- <template>
    <div class="w-full max-w-xs">
  <form v-on:submit.prevent="handleSignIn" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2"  for="username" >
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-model="username" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-primaryBlue hover:bg-greenDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</template>

<script>
import { ref } from 'vue';
// import { useAuthStore } from "../../store/auth";

// const authStore = useAuthStore();
const username = ref(null);
const password = ref(null);

const handleSignIn=async()=>{
    console.log(username.value);
    console.log(password.value)
    // await authStore.login()
}

</script> -->

<template>
  <div class="w-full max-w-xs">
    <form
      @submit.prevent="handleSignIn"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="username"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          v-model="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primaryBlue hover:bg-greenDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <button
      class="bg-red hover:bg-greenDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="handleSignOut"
      type="button"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();

const username = ref(null);
const password = ref(null);

const handleSignIn = async () => {
  // await authStore.login(username.value,password.value);
  // const token = response.token;
  // console.log(token)
  // // authStore.setToken(token);
  try {
    const response = await authStore.login(username.value, password.value);

    if (response) {
      const token =response.token
      authStore.setToken(token);
    } else {
      // Handle the case where the response does not contain the token
      console.error("Login response is missing the token.");
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

const handleSignOut = () => {
  authStore.logout();
};
</script>
