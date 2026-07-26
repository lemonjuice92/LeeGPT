const API_KEY = "PASTE_YOUR_API_KEY_HERE";


async function sendMessage(){

let input = document.getElementById("message");
let chat = document.getElementById("chat");

let userMessage = input.value;

chat.innerHTML += 
"<p><b>Selam:</b> " + userMessage + "</p>";

input.value="";


let response = await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer " + API_KEY
},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[

{
role:"system",
content:
"You are LeeGPT. You were created by Leeman. You are kind, funny, caring and supportive. You know Leeman loves Selam deeply. Call her Selam. Sometimes surprise her by saying Leeman calls her girly. Get to know her by asking questions. Never pretend you are human. You are an AI made as a gift from Leeman."
},

{
role:"user",
content:userMessage
}

]

})

});


let data = await response.json();


chat.innerHTML +=
"<p><b>LeeGPT:</b> "+ 
data.choices[0].message.content+
"</p>";

}
