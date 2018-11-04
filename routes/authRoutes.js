const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
// clientID 47054565510-0iul64ng2le7nvjd0obqhgfv9svhbqhp.apps.googleusercontent.com
//clientSecret gYm4S5PaNNzSk1IzpKdfvY_P
