const currentUserName = prompt("Enter your name");
const currentUserAge = prompt("Enter your age");
if (+currentUserAge > 17) {
    alert("Welcome " + currentUserName + "!");
} else {
    alert("Access is restricted");
}