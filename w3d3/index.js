const express = require("express");
const cookieParser = require("cookie-parser");
const {
  authenticateUser,
  fetchUserInformation,
  createUser,
} = require("./helpers/userHelpers");
const userDatabaseIsh = require("./data/userData");
const app = express();
const port = 3000;

app.use(express.static("public")); // Static files (css / images)
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.set("view engine", "ejs"); //

app.get("/", (req, res) => {
  const userInfo = fetchUserInformation(userDatabaseIsh, req.cookies.email);
  const templateVars = { avatar: userInfo.avatar, email: userInfo.email };

  return res.render("index", templateVars);
});

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body;

  const { error, data } = authenticateUser(userDatabaseIsh, email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  res.cookie("email", email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

app.get("/register", (req, res) => {
  return res.render("register", { avatar: null });
});

app.post("/register", (req, res) => {
  const { error, data } = createUser(userDatabaseIsh, req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  res.cookie("email", data.email);

  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`));
