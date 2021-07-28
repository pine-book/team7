var rq
let frag

function read(year, month, day) {
    const elm = document.getElementById("day_task");
    elm.innerHTML = ''
    rq = new XMLHttpRequest();
    let path = year + "/" + month + "/" + day　 + "/" + "data.json"
    console.log(path)
    rq.open("GET", path);
    rq.onreadystatechange = receive
    rq.send(null)
}

function receive() {
    console.log(rq.readyState)
    if (rq.readyState == 4) {
        if (rq.status == 200) {
            console.log("get json file successfully!")
            jdat = rq.responseText;
            let dat = eval("(" + jdat + ")")
            console.log(dat.length)
            const elm = document.getElementById("day_task");
            for (let i = 0; i < dat.length; i++) {
                let str = '<p class="task_time">' + dat[i].time_from + "~" + dat[i].time_to + '</p>' + '<p class="task_name">' + dat[i].event_name + '</p>';
                elm.innerHTML += str
            }

        }
    }
}