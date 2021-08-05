

function ageFunction(){
    var birthYear = prompt('Enter Your Birth Year,  mate!')
    let ageInDays = (2021 - birthYear) * 365
    let h1 = document.createElement('h1')
    let textResult = document.createTextNode('Your age in days '+ ageInDays)
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textResult)
    document.getElementById('flex-result').appendChild(h1)
}
function resetFunction(){
    document.getElementById('ageInDays').remove();
}


function generateCat(){
    let image = document.createElement('img')
    let div = document.getElementById('flex-cat-gen')
    image.src = "https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg"
    image.height = 200
    image.width =200
    div.appendChild(image)
}

function rpsGame(yourChoice){
  let userChoice, botChoice
  userChoice = yourChoice.id 
  botChoice = numberToChoice(botChoiceInteger())
  results = decideWinner(humanChoice, botChoice);
  message = finalMessage(results)
  rpsFrontEnd(yourChoice.id, botChoice, message);

}

function botChoiceInteger(){
    Math.floor((Math.random) * 3)
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(humanChoice, computerChoice){
    
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5 , 'paper': 0},
        'scissors': { 'paper': 1 , 'scissors': 0.5 , 'rock': 0 },
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0}
    }

    var yourScore = rpsDatabase[humanChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][humanChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return {'message': 'You lost!' ,'color': 'red'}
    }else if(yourScore=== 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}
    }else{
        return {'messsage': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper' : document.getElementById('paper').src
    }

    //let's remove all the images

    document.getElementById('rock').remove()
    document.getElementById('scissors').remove()
    document.getElementById('paper').remove()

    var humanDiv = document.createElement('div')
    var computerDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice]+ "' height= 150 width= 150>"

    document.getElementById('flex-box-rps-div').append(humanDiv)
}

//challenge four change the color of all the button

var all_buttons = document.getElementsByTagName('button');

var copyAllButton = [];

for (let index = 0; index < all_buttons.length; index++) {
    copyAllButton.push(all_buttons[index])
    
}