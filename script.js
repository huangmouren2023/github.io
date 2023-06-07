document.getElementById('ask-button').addEventListener('click', function() {
    var question = document.getElementById('question-input').value;
    fetch('https://5b0210dd-2041-47d6-be7d-5bf7f20118d6.ai.rpt.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({question: question}),
    })
    .then(response => response.json())
    .then(data => {
        var chatHistory = document.getElementById('chat-history');
        var newMessage = document.createElement('p');
        newMessage.textContent = 'You: ' + question;
        chatHistory.appendChild(newMessage);
        newMessage = document.createElement('p');
        newMessage.textContent = 'GPT-3.5: ' + data.answer;
        chatHistory.appendChild(newMessage);
    });
});

document.getElementById('add-conversation-button').addEventListener('click', function() {
    var initialConversations = document.getElementById('initial-conversations');
    var newConversation = document.createElement('input');
    newConversation.type = 'text';
    initialConversations.appendChild(newConversation);
});

document.getElementById('clear-database-button').addEventListener('click', function() {
    fetch('https://5b0210dd-2041-47d6-be7d-5bf7f20118d6.ai.rpt.dev/clear', {
        method: 'POST',
    });
});
