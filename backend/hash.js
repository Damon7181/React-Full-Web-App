const bcrypt = require("bcryptjs");

const password = "admin01";
bcrypt.hash(password, 10).then((hash) => {
  console.log("Hashed password:", hash);
});
