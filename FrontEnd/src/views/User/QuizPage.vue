<template>
  <div class="bg-primaryColor h-auto md:h-screen">
    <div class="text-white flex justify-between p-6">
      <div>
        <h1 class="text-xl md:text-2xl lg:text-3xl">
          Exam: {{ examStore.exam.title }}
        </h1>
        <p><span class="text-gray">Update on:</span> 9/22/2023</p>
      </div>

      <div class="flex items-center">
        <div>
          <p class="text-md mr-2">Time Remaining</p>
          <p class="text-md mr-2">{{ formattedTimeRemaining }}</p>
        </div>

        <img
          src="../../assets/images/clock.png"
          class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </div>
    </div>
    <div class="p-6">
      <button
        class="bg-greenColor hover:bg-blue-600 text-white font-medium py-2 w-26 px-4 rounded-lg"
        @click="toggleConfirmModal"
      >
        <font-awesome-icon icon="home" class="mr-2" /> Home
      </button>
    </div>

    <div class="flex flex-col md:flex-row justify-center mt-4 p-10">
      <div class="w-full max-w-3xl">
        <div class="bg-primaryLightColor lg:max-h-3xl mb-8 rounded-md">
          <div class="p-5">
            <h2 class="text-white font-bold mb-3">
              Question {{ currentQuestionIndex + 1 }}
            </h2>
            <p class="text-white">
              {{
                questionStore.filteredQuestion(route.params.id)[
                  currentQuestionIndex
                ].questionText
              }}
            </p>
          </div>
        </div>

        <div class="bg-primaryLightColor h-72 w-full rounded-md">
          <div class="p-5">
            <div class="flex items-center mb-4">
              <span
                class="h-10 w-10 rounded-full bg-gray flex items-center justify-center text-white cursor-pointer"
                :class="{
                  'bg-greenColor': containAnswer === 'A',
                  'bg-[#6366F1]': containAnswer !== 'A',
                }"
                @click="
                  handleSelectAnswer(
                    'A',
                    questionStore.filteredQuestion(route.params.id)[
                      currentQuestionIndex
                    ].questionID
                  )
                "
                >A
              </span>
              <p class="text-white ml-2">
                {{
                  questionStore.filteredQuestion(route.params.id)[
                    currentQuestionIndex
                  ].option1
                }}
              </p>
            </div>
            <div class="flex items-center mb-4">
              <span
                class="h-10 w-10 rounded-full bg-gray flex items-center justify-center text-white cursor-pointer"
                :class="{
                  'bg-greenColor': containAnswer === 'B',
                  'bg-[#6366F1]': containAnswer !== 'B',
                }"
                @click="
                  handleSelectAnswer(
                    'B',
                    questionStore.filteredQuestion(route.params.id)[
                      currentQuestionIndex
                    ].questionID
                  )
                "
                >B
              </span>
              <p class="text-white ml-2">
                {{
                  questionStore.filteredQuestion(route.params.id)[
                    currentQuestionIndex
                  ].option2
                }}
              </p>
            </div>
            <!-- <div class="flex items-center mb-4">

              <span
                class="h-10 w-10 rounded-full bg-gray flex items-center justify-center text-white"
                :class="{ 'selected-answer': selectedAnswer === 'C' }"
                @click="
                  handleTrackingExam(
                    questionStore.filteredQuestion(route.params.id)[
                      currentQuestionIndex
                    ].questionID
                  )
                "
                >C</span
              >
              <p class="text-white ml-2">
                {{
                  questionStore.filteredQuestion(route.params.id)[
                    currentQuestionIndex
                  ].option3
                }}
              </p>
            </div> -->
            <div class="flex items-center mb-4">
              <span
                class="h-10 w-10 rounded-full bg-gray flex items-center justify-center text-white cursor-pointer"
                :class="{
                  'bg-greenColor': containAnswer === 'C',
                  'bg-[#6366F1]': containAnswer !== 'C',
                }"
                @click="
                  handleSelectAnswer(
                    'C',
                    questionStore.filteredQuestion(route.params.id)[
                      currentQuestionIndex
                    ].questionID
                  )
                "
                >C</span
              >
              <p class="text-white ml-2">
                {{
                  questionStore.filteredQuestion(route.params.id)[
                    currentQuestionIndex
                  ].option3
                }}
              </p>
            </div>
            <div class="flex items-center mb-4">
              <span
                class="h-10 w-10 rounded-full bg-gray flex items-center justify-center text-white cursor-pointer"
                :class="{
                  'bg-greenColor': containAnswer === 'D',
                  'bg-[#6366F1]': containAnswer !== 'D',
                }"
                @click="
                  handleSelectAnswer(
                    'D',
                    questionStore.filteredQuestion(route.params.id)[
                      currentQuestionIndex
                    ].questionID
                  )
                "
                >D</span
              >
              <p class="text-white ml-2">
                {{
                  questionStore.filteredQuestion(route.params.id)[
                    currentQuestionIndex
                  ].option4
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-6">
          <button
            class="bg-gray hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded"
            @click="
              handlePreviousButton(
                questionStore.filteredQuestion(route.params.id)[
                  currentQuestionIndex - 1
                ].questionID
              )
            "
            :disabled="currentQuestionIndex === 0"
          >
            <font-awesome-icon icon="chevron-left" class="mr-4" /> Previous
          </button>
          <button
            class="ml-8 bg-blueColor hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded"
            v-if="
              questionStore.filteredQuestion(route.params.id).length - 2 >
              currentQuestionIndex
            "
            @click="
              handleNextButton(
                questionStore.filteredQuestion(route.params.id)[
                  currentQuestionIndex + 1
                ].questionID
              )
            "
            :disabled="
              currentQuestionIndex ===
              questionStore.filteredQuestion(route.params.id).length - 1
            "
          >
            Next <font-awesome-icon icon="chevron-right" class="ml-4" />
          </button>

          <button
            v-else-if="
              questionStore.filteredQuestion(route.params.id).length - 1 >
              currentQuestionIndex
            "
            class="ml-8 bg-blueColor hover:bg-blue-600 text-white font-medium py-2 w-40 px-4 rounded"
            @click="hanldeLastQuestButton"
            :disabled="
              currentQuestionIndex ===
              questionStore.filteredQuestion(route.params.id).length - 1
            "
          >
            Last
            <font-awesome-icon icon="chevron-right" class="ml-4" />
          </button>
        </div>
      </div>

      <!-- Question Table -->
      <div
        class="bg-primaryLightColor rounded-md w-50 md:w-60 lg:w-80 mt-4 md:mt-0 ml-0 md:ml-6 lg:ml-10"
      >
        <div class="p-2 md:p-3 lg:p-4 h-full flex flex-col justify-between">
          <div>
            <p class="text-white font-bold p-2">
              Question {{ trackingExamStore.getCurrentIndex }} /{{ questionStore.validateQuestion.questInExam }}
            </p>
            <div
              class="grid sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-3 mt-4 p-2"
            >
              <span
                v-for="(question, index) in questionStore.filteredQuestion(
                  route.params.id
                )"
                :key="question.questionID"
                class="w-8 h-8 md:w-8 md:h-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center text-white font-bold"
                :class="{
                  'bg-greenColor':
                    trackingExamStore.isSelected(question.questionID) !== null,
                  'bg-primaryColor':
                    trackingExamStore.isSelected(question.questionID) === null,
                  'bg-[#0071F9]': isCurrentQuestion(index)
                }"
              >
                {{ index + 1 }}
              </span>
            </div>
          </div>

          <div>
            <button
              class="bg-white p-2 mt-6 rounded-md w-full font-bold lg:text-lg md:text-xl text-sm"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ConfirmExitModal
    :confirm-modal-active="isModalConfirmActive"
    @close-modal="toggleConfirmModal"
  >
    <div class="flex flex-col justify-center items-center h-full">
      <img
        src="../../assets/images/warning.png"
        class="w-20 h-20 md:w-28 md:h-28"
        alt=""
      />
      <h1 class="font-bold text-center text-md md:text-xl mt-4">
        Are you sure to exit the quiz!
      </h1>
      <div class="flex justify-center mt-4">
        <router-link :to="{ name: 'HomePage' }">
          <button
            class="text-white text-md font-bold bg-red flex justify-center py-2 px-12 rounded-lg"
          >
            Sure
          </button>
        </router-link>
      </div>
    </div>
  </ConfirmExitModal>
