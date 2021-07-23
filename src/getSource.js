let rq
function read() {
    console.log("aaaa");
    rq = new XMLHttpRequest();
    rq.open("GET", "Sample.json");
    rq.onreadystatechange = receive;
    rq.send(null);
 }
 function receive() {
    if (rq.readyState == 4) {
       const elm = document.getElementById("data");
       if (rq.status == 200) {
          jdat = rq.responseText;
          let dat = eval("(" + jdat + ")");
          for (let i = 0; i < dat.length; i++) {
             if (month == dat[i].month && day == dat[i].day) {
                elm.innerHTML += dat[i].day + dat[i].time + dat[i].name;
             }
          }
       }
    }
}