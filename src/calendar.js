function create_cal(year, month) {



    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0).getDate()
    console.log(endDate)
    const startDay = startDate.getDay()

    let daycount = 1
    let calendarHtml = ''

    calendarHtml += '<h1>' + '<em id="year">' + year + '</em>' + '/' + '<em id="month">' + month + '</em>' + '</h1>'
    calendarHtml += '<table>'
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }
    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'
        for (let i = 0; i < 7; i++) {
            if (i == startDay && daycount == 1) {
                calendarHtml += '<td>' + daycount + '</td>'
                daycount++
            } else if (daycount > 1 && daycount <= endDate) {
                calendarHtml += '<td>' + daycount + '</td>'
                daycount++
            } else {
                calendarHtml += '<td></td>'
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'
    document.getElementById("calendar").innerHTML = calendarHtml
}

function nextCal() {
    let year = document.getElementById("year").textContent
    Number(year)
    console.log(year)
    let month = document.getElementById("month").textContent
    Number(month)
    month++
    console.log(month)
    if (month == 12) {
        month = 0
        year++
    }
    create_cal(year, month)
}

function prevCal() {
    let year = document.getElementById("year").textContent
    Number(year)
    console.log(year)
    let month = document.getElementById("month").textContent
    Number(month)
    month--
    console.log(month)
    if (month == 1) {
        month = 13
        year--
    }
    create_cal(year, month)
}