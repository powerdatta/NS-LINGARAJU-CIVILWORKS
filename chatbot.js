
document.getElementById("chatbot-toggle").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "flex";
    this.style.display = "none";
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "none";
    document.getElementById("chatbot-toggle").style.display = "block";
});

document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    document.getElementById("messages").appendChild(userMessage);

    document.getElementById("user-input").value = "";

    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent = "Thank you for reaching out. We'll get back to you shortly!";
        document.getElementById("messages").appendChild(botMessage);
    }, 1000);
}
