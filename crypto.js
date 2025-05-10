const bcrypt = require("bcrypt");

const hashPassword = (plainTextPassword, done) => {
  bcrypt.hash(myPlainTextPassword, saltRounds, function (err, hash) {});
};
