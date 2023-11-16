<template>
  <div
    class="bg-gradient-to-r from-purpleLinear from-10% via-blueLinear via-30% to-greenLinear to-90% flex items-center p-8 min-h-screen"
  >
    <div class="p-6 w-full h-auto rounded-2xl shadow-lg min-h-screen bg-white">
      <!-- Phần tạo câu hỏi -->
      <router-link :to="{ name: 'ExamPage' }">
        <div class="p-12 absolute top-0 left-0">
          <button
            class="bg-greenColor hover:bg-blue-600 text-white font-medium py-2 w-26 px-4 rounded-lg"
            @click="toggleConfirmModal"
          >
            <font-awesome-icon icon="arrow-left" class="mr-2" /> Back
          </button>
        </div>
      </router-link>

      <h1 class="font-bold text-5xl text-center">Start to create question</h1>

      <div class="flex justify-center mt-4">
        <button
          class="bg-[#6366F1] text-lg rounded-xl p-3 text-white font-semibold shadow-md"
          @click="toggleModal"
        >
          New Question
        </button>
      </div>

      <ReadingModal :modal-active="modalActive" @close-modal="toggleModal">
        <div class="container mx-auto">
          <div
            class="max-w-3xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm"
          >
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700">
                Generate Question
              </h1>
              <p class="text-gray-400">Fill up the form below.</p>
            </div>
            <div>
              <form v-on:submit.prevent="handleSubmidAdd">
                <div class="flex justify-between mt-4">
                  <div class="w-full">
                    <div>
                      <div>
                        <div>
                          <div class="mb-3 last:mb-0">
                            <label
                              for="name"
                              class="block mb-2 text-md font-semibold text-gray-600"
                              >Question</label
                            >
                            <textarea
                              rows="5"
                              v-model="question"
                              placeholder="Your Question"
                              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 1</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option1"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 2</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option2"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 3</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option3"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 4</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option4"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  </div>

                  <div class="w-1 h-auto bg-gray mx-4"></div>

                  <div class="w-full">
                    <div class="mb-6 w-full">
                      <label
                        class="inline-block text-sm text-gray-600"
                        for="color"
                        >Select Answer</label
                      >
                      <div
                        class="relative justify-between text-lg mt-4 flex flex-col w-full"
                      >
                        <div>
                          <input
                            type="radio"
                            id="option1"
                            value="A"
                            v-model="answer"
                          />
                          <label for="option1" class="ml-2">Option 1</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option2"
                            value="B"
                            v-model="answer"
                          />
                          <label for="option2" class="ml-2">Option 2</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option3"
                            value="C"
                            v-model="answer"
                          />
                          <label for="60" class="ml-2">Option 3</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option4"
                            value="D"
                            v-model="answer"
                          />
                          <label for="option4" class="ml-2">Option 4</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6">
                      <button
                        type="submit"
                        class="w-full px-2 py-4 text-white bg-purpleLinear rounded-md focus:bg-indigo-600 focus:outline-none"
                      >
                        Add Question
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ReadingModal>

      <ErrorLimitQuestion
        :error-modal-active="isModalErrorActive"
        @close-modal="toggleErrorModal"
      >
        <div class="flex flex-col justify-center items-center h-full">
          <img
            src="../../assets/images/warning.png"
            class="w-20 h-20 md:w-28 md:h-28"
            alt=""
          />
          <h1 class="font-bold text-center text-md md:text-xl mt-4">
            Can not Create more Question because at limit !!!
          </h1>
        </div>
      </ErrorLimitQuestion>

      <UpdateQuestionModal
        :update-modal-active="updateModalActive"
        @close-update-modal="toggleUpdateModal"
      >
        <div class="container mx-auto">
          <div
            class="max-w-3xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm"
          >
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700">
                Generate Question
              </h1>
              <p class="text-gray-400">Fill up the form below.</p>
            </div>
            <div>
              <form v-on:submit.prevent="handleSubmitUpdate(questionid)">
                <div class="flex justify-between mt-4">
                  <div class="w-full">
                    <div>
                      <div>
                        <div>
                          <div class="mb-3 last:mb-0">
                            <label
                              for="name"
                              class="block mb-2 text-md font-semibold text-gray-600"
                              >Question</label
                            >
                            <textarea
                              rows="5"
                              v-model="question"
                              placeholder="Your Question"
                              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 1</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option1"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 2</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option2"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 3</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option3"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>

                    <div>
                      <label class="block mb-2 text-sm text-gray-600"
                        >Option 4</label
                      >
                      <input
                        type="text"
                        required
                        v-model="option4"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  </div>

                  <div class="w-1 h-auto bg-gray mx-4"></div>

                  <div class="w-full">
                    <div class="mb-6 w-full">
                      <label
                        class="inline-block text-sm text-gray-600"
                        for="color"
                        >Select Answer</label
                      >
                      <div
                        class="relative justify-between text-lg mt-4 flex flex-col w-full"
                      >
                        <div>
                          <input
                            type="radio"
                            id="option1"
                            value="A"
                            v-model="answer"
                          />
                          <label for="option1" class="ml-2">Option 1</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option2"
                            value="B"
                            v-model="answer"
                          />
                          <label for="option2" class="ml-2">Option 2</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option3"
                            value="C"
                            v-model="answer"
                          />
                          <label for="60" class="ml-2">Option 3</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option4"
                            value="D"
                            v-model="answer"
                          />
                          <label for="option4" class="ml-2">Option 4</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6">
                      <button
                        type="submit"
                        class="w-full px-2 py-4 text-white bg-purpleLinear rounded-md focus:bg-indigo-600 focus:outline-none"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </UpdateQuestionModal>

      <!-- Phần câu phỏi -->
      <div class="flex flex-col justify-center items-center mt-6">
        <div
          class="w-1/2 bg-[#e9e8e8] rounded-xl p-8 mt-6 shadow-xl"
          v-for="(question, index) in questionStore.filteredQuestion(
            route.params.id
          )"
          :key="question.questionID"
        >
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-3xl">Question {{ index + 1 }}</h1>
            <div class="flex items-center">
              <div
                class="flex flex-col xl:flex-row items-center bg-grayLight rounded-lg shadow-lg p-2 cursor-pointer"
                @click="openQuestionSetting(question.questionID)"
              >
                <img
                  src="../../assets/images/settings.png"
                  alt=""
                  class="w-4 h-4 md:w-6 md:h-6 mr-1"
                />
                <p class="font-semibold text-sm md:text-md">Setting</p>
              </div>
              <img
                src="../../assets/images/close.png"
                alt=""
                class="ml-4 w-9 h9 cursor-pointer"
                @click="handleDeleteQuestion(question.questionID)"
              />
            </div>
          </div>
          <h2 class="mt-4 text-xl font-medium">
            {{ question.questionText }}
          </h2>
          <div class="flex items-center mt-4">
            <span
              class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
              :class="{ 'bg-greenColor': question.correctAnswer === 'A', 'bg-[#6366F1]': question.correctAnswer !== 'A' }"
            >
              A
            </span>
            <p class="ml-4 text-xl">{{ question.option1 }}</p>
          </div>
          <div class="flex items-center mt-4">
            <span
              class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
              :class="{ 'bg-greenColor': question.correctAnswer === 'B', 'bg-[#6366F1]': question.correctAnswer !== 'A' }"
            >
              B
            </span>
            <p class="ml-4 text-xl">{{ question.option2 }}</p>
          </div>
          <div class="flex items-center mt-4">
            <span
              class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
              :class="{ 'bg-greenColor': question.correctAnswer === 'C', 'bg-[#6366F1]': question.correctAnswer !== 'A' }"
            >
              C
            </span>
            <p class="ml-4 text-xl">{{ question.option3 }}</p>
          </div>
          <div class="flex items-center mt-4">
            <span
              class="w-10 h-10 text-white font-semibold rounded-full bg-[#6366F1] flex items-center justify-center"
              :class="{ 'bg-greenColor': question.correctAnswer === 'D', 'bg-[#6366F1]': question.correctAnswer !== 'A' }"
            >
              D
            </span>
            <p class="ml-4 text-xl">{{ question.option4 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReadingModal from "../../components/Admin/QuestionPage/ReadingModal.vue";
import ErrorLimitQuestion from "../../components/ErrorHandle/ErrorLimitQuest.vue";
import UpdateQuestionModal from "../../components/Admin/QuestionPage/UpdateQuestionModal.vue";
import { useQuestionStore } from "../../store/question";
import { useRoute } from "vue-router";

import { ref, onMounted } from "vue";
const modalActive = ref(null);

const answer = ref(null);
const option1 = ref(null);
const option2 = ref(null);
const option3 = ref(null);
const option4 = ref(null);
const question = ref(null);
const questionid = ref(null);

const questionStore = useQuestionStore();

const route = useRoute(); // Access the route object with useRoute

const limitQuestion = questionStore.validateQuestion.limitQuest;
const questInExam = questionStore.validateQuestion.questInExam;

const handleSubmidAdd = async () => {
  if (questInExam >= limitQuestion) {
    resetForm();
    toggleModal();
    toggleErrorModal();
  } else {
    const data = {
      questionID: questionStore.randomQuestionID(),
      examID: Number(route.params.id),
      questionText: question.value,
      option1: option1.value,
      option2: option2.value,
      option3: option3.value,
      option4: option4.value,
      correctAnswer: answer.value,
      answerID: questionStore.randomAnswerID(),
    };
    console.log(data);
    await questionStore.addQuestion(Number(route.params.id), data);
    resetForm();
    toggleModal();
  }
};

const handleSubmitUpdate = async (questionID) => {
  try {
    const data = {
      questionID: Number(questionID),
      questionText: question.value,
      option1: option1.value,
      option2: option2.value,
      option3: option3.value,
      option4: option4.value,
      correctAnswer: answer.value,
    };

    await questionStore.updateQuestion(questionID, data);
    resetForm();
    toggleUpdateModal();
    questionStore.getQuestionInExam(Number(route.params.id));
  } catch (error) {
    console.error(error);
  }
};

const handleDeleteQuestion = async (questionID) => {
  try {
    await questionStore.deleteQuestion(questionID);
    await questionStore.getQuestionInExam(Number(route.params.id));
  } catch (error) {
    console.log(error);
  }
};

const openQuestionSetting = async (questionID) => {
  questionStore.choosedQuestion = [];

  questionStore.selectQuestionToUpdate(questionID);

  answer.value = questionStore.choosedQuestion[0].correctAnswer;
  question.value = questionStore.choosedQuestion[0].questionText;
  option1.value = questionStore.choosedQuestion[0].option1;
  option2.value = questionStore.choosedQuestion[0].option2;
  option3.value = questionStore.choosedQuestion[0].option3;
  option4.value = questionStore.choosedQuestion[0].option4;
  questionid.value = questionStore.choosedQuestion[0].questionID;

  toggleUpdateModal();
};

const resetForm = () => {
  (answer.value = ""),
    (option1.value = ""),
    (option2.value = ""),
    (option3.value = ""),
    (option4.value = ""),
    (question.value = ""),
    (questionid.value = null);
};

onMounted(async () => {
  await questionStore.getQuestionInExam(Number(route.params.id));
  await questionStore.getLimitQuest(Number(route.params.id));
});

const toggleModal = () => {
  //Hàm cho phép đóng và mở modal
  modalActive.value = !modalActive.value;
};

const isModalErrorActive = ref(null);

const toggleErrorModal = () => {
  isModalErrorActive.value = !isModalErrorActive.value;
};

const updateModalActive = ref(false);

const toggleUpdateModal = () => {
  updateModalActive.value = !updateModalActive.value;
};
</script>

<style lang="scss" scoped></style>
