const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: "secretPassword",
    //TODO debería estar escrito en una variable de entorno
  };
  passport.use(
    new JwtStrategy(opts, (decoded, done) => {
      console.log("decoded jwt", decoded);
      return done(null, false);
    })
  );
};
