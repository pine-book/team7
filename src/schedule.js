function show_day() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    document.getElementById("date").innerHTML = get_day();
    create_cal(year, month)
}

function get_day() {
    let now = new Date()
    let year = now.getFullYear()
    let mon = now.getMonth() + 1 //１を足すこと
    let day = now.getDate()
    let s = year + "/" + mon + "/" + day
    return s
}