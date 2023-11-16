import questHistoryApi from './api/apiQuestHistory'

export default {
    AddQuestHistory(questions) {
        return questHistoryApi().post('addQuestHistory',questions)
    }
}