var key = "This is a very very string test key."

// Create an encryptor
var encryptor = require("simple-encryptor")(key)

var encrypted = encryptor.encrypt("Password@123")
// Should print gibberish:
console.log("encrypted: %s", encrypted)
