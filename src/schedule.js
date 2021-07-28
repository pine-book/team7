function show_day() {
    document.getElementById("date").innerHTML = get_day();
    create_cal()
}

function get_day() {
    let now = new Date()
    let year = now.getFullYear()
    let mon = now.getMonth() + 1 //１を足すこと
    let day = now.getDate()
    let s = year + "/" + mon + "/" + day
    return s
}
