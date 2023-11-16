import Api from './api/apiExam'
import questionAPI from './api/apiQuestion'

export default {
    getAllExams () {
      return Api().get('getAllExams')
    },
    createExam (exam) {
        return Api().post('addExam',exam)
    },
    getExam(examID) {
      return Api().get(`getExam/${examID}`);
    },
    deleteExam(examID){
      return Api().delete(`deleteExam/${examID}`)
    },
    updateExam(examID, updatedExamData) {
      return Api().patch(`updateExam/${examID}`, updatedExamData);
    },
    getNumOfQuest(examID){
      return questionAPI().get(`checkLimitQuest/${examID}`)
    },
    getExam(examID){
      return Api().get(`getExam/${examID}`)
    }

}