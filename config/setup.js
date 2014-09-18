function setup(app, express) {

  if ('development' == process.env.NODE_ENV) {
    require("./development.js")(app, express);
  } else if ('staging' == process.env.NODE_ENV) {
    require("./staging.js")(app, express);
  } else if ('production' == process.env.NODE_ENV) {
    require("./production.js")(app, express);
  } else {
    require("./development.js")(app, express);
  }
}

module.exports = exports = setup;