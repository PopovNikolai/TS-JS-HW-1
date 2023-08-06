alert("Do you want to enter a title for a block?");
const commandForCurrentUser = prompt("Enter the title for a block");
const secondCommandForCurrentUser = prompt("Enter unit's title");
const dataFromCurrentUser = commandForCurrentUser + secondCommandForCurrentUser;
if (dataFromCurrentUser) {
    alert(`${commandForCurrentUser}, ${secondCommandForCurrentUser}`);
} 