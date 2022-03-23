const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios").default;
const config = require("./config.json");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let ponline = 0;
let donline = 0;

function refreshPlayerCount(){
  axios.get(`https://api.mcsrvstat.us/2/${config["server-ip"]}`)
  .then((response) => {
    ponline = response.data.players.online;
    console.log("Playercount is refreshed!");
  });

  axios.get(`https://discord.com/api/guilds/654002085632802842/widget.json`)
  .then((res) => {
    donline = res.data.presence_count;
  });
}
refreshPlayerCount();

app.use((req, res, next) => {
  const username = req.cookies["username"];
  let isExist = username != ("" || null);

  res.locals = {
    username: ((isExist) ? username : "Guest"),
    isExist: isExist,
    ponline,
    donline,
    ip: config["server-ip"],
    images: config.images,
    title: config.title
  };
  
  refreshPlayerCount();

  next();
});

let routers = {
  index: require("./routes/index"),
  ranks: require("./routes/ranks"),
  coins: require("./routes/coins"),
  terms: require("./routes/terms"),
  policy: require("./routes/policy"),
  crates: require("./routes/crates"),
}

app.use("/", routers.index);
app.use("/ranks", routers.ranks);
app.use("/coins", routers.coins);
app.use("/terms", routers.terms);
app.use("/policy", routers.policy);
app.use("/crates", routers.crates);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