</template>

<script setup>
import { useExamStore } from "../../store/exam";
import { useQuestionStore } from "../../store/question";
import { useTrackingExamStore } from "../../store/trackingExam";
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import ConfirmExitModal from "../../components/User/QuizPage/ConfirmExitModal.vue";
import { track } from "@vue/reactivity";

const examStore = useExamStore();
const questionStore = useQuestionStore();
const trackingExamStore = useTrackingExamStore();
const route = useRoute();

const questionInExam = ref(null);
var currentQuestionIndex = ref(0);
const timeRemaining = ref(0);
const containAnswer = ref(null);
const questionID = ref(null);
const selectedAnswer = ref(null);
const isSelected = ref(false);
const handleTrackingExam = (questionID) => {
  console.log(selectedAnswer.value);
  const data = {
    examID: Number(route.params.id),
    userID: 2015,
    questionID: questionID,
    selectedAnswer: selectedAnswer.value,
  };
  trackingExamStore.selectedQuestion(data);

  selectedAnswer.value = "";
};
//:class="{ 'bg-greenColor': trackingExamStore.selectedQuest[index].selectedAnswer !== null, 'bg-[#6366F1]': trackingExamStore.selectedQuest[index].selectedAnswer === null }"

const isQuestionAnswered = (questionID) => {
  isSelected.value = trackingExamStore.getSelectedAnswer(questionID);
  console.log(isSelected.value);
};

