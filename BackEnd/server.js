const express = require('express');
const cors = require('cors');
const cookieSession = require("cookie-session");
const app = express();

require('./passport.js')

// Define CORS options
const corsOptions = {
  credentials: true,    // Credentials = true thì mới quản lí đc session cookie, duy trì phiên làm việc
  origin: 'http://localhost:8081', // Use HTTP for local development
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "khoa-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
)

// Routers

// const routerExam = require('./routes/examRouter.js')
// const routerQuestion = require('./routes/questionRouter.js')
require("./routes/authRouter.js")(app);
require("./routes/userRouter.js")(app);
require("./routes/questionRouter.js")(app);
require("./routes/examRouter.js")(app);
require("./routes/trackingExamRouter.js")(app);
require("./routes/resultRouter.js")(app);

// app.use('/api/exam',routerExam)
// app.use('/api/question',routerQuestion)

// Testing API
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//Mỗi khi khởi động lại server mất toàn bộ data nếu force = false
const db = require("./models")

const Role = db.role;

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  //initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
}