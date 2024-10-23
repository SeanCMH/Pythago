const inputLength1 = document.getElementById("input-length-1");
const inputLength2 = document.getElementById("input-length-2");
const submitButton = document.getElementById("submit-button");
const triangleOutput = document.getElementById("triangle-output");


document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});
  
let outputLength1;
let outputLength2;
let outputLength3;

let getValues = () => {
    outputLength1 = parseFloat(inputLength1.value);
    outputLength2 = parseFloat(inputLength2.value);
    
    // Utfører kalkulasjonene gjennom egne funksjoner:
    calculateHypotenuse();
    updateTriangleOutput();
    drawTriangle();  
}

submitButton.onclick = getValues;

// Oppdaterer teksten under input feltene med hypotenusens lengde:
let updateTriangleOutput = () => {
    triangleOutput.innerHTML = `sqrt(${outputLength1}&sup2 + ${outputLength2}&sup2) = ${outputLength3}`; 
};

// Lengden til den lengste linjen (hypotenusen regnes ut):
let calculateHypotenuse = () => {
    const outputLength3squared = (outputLength1 ** 2) + (outputLength2 ** 2);
    outputLength3 = Math.sqrt(outputLength3squared);
}

// Red line (horisontal linje):
let makeLineOne = () => {
    const x1 = 10, y1 = 10;
    const x2 = x1 + outputLength1;
    const y2 = y1; 

    let lineOne = document.getElementById("line-1-svg");
    setLineAttributes(lineOne, x1, y1, x2, y2);
}

// Blue line (vertikal):
let makeLineTwo = () => {
    const x1 = 10 + outputLength1; 
    const y1 = 10;
    const x2 = x1;
    const y2 = y1 + outputLength2;

    let lineTwo = document.getElementById("line-2-svg");
    setLineAttributes(lineTwo, x1, y1, x2, y2);
}

// Green line (hypotenus):
let makeLineThree = () => {
    const x1 = 10 + outputLength1; 
    const y1 = 10 + outputLength2;
    const x2 = 10; 
    const y2 = 10; 

    let lineThree = document.getElementById("line-3-svg");
    setLineAttributes(lineThree, x1, y1, x2, y2);
}

// Tegner hele trekanten:
let drawTriangle = () => {
    makeLineOne();
    makeLineTwo();
    makeLineThree();
}

// Egen funksjon for å endre verdiene i SVG linjene:
function setLineAttributes(lineElement, x1, y1, x2, y2) {
    lineElement.setAttribute('x1', `${x1}`);
    lineElement.setAttribute('y1', `${y1}`);
    lineElement.setAttribute('x2', `${x2}`);
    lineElement.setAttribute('y2', `${y2}`);
}