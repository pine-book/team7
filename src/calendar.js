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
                calendarHtml += `<td class="calendar_td" data-date="${year}/${month}/${daycount}">${daycount}</td>`
                daycount++
            } else if (daycount > 1 && daycount <= endDate) {
                calendarHtml += `<td class="calendar_td" data-date="${year}/${month}/${daycount}">${daycount}</td>`
                daycount++
            } else {
                calendarHtml += '<td class="is-disabled"></td>'
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
    if (month == 13) {
        month = 1
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
    if (month == 0) {
        month = 12
        year--
    }
    create_cal(year, month)
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("calendar_td")) {
        document.getElementById("date").innerHTML = ""
        let date = e.target.dataset.date
        document.getElementById("date").innerHTML = date
        let data = date.split('/')
        let year = data[0]
        let month = data[1]
        let day = data[2]
        read(year, month, day)

    }
})