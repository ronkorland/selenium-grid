function setup(app, express) {

  if ('development' == process.env.NODE_ENV) {
    require("./development.js")(app, express);
  }
  
  if ('staging' == process.env.NODE_ENV) {
    require("./staging.js")(app, express);
  }
  
  if ('production' == process.env.NODE_ENV) {
    require("./production.js")(app, express);
  }
}

module.exports = exports = setup;