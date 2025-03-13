const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

const responses = {
    "hello": "Hello! How can I assist you today?",
    "how are you": "I'm just a program, but I'm here to help!",
    "bye": "Goodbye! Have a great day!",
    "thank you": "You're welcome!",
    "what is your name": "I'm your AI assistant!",
};

const dictionary = {
    "computer": "A computer is an electronic device that processes data.",
    "internet": "The internet is a global network connecting millions of computers.",
    "algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
    "ai": "Artificial Intelligence (AI) is the simulation of human intelligence in machines.",
};

const researchTerms = {
    "research title": "The research title is the name of the study and should be clear, concise, and descriptive.",
    "theoretical framework": "The theoretical framework provides the foundation for research by outlining key theories related to the study.",
    "conceptual framework": "A conceptual framework presents the researcher's understanding of how variables interact.",
    "statement of the problem": "The statement of the problem describes the issue the research aims to address.",
    "research design": "Research design refers to the overall strategy used to integrate study components in a logical way.",
    "review of related literature": "The review of related literature summarizes relevant studies and identifies gaps in knowledge.",
    "research instrument": "Research instruments are tools used to collect data, such as surveys and questionnaires.",
    "research methodology": "Research methodology refers to the methods and procedures used to conduct research.",
    "qualitative research": "Qualitative research focuses on exploring concepts through interviews, observations, and open-ended surveys.",
    "quantitative research": "Quantitative research collects numerical data to analyze relationships between variables.",
    "questionnaire": "A questionnaire is a set of written questions used to collect data from respondents.",
    "research": "Research is a systematic investigation to establish facts and reach conclusions.",
    "dependent variable": "The dependent variable is the outcome being measured in an experiment.",
    "independent variable": "The independent variable is the factor manipulated in an experiment to observe its effect.",
    "participants": "Participants are individuals who take part in a study or experiment.",
    "theory": "A theory is a system of ideas intended to explain something based on general principles.",
    "validity": "Validity refers to the accuracy and credibility of a research study.",
    "variable": "A variable is any factor, trait, or condition that can exist in differing amounts or types.",
};

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendMessage();
});

function sendMessage() {
    let message = userInput.value.trim().toLowerCase();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    setTimeout(() => {
        let response = getResponse(message);
        appendMessage("bot", response);
    }, 500);
}

function getResponse(input) {
    if (responses[input]) return responses[input];
    if (dictionary[input]) return dictionary[input];
    if (researchTerms[input]) return researchTerms[input];

    return "I'm not sure about that. Try asking something else!";
}

function appendMessage(role, text) {
    let msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", role);
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}