const uuid = require("uuid");
const userDatabase = {
  "0001": {
    password: "",
    salt: "",
    userName: "",
  },
};

const registerUser = (userName, password) => {
  // Guardar en la base de datos nuestro usuario
  userDatabase[uuid.v4()] = {
    userName: userName,
  };
};
const checkUserCredentials = (userId, password) => {
  return false;
};
