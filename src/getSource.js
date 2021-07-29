var rq
let frag

function read() {
    const date = document.getElementById('date').innerText;
    rq = new XMLHttpRequest();
    let path = "/db/" + date + "/data.json"
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
                let str = '<p class="task_time">' + dat[i].time_from + "~" + dat[i].time_to + '</p>' + '<p class="task_name">' + dat[i].event_name + '</p>' + '<p class="place_name">' + "場所:" + dat[i].place_name + '</p>' + '<p class="comment">' + "詳細:" + dat[i].comment + '</p>'
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