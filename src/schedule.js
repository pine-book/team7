function show_day() {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    document.getElementById("date").innerHTML = get_day();
    create_cal(year, month)
    read(year, month, date.getDate)
}

function get_day() {
    let now = new Date()
    let year = now.getFullYear()
    let mon = now.getMonth() + 1 //１を足すこと
    let day = now.getDate()
    let s = year + "/" + mon + "/" + day
    return s
}