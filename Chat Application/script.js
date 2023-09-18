const chatWindow = document.querySelector('#chat-messages');
const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('#send-button');

// function to add messages to the chat window
function addMessage(message, className) {
    const li = document.createElement('li');
    li.textContent = message;
    li.className = className;
    chatWindow.appendChild(li);
}

// function to send messages to the chat window
function sendMessage() {
    const message = messageInput.value;
    if (message) {
        addMessage('You: ' + message, 'user-message');
        // code to send message to server goes here
        messageInput.value = '';
    }
}

// add event listener to the send button
sendButton.addEventListener('click', sendMessage);

// code to receive messages from server goes here
// addMessage('Other User: Hello!', 'other-message');
