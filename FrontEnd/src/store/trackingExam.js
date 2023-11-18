import { defineStore, acceptHMRUpdate } from 'pinia'



export const useTrackingExamStore = defineStore('trackingExamStore', {
  state: () => ({
    questions: [],
    selectedQuest: [],
    currentQuestionIndex: 0
  }),
  getters: {
    getCurrentIndex(){
      return this.currentQuestionIndex + 1;
    }

  },
  actions: {
     isSelected (questionID) {
      try {
        const selectedQuestion = this.selectedQuest.find((item) => item.questionID === questionID);

        if (selectedQuestion) {
          const selectedAnswer = selectedQuestion.selectedAnswer;
          console.log('Selected Answer:', selectedAnswer);
          return selectedAnswer;
        } else {
          console.log('No selected answer found for the given questionID');
          return null;
        }
      } catch (error) {
        console.log('Error:', error);
        return null;
      }
    },
    isCurrentQuestion(index) {
      return this.currentQuestionIndex === index;
    },
     
    getSelectedAnswer(questionID){
      try {
        const selectedQuestion = this.selectedQuest.find((item) => item.questionID === questionID);

        if (selectedQuestion) {
          const selectedAnswer = selectedQuestion.selectedAnswer;
          console.log('Selected Answer:', selectedAnswer);
          return selectedAnswer;
        } else {
          console.log('No selected answer found for the given questionID');
          return null;
        }
      } catch (error) {
        console.log('Error:', error);
        return null;
      }
    },
    async getQuestionInExam(examID){
      try{
        const response =await questionService.getQuestionInExam(examID);
        this.questions = response.data;
        console.log("Hello haslili",this.questions)
        console.log("GET data successful: ", response.data);
      }catch(error){
        console.log("GET data failed: ", error);
      }
    },
    async selectedQuestion(data){
      try{
      console.log(data);
        
        // Find the index of the object with the same questionID
        const index = this.selectedQuest.findIndex((item) => item.questionID === data.questionID);

        // If an object with the same questionID is found, remove it
        if (index !== -1) {
          this.selectedQuest.splice(index, 1);
        }

        // Push the new object into the array
        this.selectedQuest.splice(index, 0, data);

        console.log("Push data successful", this.selectedQuest);
      } catch (error) {
        console.log("Push data failed: ", error);
      }
    }
  }
})


