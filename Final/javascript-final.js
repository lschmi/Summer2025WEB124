//Lydia Schmidt 07/25/25


const button = document.getElementById("calc-button");

function sumAdd() {
  let msg = "";
  let userNumber = parseInt(document.getElementById("num").value);

  for (let i = 1; i <= 10; i++) {
    msg += i + ' + ' + userNumber + ' = ' + (i + userNumber) + "\n";
  }
  document.getElementById('add').textContent = msg;
}

function sumSub() {
  var i = 1;
  let msg = "";
  let userNumber = parseInt(document.getElementById("num").value);

  while (i <= 10) {
    msg += i + ' - ' + userNumber + ' = ' + (i - userNumber) + "\n";
    i++;
  }
  document.getElementById('sub').textContent = msg;
}

function sumMulti() {
  var i = 1;
  let msg = "";
  let userNumber = parseInt(document.getElementById("num").value);

  do {
    msg += i + ' * ' + userNumber + ' = ' + (i * userNumber) + "\n";
    i++;
  } while (i <= 10);
  document.getElementById('multi').textContent = msg;
}

function sumDivi() {
  var i = 1;
  let msg = "";

  let userNumber = parseInt(document.getElementById("num").value);

  while (i <= 10) {
    msg += i + ' / ' + userNumber + ' = ' + (i / userNumber) + "\n";
    i++;
  }
  document.getElementById('divi').textContent = msg;
  //document.getElementById('divi').textContent = parseFloat(msg).toFixed(2);
}


function functionClicks() {
  sumAdd();
  sumSub();
  sumMulti();
  sumDivi();
}

button.addEventListener("click", functionClicks);
