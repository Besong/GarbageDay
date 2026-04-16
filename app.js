const path = require("node:path");
const express = require("express");
const scheduleRouter = require("./routes/scheduleRouter")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: false }));


app.use("/", scheduleRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`GarbageDay app - listening on port ${PORT}!`)
});