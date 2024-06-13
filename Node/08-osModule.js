const os = require ('os');
const fs = require('fs');
const http = require('http');

console.log(os.hostname());
const time = os.uptime();

console.log(os.release());