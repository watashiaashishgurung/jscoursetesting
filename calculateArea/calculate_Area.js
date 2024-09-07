function calculateArea() {
    // Declare variables with let
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    // Calculate the area
    let area = length * width;

    // Update the result inside the function
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}