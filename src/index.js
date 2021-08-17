const init = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#searchByID').value;
    console.log(`User searched for Movie ID# ${input}, connecting to API...`);
    fetch(`http://localhost:3000/movies/${input}`)
      .then(res => res.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        console.log('Retrieved the following data:')
        console.log(data);

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
    form.reset();
  })
}

document.addEventListener('DOMContentLoaded', init);