const db = require('../models');
const { QueryTypes } = require('sequelize');

const Exam = db.exams;
const Answer = db.answers;
const Question = db.questions;
const QuestHistory = db.questionsHistory;


// 1. Lưu giá trị vào bên trong QuestHistory
const createQuestHistory = async (req, res) => {
    try {
      const questionHistoryData = req.body;
  
      // Validate if the request body is an array
      if (!Array.isArray(questionHistoryData)) {
        return res.status(400).send('Invalid request body. Expecting an array.');
      }
  
      // Iterate over the array and create questionHistory records
      const createdQuestionHistories = await Promise.all(
        questionHistoryData.map(async (questionData) => {
          return await QuestHistory.create({
            userID: questionData.userID,
            questionID: questionData.questionID,
            examID: questionData.examID,
            selectedAnswer: questionData.selectedAnswer,
          });
        })
      );
  
      res.status(200).json(createdQuestionHistories);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while creating questionHistories.');
    }
  };


  module.exports = {
    createQuestHistory
  }