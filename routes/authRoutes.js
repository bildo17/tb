const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("issa win");
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
    res.send(req.existingUser);
  });
};
