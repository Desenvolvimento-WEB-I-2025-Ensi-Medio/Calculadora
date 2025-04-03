document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  let currentValue = '';

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      if (value === 'C') {
        currentValue = '';
        display.textContent = '0';
      } else if (value === '=') {
        try {
          currentValue = eval(currentValue).toString();
          display.textContent = currentValue;
        } catch (error) {
          display.textContent = 'Erro';
          currentValue = '';
        }
      } else {
        currentValue += value;
        display.textContent = currentValue;
      }
    });
  });
});
