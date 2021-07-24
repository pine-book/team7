function create_cal(year, month) {
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month - 1, 0).getDate()
    const startDay = startDate.getDay()

    let daycount = 1
    let calendarHtml = ''

    calendarHtml += '<h1>' + year + '/' + month + '</h1>'
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

function showCalendar(year, month) {
    for (i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}