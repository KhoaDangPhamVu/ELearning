<template>
    
    <div class="bg-white">
        <!-- Introduction -->
        <div class="flex flex-col md:flex-row">

            <div class="bg-primaryLightBlue flex justify-center items-center flex-1 text-center p-4">
                <div>
                    <h1 class="text-black text-4xl font-bold">Platform</h1>
                    <h1 class="text-primaryBlue text-4xl font-bold">Learn English Online</h1>
                    <h1 class="text-black text-4xl font-bold">Easy and Useful</h1>
                </div>
            </div>
            <div class="bg-primaryLightBlue flex-1 text-center py-20">
                <div>
                    <img src="../../../assets/images/introstudy.svg" alt="">
                </div>
            </div>
        </div>
        <!-- Why we should use E-Learning -->
        <div class="p-12 ">
            <h2 class="font-bold text-3xl text-black text-center bg-white p-12">Why we should use <span
                    class="text-primaryBlue">E-Learning</span>? </h2>
            <div class="text-md flex justify-between">
                <div class="p-4 rounded-xl shadow-2xl bg-white flex-1">
                    <img src="../../../assets/images/video.svg" alt="" class="w-16 h-16">
                    <p class="font-bold mt-6">High quality video lectures</p>
                    <p class="text-gray my-6">By a team of excellent and dedicated teachers IELTS 8.0 - 8.5, former
                        international students, graduated from prestigious universities</p>
                </div>
                <div class="p-4 rounded-xl shadow-2xl bg-white flex-1 mx-12">
                    <img src="../../../assets/images/document2.svg" alt="" class="w-16 h-16">
                    <p class="font-bold mt-6">Full of sample papers, exercises, mini tests, progress tests like real exams
                    </p>
                    <p class="text-gray my-6">The document set has helped 600 students achieve IELTS 7.0-8.5 as of May 2021
                    </p>
                </div>
                <div class="p-4 rounded-xl shadow-2xl bg-white flex-1">
                    <img src="../../../assets/images/document.svg" alt="" class="w-16 h-16">
                    <p class="font-bold mt-6">Online Exam System</p>
                    <p class="text-gray my-6">Help us to practice english easier with Reading and Listening skill</p>
                </div>
            </div>
        </div>
        <!-- Start to Practice  -->
        <div class="bg-primaryLightBlue flex flex-col md:flex-row items-center justify-center">
            <div class="flex-1 flex justify-center items-center">
                <img src="../../../assets/images/exam.svg" alt="" class="py-20">
            </div>
            <div class="flex-1 ">
                <h2 class="font-bold text-3xl text-black">Let's start <span class="text-primaryBlue">practice English</span>
                    now!</h2>
                <p class="font-semibold my-5">Hope you enjoy this app!</p>
                <button class="bg-primaryBlue hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded-lg">
                    Let's start
                </button>
            </div>
        </div>
        <!-- Tips and Trick -->
        <div class="p-12 ">
            <h2 class="font-bold text-3xl text-black text-center bg-white p-12">Tips And Tricks!
            </h2>
            <div class="text-lg flex justify-between ">
                <div class="p-6 rounded-xl shadow-2xl bg-white flex-1">

                    <a href="https://www.indeed.com/career-advice/career-development/how-to-improve-reading-skills">
                        <img src="../../../assets/images/englishTip1.svg" alt="" class="w-full h-1/2 rounded-md mb-6">
                    </a>
                    <a class="font-bold"
                        href="https://www.indeed.com/career-advice/career-development/how-to-improve-reading-skills">How to
                        learn Reading skill</a>
                    <p class="text-gray mt-4 mb-4">Improve reading skill with 7 steps help us easier to practice with
                        Reading exam</p>


                </div>
                <div class="p-4 rounded-xl shadow-2xl bg-white flex-1 mx-12">

                    <a href="https://www.cambridgeenglish.org/learning-english/free-resources/write-and-improve/">
                        <img src="../../../assets/images/englishTip2.svg" alt="" class="w-full h-1/2 rounded-md mb-6">
                    </a>
                    <a class="font-bold"
                        href="https://www.cambridgeenglish.org/learning-english/free-resources/write-and-improve/">The
                        Ultimate Writing
                        Skills Guide</a>
                    <p class="text-gray mt-4 mb-4">If you want to become a better writer, you’re in the right place. We’ve
                        compiled our best resources.
                    </p>

                </div>
                <div class="p-4 rounded-xl shadow-2xl bg-white flex-1">

                    <a href="https://exam-practice.com/important-things-about-ielts-speaking/"><img
                            src="../../../assets/images/englishTip3.svg" href="" alt="" class="w-full h-1/2 rounded-md mb-6 "></a>
                    <a class="font-bold"
                        href="https://exam-practice.com/important-things-about-ielts-speaking/">Demystifying the IELTS
                        Speaking</a>
                    <p class="text-gray mt-4 mb-4">10 Important things about IELTS Speaking </p>

                </div>
            </div>
        </div>

        <!-- Strategic parnership -->
        <div class="p-12 bg-primaryLightBlue">
            <h2 class="font-bold text-3xl text-black text-center bg-primaryLightBlue p-12">Strategic parnership
            </h2>
            <div class="flex justify-center">
                <div class="p-2 rounded-xl shadow-2xl bg-white flex-1 flex items-center justify-center">
                    <img src="../../../assets/images/BritishCouncil.png" alt="" class="w-full rounded-md">
                </div>

                <div class="p-2 rounded-xl shadow-2xl bg-white flex-1 mx-12 flex items-center justify-center">
                    <img src="../../../assets/images/toeic.png" alt="" class="w-full rounded-md">
                </div>

                <div class="p-2 rounded-xl shadow-2xl bg-white flex-1 flex items-center justify-center">
                    <img src="../../../assets/images/idp.png" alt="" class="w-full rounded-md h-1/2">
                </div>
            </div>
        </div>
    </div>

    <!-- strategic partnership -->
</template>


<script  setup>
import { ref,onMounted } from 'vue';

import { useAuthStore } from '../../../store/auth';
import { useRouter } from "vue-router";

const user = ref(null);
const authStore = useAuthStore();

onMounted(() => {
    user.value = authStore.getUserValue;
    
});
</script>