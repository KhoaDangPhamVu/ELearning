import profileApi from './api/apiProfile'

export default {
    getProfileUser(userID){
        return profileApi().get(`getProfile/${userID}`);
    },
    createProfileUser(userID){
        return profileApi().post(`createProfile/${userID}`);
    },
    editProfileUser(userID,data){
        return profileApi().patch(`editProfile/${userID}`,data);
    },
    uploadImage(image){
        return profileApi().post(`uploadImage`,image);
    },
    saveImage(userID,fileID){
        return profileApi().post(`saveImage/${userID}/${fileID}`);
    },
    deleteImage(fileID){
        return profileApi().post(`deleteImage/${fileID}`);
    },
    getFileID(userID){
        return profileApi().get(`getFileID/${userID}`)
    },
    getHistoryProfile(userID){
        return profileApi().get(`getHistoryProfile/${userID}`);
    },
    getTotalTurns(userID){
        return profileApi().get(`getTotalTurns/${userID}`);
    }
}