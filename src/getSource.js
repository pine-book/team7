let rq;
var frag;
let month = 7, day = 23;
 function read() {
     rq = new XMLHttpRequest();
     rq.open("GET", "Sample.json");
     rq.onreadystatechange = receive;
     rq.send(null);
  }

  function receive() {
     if (rq.readyState == 4) {
        
        if (rq.status == 200) {
           jdat = rq.responseText;
           let dat = eval("(" + jdat + ")");

           const elm = document.getElementById("day_task");
           
           for (let i = 0; i < dat.length; i++) {
              if (month == dat[i].month && day == dat[i].day && dat[i].day != frag) {
                  let str = "<p>" + dat[i].time + "  " + dat[i].name +"</p>";
                  elm.innerHTML += str;
              }
           }
           frag = dat[i].day
        }
     }
 }