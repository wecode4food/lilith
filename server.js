//server code
const express	= require("express")
const socket 	= require('socket.io')
var app = express();

var server = app.listen(4500,function(){
	console.log('');
	console.log("\x1b[36m%s\x1b[0m","server started - press ctrl+c for stop_________________________")
  	console.log("\x1b[32m%s\x1b[0m",'-------> listening  on port 80')
});

app.use(express.static('./public/html'))//change for 'html_server_test' to start on chat test page

var io= socket(server);

io.on('connection',function(s){
  console.log("\x1b[33m%s\x1b[0m",'new client conected -->	',s.id);

  s.on('chat',(message_data)=>{
  	io.sockets.emit('chat',message_data);
  	console.log("\x1b[36m%s\x1b[0m","--> global chat message by: ",s.id)
  })

  s.on('test',()=>{
	console.log("\x1b[36m%s\x1b[0m","--> ", s.id, " has executed a test")
})


});
