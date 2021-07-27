var rq
let frag

function read(year, month, day) {
    rq = new XMLHttpRequest();
    rq.open("GET", "Sample.json");
    rq.onreadystatechange = receive(year, month, day);
    rq.send(null)
}

function receive(year, month, day) {
    console.log(rq.readyState + day)
    if (rq.readyState == 4) {
        if (rq.status == 200) {
            console.log("get json file successfully!")
            jdat = rq.responseText;
            let dat = eval("(" + jdat + ")");

            const elm = document.getElementById("day_task");
            if (0 == elm.children.length) {
                for (let i = 0; i < dat.length; i++) {
                    if (month == dat[i].month && day == dat[i].day) {
                        let str = '<p class="task_time">' + dat[i].time + '</p>' + '<p class="task_name">' + dat[i].name + '</p>';
                        elm.innerHTML += str
                    }
                }
            }
        }
    }
}