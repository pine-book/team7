const submit = document.querySelector('.make-button');
const event_name = document.getElementById('form1');
const place_name = document.querySelector('#form4');
const time_from = document.querySelector('#form3');
const time_to = document.querySelector('#form2');
const job_tag = document.querySelector('#form5');
const comment = document.querySelector('#form6');

const data = {
  event_name: event_name.value,
  place_name: place_name.value,
  time_from: time_from.value,
  time_to: time_to.value,
  job_tag: job_tag.value,
  comment: comment.value
};

submit.addEventListener('click', () => {

  fetch('http://localhost:3000/2021/7/21', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
});