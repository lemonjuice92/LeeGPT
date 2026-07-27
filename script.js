let memories = JSON.parse(localStorage.getItem("selamMemories")) || [];
let chat;

window.onload = function () {
    chat = document.getElementById("chat");

    chat.innerHTML = `
    <p><b>LeeGPT ❤️:</b><br>
    Hey Selam 🌸<br><br>
    I'm LeeGPT. Leeman created me especially for you.<br><br>
    Before we start, I want to get to know you better 😊<br>
    What is one thing that always makes you smile?
    </p>
    `;
};

function sendMessage() {

    let input = document.getElementById("message");
    let message = input.value.trim();

    if (message === "") return;

    saveMemory(message);

    chat.innerHTML += `
    <p><b>Selam:</b> ${message}</p>
    `;

    let reply = getReply(message.toLowerCase());

    setTimeout(() => {

        chat.innerHTML += `
        <p><b>LeeGPT ❤️:</b> ${reply}</p>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 500);

    input.value = "";
}

function getReply(message) {

    if (message.includes("remember me")) {

        if (memories.length > 0) {
            return "Of course Selam ❤️ The last thing I remember is: \"" + memories[memories.length - 1] + "\"";
        } else {
            return "I'm still getting to know you 🌸 Tell me something about yourself.";
        }
    }

    if (message.includes("hello") || message.includes("hi")) {
        return "Hey Selam ❤️ I'm LeeGPT. Leeman created me as a little surprise for you. How is your day going?";
    }

    if (message.includes("who are you")) {
        return "I'm LeeGPT 🤖❤️. I was created by Leeman to keep you company and get to know you.";
    }

    if (message.includes("leeman")) {
        return "Ahhh Leeman 😊 He's the one who created me. He also told me he sometimes calls you 'girly'. ❤️";
    }

    if (message.includes("love")) {
        return "Leeman clearly put a lot of thought into creating this for you. ❤️ What is something you love?";
    }

    if (message.includes("sad") || message.includes("bad")) {
        return "I'm sorry you're feeling that way ❤️ I'm here to listen.";
    }

    if (message.includes("happy")) {
        return "That makes me smile too 😊 What made your day special?";
    }

    if (message.includes("butterfly")) {
        return "🦋 Butterflies are beautiful. Leeman wanted me to know they're something special to you.";
    }

    if (message.includes("black")) {
        return "🖤 Black is such an elegant colour. I know it's one you like.";
    }

    if (message.includes("music")) {
        return "🎵 I'd love to know what music you enjoy. Maybe you'll share your favourite songs with me.";
    }

    return "I'm still learning about you, Selam 😊 Tell me something about yourself. I'll remember it.";
}

function saveMemory(message) {

    if (message.length > 5) {
        memories.push(message);

        localStorage.setItem(
            "selamMemories",
            JSON.stringify(memories)
        );
    }
}


