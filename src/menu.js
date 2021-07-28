const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');
const fromDay = document.getElementById('form3');
const toDay = document.getElementById('form2')

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
    const month = document.getElementById('month').innerHTML
    const selectmonth = selectedNum(month)
    const fromDay = document.getElementById('form3')
    const toDay = document.getElementById('form2')
    let year = new Date().getFullYear();
    let EndDay = new Date(year,Number(month),0).getDate();
    let FirstDay = new Date(year,Number(month),1).getDate();
    fromDay.max = `2021-${selectmonth}-${EndDay}`
    fromDay.min = `2021-${selectmonth}-${"0"+FirstDay}`
    console.log(fromDay.min)
    toDay.max = `2021-${selectmonth}-${EndDay}`
    toDay.min = `2021-${selectmonth}-${"0"+FirstDay}`
});

function selectedNum(num){
    if (Number(num)<10){
        return "0" + String(num)
    }
}