const path = require("path");

module.exports = {
  apiUi: {
    buildPath: path.join(__dirname, "./build/api"),
    mockPort: 10111,
    action: {
      requestImport: `import { createFetch } from "../request"`,
    },
  },
};
