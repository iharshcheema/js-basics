// alert 
alert(
    "This is an alert message"
)
// alert does not return anything in console 
a = alert("This is  an alert text")
console.log(a)

//Prompt:
let myname = prompt("What is your name", "Guest")
console.log(myname)

//Confirm:
let deletepost = confirm("Do you really want to delete this post?")

console.log(deletepost)
// true or false will  be returned in console 

// if else example
let confirmation = ("Are you sure that you want to delete this post?")
if (confirmation) {
    console.log("Your post has been deleted successfully")
}
else {
    console.log("Your post is not deleted")
}