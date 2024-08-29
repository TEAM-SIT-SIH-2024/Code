const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
