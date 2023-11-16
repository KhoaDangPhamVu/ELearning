<template>
  <div
    class="bg-gradient-to-r from-purpleLinear from-10% via-blueLinear via-30% to-greenLinear to-90% flex items-center p-8 min-h-screen"
  >
    <div class="p-6 w-full h-auto rounded-2xl shadow-lg min-h-screen bg-white">
      <!-- Phần tạo câu hỏi -->
      <router-link :to="{ name: 'PracticePage' }">
        <div class="p-12 absolute top-0 left-0">
          <button
            class="bg-greenColor hover:bg-blue-600 text-white font-medium py-2 w-26 px-4 rounded-lg"
            @click="toggleConfirmModal"
          >
            <font-awesome-icon icon="arrow-left" class="mr-2" /> Back
          </button>
        </div>
      </router-link>

      <div class="w-2/3 lg:w-1/2 flex flex-col justify-center items-center mx-auto">
        <div class="flex flex-col md:flex-row justify-center min-w-2xl px-24">
          <div>
            <img
              src="../../assets/images/TOEICReading.jpg"
              alt=""
              class="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44"
            />
          </div>
          <div class=" ml-2 lg:ml-12">
            <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">
              Cambrige Test 2
            </h1>
            <div class="flex mt-4">
              <img
                src="../../assets/images/calendar.png"
                alt=""
                class="w-5 h-5"
              />
              <p class="ml-2">
                Publish On: <span class="font-bold">21 Feb 2023</span>
              </p>
            </div>
            <div class="flex mt-4">
              <img src="../../assets/images/flash.png" alt="" class="w-5 h-5" />
              <p class="ml-2">
                Test Taken: <span class="font-bold">572,24</span>
              </p>
            </div>
          </div>
        </div>

        <h2 class="ml-8 font-bold text-center text-3xl mt-6">Your Score is</h2>

        <div class="w-full flex  flex-col md:flex-row mt-6 items-center justify-around">
           <div class="flex flex-col items-center md:ml-6 mt-4 md:mt-0">
            <p class="text-gray font-semibold">Correct Answers</p>
            <span class="text-greenDark font-semibold">0/40</span>
           </div>
           <div class=" flex items-center justify-center rounded-full w-32 h-32 border-4 bg-greenLight border-greenDark mt-4 md:mt-0">
            <span class="text-greenDark font-bold text-center">0</span>
           </div>
           <div class="flex flex-col justify-center items-center md:mr-6 mt-4 md:mt-0">
            <img src="../../assets/images/watch.png" alt="" class="w-5 h-5">
            <p class="text-gray font-semibold">Time spent</p>
            <span class="text-greenDark font-semibold">00.08</span>
            <p class="text-gray font-medium">(60:00)</p>
           </div> 
        </div>
        
      </div>

      <div class="flex justify-center mt-4"></div>

       <div class="flex flex-col justify-center items-center mt-6">
          <div
            class="w-2/3 lg:w-1/2 bg-[#e9e8e8] rounded-xl p-8 mt-6 shadow-xl"
            
          >
          <h1 class="font-bold text-3xl">Question 1</h1>
            
            <h2 class="mt-4 text-xl font-medium">
              Huhu data
            </h2>
            <div class="flex items-center mt-4">
              <span
                class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
                
              >
                A
              </span>
              <p class="ml-4 text-xl">vv</p>
            </div>
            <div class="flex items-center mt-4">
              <span
                class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
                
              >
                B
              </span>
              <p class="ml-4 text-xl">Khok</p>
            </div>
            <div class="flex items-center mt-4">
              <span
                class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
                
              >
                C
              </span>
              <p class="ml-4 text-xl">Nqweqe</p>
            </div>
            <div class="flex items-center mt-4">
              <span
                class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
                
              >
                D
              </span>
              <p class="ml-4 text-xl">Cả 3 đáp án trên</p>
            </div>
          </div>
        </div> 

        
    </div>
  </div>
