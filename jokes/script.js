fetch('https://icanhazdadjoke.com/slack', {
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    const joke = data.attachments[0].text;
    console.log(joke);
    const jokeElement = document.getElementById('jokes_id');
    jokeElement.innerHTML = joke;
})
.catch(error => {
    console.error('Error fetching the joke:', error);
});
