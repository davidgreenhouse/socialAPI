const connection = require("../config/connection");
const { User, Thoughts } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Thoughts.deleteMany({});

  await User.deleteMany({});

  const user = [];
});

console.table(user);
console.info("Seeding is complete! 🌱");
process.exit(0);