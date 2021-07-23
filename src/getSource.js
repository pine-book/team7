let rq;
var frag;
let month = 7,
    day = 23;

function read() {
    rq = new XMLHttpRequest();
    rq.open("GET", "Sample.json");
    rq.onreadystatechange = receive;
    rq.send(null);
}

function receive() {
    let tmp;
    if (rq.readyState == 4) {

        if (rq.status == 200) {
            jdat = rq.responseText;
            let dat = eval("(" + jdat + ")");

            const elm = document.getElementById("day_task");
            if (0 == elm.children.length) {
                for (let i = 0; i < dat.length; i++) {
                    if (month == dat[i].month && day == dat[i].day) {
                        let str = '<p class="task_time">' + dat[i].time + '</p>' + '<p class="task_name">' + dat[i].name + '</p>';
                        elm.innerHTML += str;
                    }
                }
            }
        }
    }
}