const names = ["Ali", "Ahmed", "Sara", "Fatima"];

let elementToFind = "Sara"; 

let isFound = false;
let resultMessage = "";

for (let i = 0; i < names.length; i++) {
    
    if (names[i] === elementToFind) {
        resultMessage = elementToFind + " found at index " + i;
        isFound = true; 
        break; 
    }
}

if (!isFound) {
    resultMessage = "Element not found";
}

console.log(resultMessage);

document.getElementById("result-display").innerText = resultMessage;