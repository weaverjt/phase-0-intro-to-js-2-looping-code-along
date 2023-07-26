// Code your solutions in this file


function writeCards (messages, event) {
    const yourMessage = [];
    for (let i = 0; i < messages.length; i++)
    {    
        const thankYou = "Thank you, " + messages[i] + ", for the wonderful " + event + " gift!";
        
        yourMessage.push(thankYou);
       
        
    }
     return yourMessage;

} 

function countDown (startNum) {

while (startNum > -1) {

  console.log(startNum--);

}



}