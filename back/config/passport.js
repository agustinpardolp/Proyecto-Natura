//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//We will need the models folder to check passport agains
var Consultant = require("../db/models").Consultant;
var Superviser = require("../db/models").Superviser;

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
//
passport.deserializeUser(function(id, done) {
  Consultant.findByPk(id)
    .then(consultant => {
      if (!consultant) {
        Superviser.findByPk(id).then(superviser => {
          done(null, superviser);
        });
      } else {
        done(null, consultant);
      }
    })
    .catch(done);
});
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password

passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "userIdent",
      passwordField: "pass"
    },

    function(userIdent, pass, done) {
      console.log("userIdent: ", userIdent, "pass: ", pass);

      if (pass.includes("@")) {
        Superviser.findOne({ where: { mail: pass } }).then(function(dbUser) {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect code."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (dbUser.mail != pass) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          // If none of the above, return the user
          return done(null, dbUser);
        });
      } else {
        Consultant.findOne({ where: { code: userIdent } }).then(function(
          dbUser
        ) {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect code."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (dbUser.identification != pass) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          // If none of the above, return the user
          return done(null, dbUser);
        });
      }
    }
    // When a user tries to sign in this code runs
  )
);

// Exporting our configured passport
module.exports = passport;
