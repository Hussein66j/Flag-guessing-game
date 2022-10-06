let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let score = document.getElementById('score');
let line = document.getElementById('line');
let lose = document.getElementById('lose');
let loseScore = document.getElementById('loseScore');
let loseBtn = document.getElementById('loseBtn');
let win = document.getElementById('win');
let winBtn = document.getElementById('winBtn');
let scoreNum = 0;
let lineNum = 300;

let countries = [
  'Brazil',
  'Portugal',
  'Mexico',
  'South Korea',
  'Uruguay',
  'Spain',
  'Philippines',
  'Saudi Arabia',
  'Argentina',
  'South Africa',
  'Egypt',
  'Iran',
  'Eritrea',
  'Algeria',
  'New Zealand',
  'Djibouti',
  'Lebanon',
  'Palestine',
  'Oman',
  'Australia',
  'Tunisia',
  'Malaysia',
  'India',
  'Pakistan',
  'Comoros',
  'Mauritania',
  'Canada',
  'Singapore',
  'Turkey',
  'Morocco',
  'China',
  'North Korea',
  'Vietnam',
  'Iraq',
  'United States Of America',
  'Japan',
  'Bangladesh',
  'Somalia',
  'Ghana',
  'Azerbaijan',
  'Syria',
  'Maldives',
  'Jordan',
  'United Kingdom',
  'Libya',
  'Qatar',
  'Bahrain',
  'Sudan',
  'Kuwait',
  'Greece',
  'Norway',
  'Iceland',
  'Finland',
  'Thailand',
  'Yemen',
  'Russia',
  'Denmark',
  'Belgium',
  'Sweden',
  'United Arab Emirates',
  'Italy',
  'France',
  'Germany',
  'Austria',
  'Ireland',
  'Colombia',
  'Ukraine',
  'Nigeria',
  'Indonesia',
  'Poland',
  ]
let img = document.getElementById('img');
let answer = '';


function Generate(){
  let randomImage = Math.floor(Math.random()* countries.length);
  answer = countries[randomImage];
  let image = 'country/'+answer+'.png';
  img.src = image;
  
  let domy1= Math.floor(Math.random() * countries.length);
  let domanswer1 = countries[domy1];
  
  let domy2 = Math.floor(Math.random() * countries.length);
  let domanswer2 = countries[domy2];
  
  let domy3 = Math.floor(Math.random() * countries.length);
  let domanswer3 = countries[domy3];
  
  
  let allAnswers = [];
  let switchAnswers = [];
  allAnswers = [answer,domanswer1,domanswer2,domanswer3];
  for(i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
  }
  
  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
  option4.innerHTML = switchAnswers[3];
  
};

option1.addEventListener('click',()=>{
  if (option1.innerHTML == answer) {
    scoreNum ++;
    score.innerHTML = scoreNum;
    loseScore.innerHTML = scoreNum;
    lineNum -=10;
    let ii = lineNum+'px';
    line.style.right = ii;
    if(scoreNum == 30){
      win.style.zIndex = 3;
    };
    option1.style.background = '#00CA27';
    setTimeout(function(){
      option1.style.background='#4a98f7';
       Generate();
    },500);
  }
  else{
    option1.style.background ='#DB0000';
    setTimeout(function(){
      lose.style.zIndex = 2;
    },500)
  }
});

option2.addEventListener('click', () => {
  if (option2.innerHTML == answer) {
    scoreNum++;
    score.innerHTML = scoreNum;
    loseScore.innerHTML = scoreNum;
    lineNum -= 10;
    let ii = lineNum + 'px';
    line.style.right = ii;
    if (scoreNum == 30) {
      win.style.zIndex = 3;
    };
    option2.style.background = '#00CA27';
    setTimeout(function() {
      option2.style.background = '#4a98f7';
      Generate();
    }, 500);
  }
  else {
    option2.style.background = '#DB0000';
    setTimeout(function() {
      lose.style.zIndex = 2;
    }, 500)
  }
});

option3.addEventListener('click', () => {
  if (option3.innerHTML == answer) {
    scoreNum++;
    score.innerHTML = scoreNum;
    loseScore.innerHTML = scoreNum;
    lineNum -= 10;
    let ii = lineNum + 'px';
    line.style.right = ii;
    if (scoreNum == 30) {
      win.style.zIndex = 3;
    };
    option3.style.background = '#00CA27';
    setTimeout(function() {
      option3.style.background = '#4a98f7';
      Generate();
    }, 500);
  }
  else {
    option3.style.background = '#DB0000';
    setTimeout(function() {
      lose.style.zIndex = 2;
    }, 500)
  }
});

option4.addEventListener('click', () => {
  if (option4.innerHTML == answer) {
    scoreNum++;
    score.innerHTML = scoreNum;
    lineNum -= 10;
    let ii = lineNum + 'px';
    line.style.right = ii;
    if (scoreNum == 30) {
      win.style.zIndex = 3;
    };
    option4.style.background = '#00CA27';
    setTimeout(function() {
      option4.style.background = '#4a98f7';
      Generate();
    }, 500);
  }
  else {
    option4.style.background = '#DB0000';
    setTimeout(function() {
      lose.style.zIndex = 2;
    }, 500)
  }
});

loseBtn.onclick = function(){
  option1.style.background = '#4a98f7';
  option2.style.background = '#4a98f7';
  option3.style.background = '#4a98f7';
  option4.style.background = '#4a98f7';
  scoreNum = -1;
  scoreNum++;
  score.innerHTML = scoreNum;
  lineNum = 310;
  lineNum -= 10;
  line.style.right = lineNum + 'px';
  lose.style.zIndex = -2;
  Generate();
}
winBtn.onclick = function(){
  option1.style.background = '#4a98f7';
  option2.style.background = '#4a98f7';
  option3.style.background = '#4a98f7';
  option4.style.background = '#4a98f7';
  scoreNum = -1;
  scoreNum++;
  score.innerHTML = scoreNum;
  lineNum = 310;
  lineNum -= 10;
  line.style.right = lineNum + 'px';
  win.style.zIndex = -2;
  Generate();
}

Generate();
