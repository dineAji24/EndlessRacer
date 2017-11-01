const fs = require('fs');

var DEBUG = Boolean(process.env.DEBUG) || true;
var WRITETOFILE = Boolean(process.env.WRITETOFILE) || true;

// Writes log to a log file
var writeToLog = (logStr) => {
  var logStr = `${new Date()}: ${logStr}`;

  if(DEBUG){
    if(WRITETOFILE){
      fs.appendFile('./logs/server.log', `${logStr} \n`, (err) => {
        if (err) console.log(err);
      });
    }else{
      console.log(logStr);
    }
  }
}

module.exports = {
  writeToLog
}
