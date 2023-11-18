const db = require("../models");
const { QueryTypes } = require("sequelize");

const Result = db.results;

// 1. Lấy thông tin đã làm bài của người dùng.
const getTrackingQuestInExam = async (req, res) => {
  try {
    const examID = req.params.examID;
    const userID = req.params.userID;
    console.log(examID);
    console.log(userID);
    const query = `
      SELECT			
      trackingexams.questionID,
      trackingexams.selectedAnswer,
      answers.correctAnswer,
      questions.questionText,
      questions.option1,
      questions.option2,
      questions.option3,
      questions.option4
    FROM
      trackingexams
    LEFT JOIN
      questions ON trackingexams.questionID = questions.questionID
    LEFT JOIN
      answers ON questions.questionID = answers.questionID
    WHERE
      trackingexams.userID = :userID
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


const getQuestionsAndCorrectQuest = async (req, res) => {
    try {
      const examID = req.params.examID;
      const userID = req.params.userID;
  
      const queryQuestions = `
        SELECT COUNT(examID) AS "NumberQuest" FROM questions WHERE examID = :examID
      `;
  
      const queryCorrectQuest = `
        SELECT
          SUM(CASE WHEN trackingexams.selectedAnswer = answers.correctAnswer THEN 1 ELSE 0 END) AS numOfCorrectAnswer
        FROM
          trackingexams
        LEFT JOIN
          questions ON trackingexams.questionID = questions.questionID
        LEFT JOIN
          answers ON questions.questionID = answers.questionID
        WHERE
          trackingexams.userID = :userID
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

  // 3. Add result

  const addResult = async(req,res) => {
    try{
      // Request body
      const {resultID,examID,userID,score,time} = req.body

      // Check validate
      if(!resultID || !examID || !userID || !score || !time){
        return res.status(400).json({ success: false, message: 'Missing required fields in the request body.' });
      } 

      const result =  await Result.create({
        resultID,
        examID,
        userID,
        score,
        time
      })

      res.status(200).json({ success: true, message: 'Result created successfully', data: result });

    }catch(err){
      res.status(500).send(`An error occurred while add Result: ${err.message}`);
    }
  }

module.exports = {
  getTrackingQuestInExam,
  getQuestionsAndCorrectQuest,
  addResult
};
