let questions;

  function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.innerText = currentQuestion.Question;
  
    optionsElement.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
      const option = currentQuestion[`Option ${i}`];
      if (option) {
        const li = document.createElement('li');
        const label = document.createElement('label');
        label.innerText = option;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'options';
        radio.value = option;
        label.appendChild(radio);
        li.appendChild(label);
        optionsElement.appendChild(li);
      }
    }
  }
  
  const serverUrl = 'http://localhost:8000';  // Adjust the port if needed
  
  fetch(`${serverUrl}/questions.json`)
    .then(response => response.json())
    .then(data => {
      questions = data;
      displayQuestion(0); // Display the first question
    })
    .catch(error => console.error('Error loading questions:', error));
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  let currentQuestionIndex = 0;
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    } else {
      alert('No more questions.');
    }
  });
  