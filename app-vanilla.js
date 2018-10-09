const element = document.createElement('h1');
element.setAttribute('id', 'title');
element.textContent = 'hello world ';

const spamElement = document.createElement('spam');
spamElement.textContent = 'by vanilla ';
element.appendChild(spamElement);

const spamTime = document.createElement('spam');
spamTime.textContent = 'none';
element.appendChild(spamTime);

document.getElementById('app-vanilla').appendChild(element);

function setTimeNow(){
    spamTime.textContent = new Date().toLocaleTimeString();
}

setInterval(setTimeNow,1000);