let app = require("./app");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
let DB = process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connected !");
  })
  .catch((err) => {
    console.log("DB Error ", err);
  });
app.listen(process.env.PORT, () => {
  console.log("server listening at PORT ", process.env.PORT);
});