</template>

<script setup>
//   import ReadingModal from "../../components/Admin/QuestionPage/ReadingModal.vue";
//   import ErrorLimitQuestion from "../../components/ErrorHandle/ErrorLimitQuest.vue";
//   import UpdateQuestionModal from "../../components/Admin/QuestionPage/UpdateQuestionModal.vue";
//   import { useQuestionStore } from "../../store/question";
//   import { useRoute } from "vue-router";

//   import { ref, onMounted } from "vue";
//   const modalActive = ref(null);

//   const answer = ref(null);
//   const option1 = ref(null);
//   const option2 = ref(null);
//   const option3 = ref(null);
//   const option4 = ref(null);
//   const question = ref(null);
//   const questionid = ref(null);

//   const questionStore = useQuestionStore();

//   const route = useRoute(); // Access the route object with useRoute

//   const limitQuestion = questionStore.validateQuestion.limitQuest;
//   const questInExam = questionStore.validateQuestion.questInExam;

//   const handleSubmidAdd = async () => {
//     if (questInExam >= limitQuestion) {
//       resetForm();
//       toggleModal();
//       toggleErrorModal();
//     } else {
//       const data = {
//         questionID: questionStore.randomQuestionID(),
//         examID: Number(route.params.id),
//         questionText: question.value,
//         option1: option1.value,
//         option2: option2.value,
//         option3: option3.value,
//         option4: option4.value,
//         correctAnswer: answer.value,
//         answerID: questionStore.randomAnswerID(),
//       };
//       console.log(data);
//       await questionStore.addQuestion(Number(route.params.id), data);
//       resetForm();
//       toggleModal();
//     }
//   };

//   const handleSubmitUpdate = async (questionID) => {
//     try {
//       const data = {
//         questionID: Number(questionID),
//         questionText: question.value,
//         option1: option1.value,
//         option2: option2.value,
//         option3: option3.value,
//         option4: option4.value,
//         correctAnswer: answer.value,
//       };

//       await questionStore.updateQuestion(questionID, data);
//       resetForm();
//       toggleUpdateModal();
//       questionStore.getQuestionInExam(Number(route.params.id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteQuestion = async (questionID) => {
//     try {
//       await questionStore.deleteQuestion(questionID);
//       await questionStore.getQuestionInExam(Number(route.params.id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const openQuestionSetting = async (questionID) => {
//     questionStore.choosedQuestion = [];

//     questionStore.selectQuestionToUpdate(questionID);

//     answer.value = questionStore.choosedQuestion[0].correctAnswer;
//     question.value = questionStore.choosedQuestion[0].questionText;
//     option1.value = questionStore.choosedQuestion[0].option1;
//     option2.value = questionStore.choosedQuestion[0].option2;
//     option3.value = questionStore.choosedQuestion[0].option3;
//     option4.value = questionStore.choosedQuestion[0].option4;
//     questionid.value = questionStore.choosedQuestion[0].questionID;

//     toggleUpdateModal();
//   };

//   const resetForm = () => {
//     (answer.value = ""),
//       (option1.value = ""),
//       (option2.value = ""),
//       (option3.value = ""),
//       (option4.value = ""),
//       (question.value = ""),
//       (questionid.value = null);
//   };

//   onMounted(async () => {
//     await questionStore.getQuestionInExam(Number(route.params.id));
//     await questionStore.getLimitQuest(Number(route.params.id));
//   });

//   const toggleModal = () => {
//     //Hàm cho phép đóng và mở modal
//     modalActive.value = !modalActive.value;
//   };

//   const isModalErrorActive = ref(null);

//   const toggleErrorModal = () => {
//     isModalErrorActive.value = !isModalErrorActive.value;
//   };

//   const updateModalActive = ref(false);

//   const toggleUpdateModal = () => {
//     updateModalActive.value = !updateModalActive.value;
//   };
</script>
