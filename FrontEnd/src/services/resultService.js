import resultApi from './api/apiResult'

export default {
    
    getQuestionHistory(examID,userID){
        return resultApi().get(`getQuestResult/${userID}/${examID}`)
    },
    getQuestionsAndCorrectQuest(examID,userID){
        return resultApi().get(`getScoreAndQuest/${userID}/${examID}`)
    }
}