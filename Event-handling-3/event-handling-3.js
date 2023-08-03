// Function for creating p element
function addTextToElement(element, text) {
  const textElement = document.createElement('p');
  textElement.className = 'my-text';
  textElement.textContent = text;
  element.appendChild(textElement);
}
// Function for background color change and inside of this function there are conditions to appear text using event listener
function changeBackgroundColor(elementId, color) {
  const element = document.getElementById(elementId);
  if (element) {
    addTextToElement(element, 'It is green now');
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = color;
      const textElement = element.querySelector('.my-text');
      if (textElement) {
        textElement.style.display = 'block';
      }
    });
    element.addEventListener('mouseleave', () => {
      element.style.backgroundColor = 'lightgray';
      const textElement = element.querySelector('.my-text');
      if (textElement) {
        textElement.style.display = 'none';
      }
    });
  }
}
// Calling the function with element ID and desired color
changeBackgroundColor('myDiv', 'green');




