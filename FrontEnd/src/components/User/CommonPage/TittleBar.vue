

<template>
    <header class="px-12 bg-white sticky top-0 z-50 shadow-md">
        <div class="bg-gray-900 text-black p-2">
            <div class="flex items-center justify-around">

                <!-- Logo and Name -->
                <div class="flex items-center space-x-2">
                    <div>
                        <img src="../../../assets/images/logo.png" class="w-14 h-14" alt="">
                    </div> <!-- Replace with your logo -->
                    <h1 class="text-xl font-semibold">E-Learn</h1>
                </div>
                
                <!-- Items -->
                <ul class=" flex space-x-4 ">
                    <router-link :to="{name: 'HomePage'}">
                        <li><a href="#" class="hover:text-primaryLightColor font-medium px-6 text-lg">Home</a></li>
                    </router-link>
                    <li><a href="#" class="hover:text-primaryLightColor font-medium px-6 text-lg">Course</a></li>
                    <router-link :to="{name: 'PracticePage'}">
                        <li><a href="#" class="hover:text-primaryLightColor font-medium px-6 text-lg">Practice</a></li>
                    </router-link>
                    <li><a href="#" class="hover:text-primaryLightColor font-medium px-6 text-lg">Blog</a></li>
                </ul>

                <div v-if="user" class="p-2 ">
                   <account-drop-down></account-drop-down>
                </div>
                <div v-else class="p-2 ">
                    <router-link :to="{name: 'LoginPage'}">
                    <button   class=" bg-primaryBlue hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded-lg ">
                    Let's start  <font-awesome-icon icon="arrow-right" class="ml-4" />
                </button>    
                </router-link>
                </div>
                <!-- Login Button -->
                
            </div>
        </div>
    </header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AccountDropDown from './AccountDropDown.vue';
import { ref,onMounted } from 'vue';

import { useAuthStore } from '../../../store/auth';
import { useRouter } from "vue-router";

const user = ref(null);
const authStore = useAuthStore();

onMounted(() => {
    user.value = authStore.getUserValue;
    
});
</script>

