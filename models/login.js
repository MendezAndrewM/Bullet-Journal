var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// //put following code into controller folder:
// //sync
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// // Store hash in your password DB.
// var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// // Load hash from your password DB.
// bcrypt.compareSync(myPlaintextPassword, hash); // true
// bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
// //end controller folder code