function show_day() {
    document.getElementById("date").innerHTML = get_day();
    create_cal()
}

function get_day() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth() + 1; //１を足すこと
    var day = now.getDate();
    var s = year + "/" + mon + "/" + day;
    return s;
}