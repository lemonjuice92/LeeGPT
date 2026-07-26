let chat = document.getElementById("chat");


function sendMessage(){

let input = document.getElementById("message");
let message = input.value;

if(message.trim() === ""){
return;
}


chat.innerHTML += `
<p><b>Selam:</b> ${message}</p>
`;


let reply = getReply(message.toLowerCase());


setTimeout(() => {

chat.innerHTML += `
<p><b>LeeGPT ❤️:</b> ${reply}</p>
`;

chat.scrollTop = chat.scrollHeight;

},800);


input.value="";

}



function getReply(message){


if(message.includes("hello") || message.includes("hi")){
return "Hey Selam ❤️ I’m LeeGPT. Leeman created me as a little surprise for you. How is your day going?";
}


if(message.includes("who are you")){
return "I’m LeeGPT 🤖❤️. I was created by Leeman to keep you company, learn about you, and remind you how special you are.";
}


if(message.includes("leeman")){
return "Ahhh Leeman 😊 The person who made me. He told me he sometimes calls you 'girly' ❤️";
}


if(message.includes("love")){
return "Leeman clearly put a lot of thought into creating this for you. Tell me, what is something you love about him?";
}


if(message.includes("sad") || message.includes("bad")){
return "I’m sorry you’re feeling that way ❤️ Tell me what happened. I’m listening.";
}


if(message.includes("happy")){
return "That makes me happy too 😊 What made your day special?";
}


return "I’m still learning about you, Selam 😊 Tell me something about yourself. What is something that makes you smile?";

}
