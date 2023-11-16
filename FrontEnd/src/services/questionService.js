import  questionApi  from './api/apiQuestion'

export default {
    creatQuestion(examID,question){
        return questionApi().post(`addQuestion/${examID}`,question)
    },
    getQuestionInExam(examID){
        return questionApi().get(`getQuestions/${examID}`)
    },
    deleteQuestion(questionID){
        return questionApi().delete(`deleteQuestion/${questionID}`)
    },
    getLimitQuest(examID){
        return questionApi().get(`checkLimitQuest/${examID}`)
    },
    updateQuestion(questionID, questDataUpdate){
        return questionApi().patch(`updateQuestion/${questionID}`, questDataUpdate)
    }
}