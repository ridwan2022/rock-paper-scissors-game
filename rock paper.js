// challenege 3: rock, paper,scissors
//Main deciding function which will select your choice and bot choice and result and give output using rpsfrontend

function rpsGame(yourChoice) {
        console.log(yourChoice);
        
        var humanchoice, botchoice;
        humanchoice = yourChoice.id;
        
        botchoice = numbertochoice(randomrpsint());
       
        results = decidewinner(humanchoice, botchoice); 

        message = finalmessage(results);

        rpsfrontend(humanchoice, botchoice, message);
}

//a random number generator function
function randomrpsint(){
        return Math.floor(Math.random()*3);
}
//connecting that number to a rock or paper or scissors name
function numbertochoice(number){
        return ['rock','paper','scissors'][number]
}
//Those two work will enable me t  find out the bot choice
// now we will create a database and then we will create an array by our choices. these array can be [0,1],[1,0],[0.5,0.5]

function decidewinner(humanchoice, botchoice){
    var rpsdatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1},
    };

var yourscore = rpsdatabase[humanchoice][botchoice];
var computerscore = rpsdatabase[botchoice][humanchoice];

return [yourscore, computerscore];
}
//based on the number of yourscore(wh got 'yourscore' by comparing score to bot ) we will select a condition for our message whether it will be win or lose tie

function finalmessage([yourscore, computerscore]){
        if (yourscore === 0){
                return{'message': 'You Lost!', 'color':'red'};                
        }
        else if (yourscore === 0.5){
                return{'message': 'You Tied!', 'color': 'yellow'};
        }
        else {
                return {'message': 'You Won!', 'color':'green'};
        }
}
//
function rpsfrontend (humanimgchoice, botimgchoice, finalmessage){
//we will attach images with the words

        var imagesdatabase = {
                'rock': document.getElementById('rock').src,
                'paper': document.getElementById('paper').src,
                'scissors': document.getElementById('scissors').src,
                };

//removing all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

//creating seperate divs for seperate section after removing element

        var humandiv = document.createElement('div');
        var botdiv = document.createElement('div');
        var messagediv = document.createElement('div');

//This thing will allow us to attach images and messages to the correct divs

        humandiv.innerHTML = "<img src='"+ imagesdatabase[humanimgchoice] +"' style = 'box-shadow: 0px 10px 50px blue'>"
        messagediv.innerHTML = "<h1 style= 'color:"+finalmessage['color']+"; font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>" // with + sign we do string concatanation
        botdiv.innerHTML = "<img src='"+ imagesdatabase[botimgchoice] +"' style = 'box-shadow: 0px 10px 50px red'>"

// attching the clicked element into the box will allow the ultimate show!! 
        document.getElementById('flex-box-rps-div').appendChild(humandiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(botdiv);
}
//      AND BOOM LET THE MAGIC BE DONE