/**
 * If ts-node is available in the current workspace, apply the require register hook
 * so that .ts files can be used for local rules.
 */
try {
  require("ts-node").register({});
} catch (err) {}

module.exports = require("../../tools/eslint-rules");
