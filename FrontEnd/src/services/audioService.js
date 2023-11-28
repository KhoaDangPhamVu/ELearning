import audioApi from './api/apiAudio'

export default {
    getAudio(fileID){
        return audioApi().get(`getAudio/${fileID}`)
    }
}