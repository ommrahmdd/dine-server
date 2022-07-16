let mongoose = require("mongoose");
let Dine = require("./../models/dineSchema");
let fs = require("fs");
let dotenv = require("dotenv");
dotenv.config({ path: "./../config.env" });
let data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));
let db = process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose.connect(db).then(() => {
  console.log("++++++++++++ DB connected");
});

async function importData() {
  try {
    await Dine.create(data);
    console.log("data added ");
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

if (process.argv[2] == "import") {
  importData();
}
