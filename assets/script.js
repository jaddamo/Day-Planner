//  Time Vars
var today = new Date();
var hourNow = today.getHours();
today = today.toDateString();

//  Document Selector Vars
var rowID = document.querySelectorAll('[data-id]');
var colLeft = document.querySelectorAll('.left-col');
var colMid = document.querySelectorAll('.middle-col');
var colRight = document.querySelectorAll('.right-col');
var dateHead = document.getElementById('intro-title');

// var buttonID = document.getElementsByClassName(1)
// console.log(buttonID);

// Set header as today's date
dateHead.innerText = today;
dateHead.style.fontSize = "20px";

// Create time slots for left column
for(i = 0; i < 24; i++) {

    if(i == 0) {
        colLeft[0].textContent = "12:00 AM";
    } else if(i < 12) {
        colLeft[i].textContent = i + ":00 AM";
    } else {

        if (i == 12) {
            colLeft[i].textContent = "12:00 PM";
        
        } else {
            var p = i - 12;
            colLeft[i].textContent = p + ":00 PM"
        }
    }
}

// Create input fields for each time slot
for(i = 0; i < 24; i++) {
    var inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");
    inputEl.style.width = "100%";
    inputEl.style.backgroundColor="gainsboro";
    colMid[i].innerText = "";
    colMid[i].appendChild(inputEl);
}

// Create Buttons for right column
for(i = 0; i < 24; i++) {
    var buttonEl = document.createElement("button");
    Object.assign(buttonEl, {
        className: 'button '+ i,
        type: 'button',
    });
    colRight[i].innerText = "";
    colRight[i].appendChild(buttonEl);
}

// Create eventlistener for when a button is pressed 
