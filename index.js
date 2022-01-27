const express = require("express");
const baseRoutes = require("./routes/base.routes");
const authRoutes = require("./routes/auth.routes");
const PORT = 6500;

const app = express();

app.use(express.json());

app.use(baseRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, (_) => {
  console.clear();
  console.log(` 
  Info
  ----------------------------------------------
  ===> Server Running on http://127.0.0.1:${PORT}
  ----------------------------------------------`);
});
