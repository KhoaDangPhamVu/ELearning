<template>
  <div class="w-full h-screen">
    <!-- Bar color -->
    <div
      class="bg-gradient-to-r from-purpleLinear from-10% via-blueLinear via-30% to-greenLinear to-90% flex items-center p-8 h-1/5"
    >
    <div class="p-6 absolute top-0 left-0">
      <router-link :to="{ name: 'HomePage' }" >
        <button
        class="bg-greenColor hover:bg-blue-600 text-white font-medium py-2 w-26 px-4 rounded-lg"
      >
        <font-awesome-icon icon="home" class="mr-2" /> Home
      </button>
      </router-link>
      
    </div>
  </div>


    <!-- Content User -->
    <div
      class="h-[90%] px-3 sm:px-4 md:px-8 lg:px-12 flex justify-center left-1/2 transform -translate-x-1/2 relative mt-[-20px]"
    >
    
      <!-- Image  -->
      <div
        class="flex flex-col justify-around p-4 rounded-xl h-4/5 w-52 sm:w-1/3 md:w-1/3 lg:w-1/5 bg-white shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.8)]"
      >
        <div>
          <div class="flex justify-center items-center">
            <img
              src="../../assets/images/audio.jpg"
              alt=""
              class="w-36 h-36 object-cover rounded-full shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div class="mt-2">
            <h2 class="font-bold text-center text-black text-xl">KhoaFarm</h2>
          </div>

          <div class="flex justify-center items-center mt-2">
            <button
              class="bg-purpleLinear hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded-lg shadow-lg"
            >
              Change Image
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center">
          <h2 class="font-bold text-center text-xl mb-4">Number of attempts</h2>
          <div
            class="flex items-center justify-center rounded-full w-32 h-32 border-4 bg-greenLight border-greenDark mt-4 md:mt-0"
          >
            <span class="text-greenDark text-2xl font-bold text-center">7</span>
          </div>
        </div>
      </div>
      <!-- Information -->
      <div
        class="rounded-xl ml-6 h-4/5 w-80 sm:w-full md:w-full lg:w-1/2 bg-white shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.8)]"
      >
      <!-- Nav bar -->
      <div class=" p-4 ml-4 flex">
        <div><h2 class="text-md md:text-xl font-bold cursor-pointer"
        :class="{ 'text-black': isActiveProfile ,'text-grayLight':!isActiveProfile}"
        @click="activeProfileClick">Profile</h2></div>

        <div ><h2 class="ml-8 text-md md:text-xl font-bold cursor-pointer"
        :class="{ 'text-black': isActiveProfileSetting , 'text-grayLight':!isActiveProfileSetting }"
        @click="activateProfileSettingClick">Profile Setting</h2></div>

        <div ><h2 class="ml-8 text-md md:text-xl font-bold cursor-pointer"
        :class="{ 'text-black': isActiveHistory , 'text-grayLight':!isActiveHistory }"
        @click="activateHistoryClick">History</h2></div>

      </div>
      <!-- Line -->
      <div class="w-full border-t-2 bg-grayDark"></div>

      <!-- profile content -->

      <!-- Part 1 -->
      <div  v-if="isActiveProfile" class="w-full md:mt-12 p-0 md:p-4 px-0 md:px-12">
        <!-- First Name + Last Name -->
        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-4">
          <!-- FirstName -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">First Name</h2>
            <input type="text" value="Khoa" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed  ">
          </div>
          <!-- LastName -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Last Name</h2>
            <input type="text" value="Pham" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed  ">
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-6 md:mt-12">
          <!-- Phone Number -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">Phone Number</h2>
            <input type="text" value="+84 83 577 1575" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed  ">
          </div>
          <!-- Email Address -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Email Address</h2>
            <input type="text" value="khoafarm@gmail.com" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed">
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-6 md:mt-12">
          <!-- City -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">City</h2>
            <input type="text" value="Thu Duc" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed  ">
          </div>
          <!-- Country -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Country</h2>
            <input type="text" value="Viet Nam" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed">
          </div>
        </div>


      </div>


      <div v-if="isActiveProfileSetting" class="w-full md:mt-12 p-0 md:p-4 px-0 md:px-12 ">
        <!-- First Name + Last Name -->
        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-4">
          <!-- FirstName -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">First Name</h2>
            <input type="text" value="Khoa"  class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none  ">
          </div>
          <!-- LastName -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Last Name</h2>
            <input type="text" value="Pham"  class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none d  ">
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-6 md:mt-12">
          <!-- Phone Number -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">Phone Number</h2>
            <input type="text" value="+84 83 577 1575"  class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none   ">
          </div>
          <!-- Email Address -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Email Address</h2>
            <input type="text" value="khoafarm@gmail.com" disabled class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none cursor-not-allowed ">
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center w-full mt-6 md:mt-12">
          <!-- City -->
          <div class="w-2/3 md:w-1/2">
            <h2 class="font-semibold text-md">City</h2>
            <input type="text" value="Thu Duc"  class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none   ">
          </div>
          <!-- Country -->
          <div class="w-2/3 md:w-1/2 mt-4 md:mt-0">
            <h2 class="font-semibold text-md">Country</h2>
            <input type="text" value="Viet Nam"  class="ml-3 mt-2 w-full md:w-[80%] text-gray bg-whiteMilk shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-2 rounded-md  focus:shadow-outline-gray  focus:outline-none ">
          </div>
        </div>

        <div class="mt-8 flex  justify-end items-center px-16">
          <button
              class="bg-purpleLinear hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded-lg shadow-lg"
            >
              Edit
            </button>

        </div>
      </div>

      <!-- Part 3 -->
      <div v-if="isActiveHistory" class="w-full mt-4 md:mt-6 p-0 md:p-2 px-0 md:px-6 ">
        <div class="flex items-center justify-center">
        <table class="table w-full  text-grayDark border-separate space-y-6 text-md">
        <thead class="bg-[#3B82F6] text-white">
          <tr>
            <th class="p-0 md:p-3"></th>
            <th class="p-3 text-left">Exam</th>
            <th class="p-3 text-left">Duration</th>
            <th class="p-3 text-left">Score</th>

            <th class="p-3 text-left">Status</th>
            <th class="p-3 text-left">History</th>
          </tr>
        </thead>
        <tbody>
      
            <tr class="bg-blueLight lg:text-black">
            <td class="p-0 md:p-3 font-medium capitalize "><div class="flex justify-center items-center">
            <img
              src="../../assets/images/TOEICReading.jpg"
              alt=""
              class="w-0 md:w-12 h-0 md:h-12 object-cover rounded-full shadow-[10px_15px_20px_-15px_rgba(0,0,0,0.8)]"
            />
          </div></td>
            <td class="p-3">Exam Title</td>
            <td class="p-3">exam duration</td>
            <td class="p-3 uppercase">6</td>
            
            <td class="p-3">
              <span class="bg-greenColor font-semibold text-white rounded-md p-2"
                >DONE</span
              >
            </td>
            <td class="p-3 ">
              <img src="../../assets/images/eye.png" alt="" class="w-10 h-10 cursor-pointer">
              
              
            </td>
          </tr>
        </tbody>
      </table>
        </div>
        
        
        
        
      </div>

      


    </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';

const isActiveProfile = ref(true);
const isActiveProfileSetting = ref(false);
const isActiveHistory = ref(false);

const activateProfileSettingClick = () => {
  isActiveProfileSetting.value = true;
  isActiveProfile.value = false;
  isActiveHistory.value = false;
};

const activeProfileClick = () => {
  isActiveProfile.value = true;
  isActiveProfileSetting.value = false;
  isActiveHistory.value = false;
};

const activateHistoryClick = () => {
  isActiveHistory.value = true;
  isActiveProfileSetting.value = false;
  isActiveProfile.value = false;
}


</script>
