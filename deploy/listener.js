var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/mastpushcome', secret: 'lanceyespushCome!' }) 
 
function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";
 
  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}
 
http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(9922)
 
handler.on('error', function (err) {
  console.error('[handler.on] -> Error:', err.message)
})
 
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  if (event.payload.ref === 'refs/heads/master') {
    run_cmd('sh', ['./deploy.sh'], function(text){ console.log(text) });
  }
})
