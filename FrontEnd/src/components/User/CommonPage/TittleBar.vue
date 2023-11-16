<script  setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <header class="px-12 bg-white sticky top-0 z-50 shadow-md">
        <div class="bg-gray-900 text-black p-2">
            <div class="flex items-center justify-between">

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

                <!-- Login Button -->
                <button class=" bg-primaryBlue hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded-lg">
                    Let's start  <font-awesome-icon icon="arrow-right" class="ml-4" />
                </button>
            </div>
        </div>
    </header>
</template>
