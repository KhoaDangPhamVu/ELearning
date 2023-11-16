import {createRouter, createWebHistory} from 'vue-router'
import ExamPage from '../views/Admin/ExamPage.vue'
import MainPage from '../views/User/MainPage.vue'
import QuestionPage from '../views/Admin/QuestionPage.vue'
import PracticePage from '../views/User/PracticePage.vue'
import QuizPage from '../views/User/QuizPage.vue'
import { useExamStore } from '../store/exam'
import { useQuestionStore } from '../store/question'
import ResultPage from '../views/User/ResultPage.vue'
import LoginPage from '../views/User/LoginPage.vue'

const routes = [
    {
        path: '',
        redirect: '/home', // Redirect the empty path to '/Home'
    },
    {
        path: '/home',
        name: 'HomePage',
        component: MainPage,
    },
    {
        path: '/login',
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: '/home/practice',
        name: 'PracticePage',
        component: PracticePage,
        beforeEnter: async (to, from, next) => {
            const examStore = useExamStore();
            await examStore.getAllExams(); 
            next();
        },
    },
    {
        path: '/home/practice/exam/:id',
        name: 'QuizPage',
        component: QuizPage,
        beforeEnter: async (to, from, next) => {
            const questionStore = useQuestionStore();
            
            const examId = to.params.id;
            
            await questionStore.getQuestionInExam(examId);
            next();
          },
    },
    {
        path: '/exam',
        name: 'ExamPage',
        component: ExamPage,
    },
    {
        path: '/exam/:id',
        name: 'QuestionPage',
        component: QuestionPage
    },
    {
        path: '/result',
        name: 'ResultPage',
        component: ResultPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
