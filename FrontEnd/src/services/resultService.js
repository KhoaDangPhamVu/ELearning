import resultApi from './api/apiResult'

export default {
    
    getQuestionTracked(examID,userID,turnID){
        return resultApi().get(`getQuestResult/${userID}/${examID}/${turnID}`)
    },
    getQuestionsAndCorrectQuest(examID,userID,turnID){
        return resultApi().get(`getScoreAndQuest/${userID}/${examID}/${turnID}`)
    },
    getResult(turnID){
        return resultApi().get(`getResult/${turnID}`);
    },
    addResult(data){
        return resultApi().post(`addResult`,data);
    }
}