const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = "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"; // Replace with your API key

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendMessage();
});

async function sendMessage() {
    let message = userInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    appendMessage("bot", "Thinking...");
    let botMessage = document.querySelector(".bot:last-child");

    let response = await fetchAIResponse(message);
    botMessage.textContent = response;
}

function appendMessage(role, text) {
    let msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", role);
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function fetchAIResponse(inputText) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "mistral",
                messages: [{ role: "user", content: inputText }],
                max_tokens: 500
            })
        });

        const data = await response.json();
        return data.choices[0].message.content || "No response.";
    } catch (error) {
        console.error("Error:", error);
        return "Error processing response.";
    }
}