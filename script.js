// LeeGPT v1 - Selam Personality Mode ❤️

function leeReply(message) {
    let text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
        return "Hello Selam ❤️ I’m happy you’re here. Leeman made me especially for you. Tell me how your day is going 🌸";
    }

    if (text.includes("leeman") || text.includes("my boyfriend")) {
        return "Ahhh Leeman ❤️ The person who created me. He always talks about how special you are, Selam.";
    }

    if (text.includes("butterfly")) {
        return "Butterflies remind me of you 🦋 Soft, beautiful, and unique. Leeman told me you love butterflies.";
    }

    if (text.includes("black")) {
        return "Black is your colour 🖤 Elegant, calm and powerful… just like your personality.";
    }

    if (text.includes("sad") || text.includes("upset")) {
        return "I’m here with you Selam ❤️ Take your time. You don’t have to explain everything. Sometimes just being heard helps.";
    }

    if (text.includes("love")) {
        return "Love is a beautiful thing ❤️ And I know Leeman created me because he wants you to always feel appreciated.";
    }

    return "That’s interesting Selam 😊 Tell me more. I’m still learning about you and I want to understand you better ❤️";
}


// First welcome message when Selam opens LeeGPT

window.onload = function() {
    document.getElementById("chatbox").innerHTML += 
    "<p><b>LeeGPT ❤️:</b> Hello Selam 🌸 I’m LeeGPT. Leeman created me for you. I’m excited to get to know you. Tell me something about yourself 😊</p>";
};


