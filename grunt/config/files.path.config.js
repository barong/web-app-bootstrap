var path = require('path');

module.exports = {
    "resources": "./src/main/resources/static",
    "less_resources": "./src/main/resources/static/less",
    "js_resources": "./src/main/resources/static/js/vendor",
    "build": "./target",
    "build_static": "./target/classes/static",
    "typescript_root": "./src/main/typescript",
    // location where TypeScript source files are located
    "source_ts": "./src/main/typescript/ts",
    "definitions_ts": "./src/main/typescript/defs",
    // location where TypeScript/Jasmine test files are located
    "source_test_ts": "./src/test/typescript",
    // location to place compiled javascript files
    "target_js": "./target/classes/static/js",
    "assets": "./target/classes/static/assets"
};