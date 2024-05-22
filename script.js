const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please, type in a number');
    return;
  }
  // Regex para números de teléfono españoles
  const phoneRegex = /^(?:(?:\+34|0034)?[\s\-]?)?([6789]\d{8})$/;

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'This is a valid' : 'This is an invalid'} spanish number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
