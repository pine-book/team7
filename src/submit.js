const submit = document.querySelector('.make-button');




submit.addEventListener('click', () => {
  const event_name = document.getElementById('form1');
  const place_name = document.getElementById('form4');
  const time_from = document.getElementById('form3');
  const time_to = document.getElementById('form2');
  const job_tag = document.getElementById('form5');
  const comment = document.getElementById('form6');

  const data = {
    event_name: event_name.value,
    place_name: place_name.value,
    time_from: time_from.value,
    time_to: time_to.value,
    job_tag: job_tag.value,
    comment: comment.value
  };

  fetch(`http://localhost:3000/`+time_from.value, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  
});