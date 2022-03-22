// expressHelpers.js

const findUser = () => {};

module.exports = findUser;

// expressHelpersFancy.js

const findUser = () => {};

module.exports = { findUser };
// server.js

const findUser = require("expressHelpers.js");

const helpers = require("expressHelpersFancy.js");
helpers.findUser;

const { findUser } = require("expressHelpersFancy.js");
