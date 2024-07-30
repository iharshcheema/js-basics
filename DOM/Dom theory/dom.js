// DOM MANIPULATION
console.log(document.forms)
// an array or html collection of all the forms present on our dom will appear


console.log(document.links)
// as there were no links present in the dom an empty html collection wil appear




// Get element  by id 
let headerTitle = document.getElementById('h-one')
console.log(headerTitle)

// we can change the text content by two ways 
headerTitle.innerText = 'this is a new heading'

//  we can also use textContent however it ignores the styling 
headerTitle.textContent = 'this is a third heading'

// innerHTML
document.getElementById('h-one').innerHTML = '<h2>This h2 will be added inside the h1</h2>'
// this will overwite anything written in the h1

// applying styling 
headerTitle.style.backgroundColor = 'pink'






// Get element by class 
listItems = document.getElementsByClassName('list-items')
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = 'grey';
}



// QUERY SELECTOR
let header = document.querySelector('#h-one')
header.style.borderBottom = 'solid 10px red'
// hence a border bottom will get applied to the header 

let seconditem = document.querySelector('li:nth-child(2)')
seconditem.style.color = 'red'


//parent node
// parent node gives us the parent of the element on which it is applied
let unorderedList = document.getElementById('unorderedlist')

console.log(unorderedList.parentNode)
// it will return the div with list items class because div is uls parent

unorderedList.parentNode.style.backgroundColor = ('pink');
// we can change the styling of the parent node in this way




//children
console.log(unorderedList.children)
// it will return the children

unorderedList.children[0].style.backgroundColor = 'grey';
// this will change the background color of the 1st lost item

console.log(unorderedList.firstElementChild)
// this will return the first children 

console.log(unorderedList.lastElementChild)
// this will return the last children





//sibling

// next element sibling 
console.log(unorderedList.nextElementSibling);
// it returns null coz  no next Element sibling exosts 

// previous element sibling 
console.log(unorderedList.previousElementSibling)
// it will return the sibling of the ul, i.e. span







// CREATING A ELEMENT AND INSERTING IT IN THE DOM 
let newDiv = document.createElement('li')

// add class 
newDiv.className = 'divclass'

// add id
newDiv.id = 'divid'

// add text 
divText = document.createTextNode('this is our new list-item places before 2nd li')

// appending this text inside div 
newDiv.appendChild(divText)

// print in console 
console.log(newDiv)

// putting an Element inside dom 
// unorderedlist is already used above i.e. let unorderedList = document.getElementById('unorderedlist')
let thirdlistitem = document.getElementById('second-li')

//    in insert before, parent node is selected at then insertBefore is used and in the parameters which needs to be inserted is passed followed by passing the element before whuch it needs to be inserted
unorderedList.insertBefore(newDiv, thirdlistitem)












 

