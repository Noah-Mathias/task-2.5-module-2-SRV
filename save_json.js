const fs = require("fs");
const path = require("path");

const save = (text) => {
  console.log("saving");
  fs.writeFile(
    path.join(__dirname, ".", "text.json"),
    JSON.stringify(text, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

module.exports = { save };