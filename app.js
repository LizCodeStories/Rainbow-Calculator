// update the display
function updateDisplay(value) {
    document.getElementById('display').value = value;
  }

  // append a value to the display
  function appendValue(value) {
    document.getElementById('display').value += value;
  }

  // clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  // evaluate the expression
  function evaluateExpression() {
    const expression = document.getElementById('display').value;
    try {
      const result = eval(expression);
      updateDisplay(result);
    } catch (error) {
      updateDisplay('Error');
    }
  }

 
document.addEventListener('DOMContentLoaded', function() {
    // animated case element
    const animatedCase = document.getElementById('animated-case');
    
    animatedCase.classList.add('open');
});
