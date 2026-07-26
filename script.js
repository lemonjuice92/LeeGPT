let memories = JSON.parse(localStorage.getItem("selamMemories")) || [];
window.onload = function(){

let chat = document.getElementById("chat");

chat.innerHTML += `
<p><b>LeeGPT ❤️:</b> Hey Selam 🌸<br>
I’m LeeGPT. Leeman created me especially for you.<br>
Before we start, I want to get to know you better 😊<br>
What is one thing that always makes you smile?</p>
`;

};
let chat = document.getElementById("chat");


function sendMessage(){

let input = document.getElementById("message");
let message = input.value;
  saveMemory(message);

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



function getReply(if(message.includes("remember me")){
    
if(memories.length > 0){

return "Of course Selam ❤️ I remember you told me: " + memories[memories.length-1];

}

else{

return "I’m still getting to know you 🌸 Tell me something about yourself.";

}
)function saveMemory(message){

if(message.length > 5){

memories.push(message);

localStorage.setItem(
"selamMemories",
JSON.stringify(memories)
);

}

}{


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


if(message.includes("butterfly")){
return "I remember butterflies are special to you 🦋. Leeman wanted me to know that because he sees the little things that make you happy.";
}


if(message.includes("black")){
return "Black is your style 🖤. It suits your quiet and elegant personality.";
}


if(message.includes("music")){
return "Leeman loves music 🎧. Maybe one day you can tell me what songs make you feel happy.";
}


return "I’m still learning about you, Selam 😊 Tell me something about yourself. What is something small that makes your heart happy?";
}


