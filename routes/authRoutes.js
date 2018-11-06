const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("issa successfull deploy Bildo");
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google")),
    app.get("/logout", (req, res) => {
      req.logout();
      res.redirect("/");
    });
  app.get("/api/client", (req, res) => {
    res.send(req.User);
  });
};

// clientID 47054565510-0iul64ng2le7nvjd0obqhgfv9svhbqhp.apps.googleusercontent.com
//clientSecret gYm4S5PaNNzSk1IzpKdfvY_P
