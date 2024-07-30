// Event listeners in javascript
// syntax:
// Element.addEventListener("event", function)





// Click  Events
// let buttonTwo = document.querySelector('.btn2');

// function buttonClicked(e) {
    // console.log('Button2 was clicked');
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.classList)
    // console.log(e.type)
    // console.log(e.clientX) 
    // console.log(e.clientY)

    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
//     console.log(e.altKey)
// }
// buttonTwo.addEventListener("click", buttonClicked);



let buttonTwo = document.querySelector('.btn2');

buttonTwo.addEventListener("click", buttonClicked);

function buttonClicked(e) {
    console.log('Button2 was clicked');
}
// we can pass e in the paranthesis of the function and we can use it inside the function as e is basically
// the element we are using in the function e.g. here, it is the button with class bt2 




















// Types of events 
let buttonOne = document.querySelector('.btn1');

// function typeofEvents(e) {
//     console.log('Event type=' + e.type);
// }

buttonOne.addEventListener("mouseup", typeofEvents);
// buttonOne.addEventListener("mousedown", typeofEvents);
// buttonOne.addEventListener("dblclick", typeofEvents);









// Keyboard And input events 

input = document.getElementById('add-items');

function typeofEvents(e) {
    // e.preventDefault();
    console.log('Event type=' + e.type);
    console.log(e.target.value)
}

// input.addEventListener("keydown", typeofEvents)
// input.addEventListener("keyup", typeofEvents)
// input.addEventListener("keypress", typeofEvents)


// input.addEventListener("focus", typeofEvents)
// input.addEventListener("blur", typeofEvents)
// input.addEventListener("cut", typeofEvents)
// input.addEventListener("paste", typeofEvents)
// input.addEventListener("input", typeofEvents)

select=document.getElementById('select');
// select.addEventListener('change', typeofEvents)

submit=document.getElementById('formbtn')
// submit.addEventListener('submit' , typeofEvents)



