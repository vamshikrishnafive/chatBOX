const socket = io('http://localhost:3000');
const messageContiner = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('what is your name? ')
appenMesage('you joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appenMesage(`${data.name}:${data.message}`)
})

socket.on('user-connected', name => {
    appenMesage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appenMesage(`${name} disconnected`)
})

messageForm.addEventListener("submit", e => {
    e.preventDefault()
    const message = messageInput.value
    appenMesage(`You:${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appenMesage(message) {
    const messageElement = document.createElement('div') 
    messageElement.innerText = message
    messageContiner.append(messageElement)
}


















































































































