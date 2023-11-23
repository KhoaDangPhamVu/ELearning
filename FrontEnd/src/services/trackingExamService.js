import trackingExamApi from './api/apiTrackingExam'

export default {
    AddTrackingExam(questions) {
        return trackingExamApi().post('addTrackingExam',questions)
    }
}