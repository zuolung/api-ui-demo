const path = require("path");

module.exports = {
  apiUi: {
    buildPath: path.join(__dirname, "./build/api"),
    action: {
      requestImport: `import { createFetch } from "../request"`,
    },
  },
};
