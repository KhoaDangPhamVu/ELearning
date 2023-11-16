const db = require("../models");
const { QueryTypes } = require("sequelize");

// 1. Lấy thông tin đã làm bài của người dùng.
const getQuestionsHistoryInExam = async (req, res) => {
  try {
    const examID = req.params.examID;
    const userID = req.params.userID;
    console.log(examID);
    console.log(userID);
    const query = `
      SELECT			
      examHistories.questionID,
      examHistories.selectedAnswer,
      answers.correctAnswer,
      questions.questionText,
      questions.option1,
      questions.option2,
      questions.option3,
      questions.option4
    FROM
      examHistories
    LEFT JOIN
      questions ON examHistories.questionID = questions.questionID
    LEFT JOIN
      answers ON questions.questionID = answers.questionID
    WHERE
      examHistories.userID = :userID
      AND questions.examID = :examID;
  `;
    const questions = await db.sequelize.query(query, {
      replacements: { examID: examID, userID: userID },
      type: QueryTypes.SELECT,
    });
    res.status(200).json(questions);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

// 2. Tính điểm và tổng câu hỏi.
// const getScoreAndNumQuests = async (req, res) => {
//   try {
//     const examID = req.params.examID;
//     const userID = req.params.userID;
//     const queryQuestion = `
//       SELECT COUNT(examID) AS "NumberQuest" FROM questions WHERE examID = :examID
//       `;
//     const query = `
//       SELECT
//         SUM(CASE WHEN examHistories.selectedAnswer = answers.correctAnswer THEN 1 ELSE 0 END) AS numOfCorrectAnswer
//   FROM
//     examHistories
//   LEFT JOIN
//     questions ON examHistories.questionID = questions.questionID
//   LEFT JOIN
//     answers ON questions.questionID = answers.questionID
//   WHERE
//     examHistories.userID = :userID
//     AND questions.examID = :examID;
//     `;
//     const score = await db.sequelize.query(query, {
//       replacements: { examID: examID, userID: userID },
//       type: QueryTypes.SELECT,
//     });
//     const numQuestExam = await db.sequelize.query(queryQuestion, {
//         replacements: { examID: examID },
//         type: QueryTypes.SELECT
//       });
//     const result = {score.data ,numQuestExam.data }
//     res.status(200).json(result);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// };

const getQuestionsAndCorrectQuest = async (req, res) => {
    try {
      const examID = req.params.examID;
      const userID = req.params.userID;
  
      const queryQuestions = `
        SELECT COUNT(examID) AS "NumberQuest" FROM questions WHERE examID = :examID
      `;
  
      const queryCorrectQuest = `
        SELECT
          SUM(CASE WHEN examHistories.selectedAnswer = answers.correctAnswer THEN 1 ELSE 0 END) AS numOfCorrectAnswer
        FROM
          examHistories
        LEFT JOIN
          questions ON examHistories.questionID = questions.questionID
        LEFT JOIN
          answers ON questions.questionID = answers.questionID
        WHERE
          examHistories.userID = :userID
          AND questions.examID = :examID;
      `;
  
      const [scoreResult, numQuestExamResult] = await Promise.all([
        db.sequelize.query(queryCorrectQuest, {
          replacements: { examID: examID, userID: userID },
          type: QueryTypes.SELECT,
        }),
        db.sequelize.query(queryQuestions, {
          replacements: { examID: examID },
          type: QueryTypes.SELECT,
        }),
      ]);
  
      const result = {
        correctQuestion: Number(scoreResult[0].numOfCorrectAnswer),
        numberQuestionInExam: Number(numQuestExamResult[0].NumberQuest),
      };
  
      res.status(200).json(result);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };

module.exports = {
  getQuestionsHistoryInExam,
  getQuestionsAndCorrectQuest,
};
