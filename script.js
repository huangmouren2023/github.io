document.getElementById('send').addEventListener('click', function() {
    var input = document.getElementById('input');
    var message = input.value;
    input.value = '';

    var chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += '<p><b>You:</b> ' + message + '</p>';

    fetch('https://4e23b70b-a594-4794-84b7-dbbd37aac3b3.ai.rpt.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_message: message }),
    })
    .then(response => response.json())
    .then(data => {
        chatbox.innerHTML += '<p><b>GPT-3.5:</b> ' + data.answer + '</p>';
        chatbox.scrollTop = chatbox.scrollHeight;
    });
});


document.getElementById('clear').addEventListener('click', function() {
    fetch('https://4e23b70b-a594-4794-84b7-dbbd37aac3b3.ai.rpt.dev', {
        method: 'DELETE'
    })
    .then(() => {
        var chatbox = document.getElementById('chatbox');
        chatbox.innerHTML = '';
    });
});
