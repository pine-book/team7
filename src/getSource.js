var rq
let frag

function read(year, month, day) {
    rq = new XMLHttpRequest();
    let path = "../db/2021/07/29/data.json"
    rq.open("GET", path);
    rq.onreadystatechange = receive
    rq.send(null)
}

function receive() {
    if (rq.readyState == 4) {
        if (rq.status == 200) {
            jdat = rq.responseText;
            let dat = eval("(" + jdat + ")")
            const elm = document.getElementById("day_task");
            elm.innerHTML = ''
            for (let i = 0; i < dat.length; i++) {
                let str = '<p class="task_time">' + dat[i].time_from + "~" + dat[i].time_to + '</p>' + '<p class="task_name">' + dat[i].event_name + '</p>';
                elm.innerHTML += str
            }

        }
    } else {
        let str = '<p class="task_name">予定はありません</p>'
        const elm = document.getElementById("day_task");
        elm.innerHTML = ''
        elm.innerHTML += str
    }
}