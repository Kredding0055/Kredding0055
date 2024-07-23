

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}
const sayMessage = require('../messages/say-message')
sayHelloTo("Woody");

//!!START SILENT
module.exports = { sayHelloTo };
//!!END