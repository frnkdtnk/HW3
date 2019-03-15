var fetch = require('node-fetch');
var url = "https://api-v3.mbta.com/vehicles?api_key=7b4d0b0cae4146da93cbe785936db9ff&filter[route]=1&include=trip";
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
db.defaults({ posts: [] }).write();
var run = function(){
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})
}

setInterval(run,15000);