const isCurrentQuestion = (index) => {
  return trackingExamStore.isCurrentQuestion(index);
};

const setSelectedAnswer = (answer) => {
  selectedAnswer.value = answer;
};

const handleSelectAnswer = (answer, questionID) => {
  setSelectedAnswer(answer);
  handleTrackingExam(questionID);

  containAnswer.value = trackingExamStore.getSelectedAnswer(questionID);
  console.log(containAnswer.value);
};

const handleNextButton = (questionID) => {
  containAnswer.value = null;
  currentQuestionIndex.value += 1;
  trackingExamStore.currentQuestionIndex += 1
  questionID = Number(questionID);
  containAnswer.value = trackingExamStore.getSelectedAnswer(questionID);
  isQuestionAnswered(questionID);
};

const handlePreviousButton = (questionID) => {
  containAnswer.value = null;
  currentQuestionIndex.value -= 1;
  trackingExamStore.currentQuestionIndex -= 1
  questionID = Number(questionID);
  containAnswer.value = trackingExamStore.getSelectedAnswer(questionID);
};

const hanldeLastQuestButton = () => {
  containAnswer.value = null;
  trackingExamStore.currentQuestionIndex += 1
  currentQuestionIndex.value = questionStore.lastIndex;
  const questionID = questionStore.getLastQuestion();
  containAnswer.value = trackingExamStore.getSelectedAnswer(questionID);
};

const formattedTimeRemaining = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

onMounted(async () => {
  await questionStore.getLimitQuest(Number(route.params.id));
  await examStore.getExam(Number(route.params.id));
  timeRemaining.value = examStore.exam.duration * 60;

  // Start the countdown
  const timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value -= 1;
    } else {
      clearInterval(timerInterval); // Stop the timer when time is up
    }
  }, 1000); // Update every second
});

const isModalConfirmActive = ref(null);

const toggleConfirmModal = () => {
  isModalConfirmActive.value = !isModalConfirmActive.value;
};
</script>
