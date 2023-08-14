const questions = [
    {
      question: "Chief Minister of Madhya pradesh'?",
      options: ["Siddaramaiah", "Pinarayi Vijayan", "Shivraj Singh Chouhan", "Yogi Aadityanath"],
      correctAnswer: "Shivraj Singh Chouhan"
    },
    {
        question: "Chief Minister of Bihar '?",
        options: ["Nitish Kumar", "Arvind Kejriwal", "Yogi Aadityanath", "Bhupendrabhai Patel"],
        correctAnswer: "Nitish Kumar"
      },
      {
        question: "Chief Minister of Uttar pradesh '?",
        options: ["Manik Saha", "Prem Singh Tamang", "N. Biren Singh", "Yogi Aadityanath"],
        correctAnswer: "Yogi Aadityanath"
      },
      {
        question: "Chief Minister of Jharkhand '?",
        options: ["Manik Saha", "Bhagwant Man", "Ashok Gehlot", "Hemant Soren"],
        correctAnswer: "Hemant Soren"
      },
      {
        question: "Chief Minister of Tamil nadu '?",
        options: ["Zoramthanga", "N. Biren Singh", "Conrad Sangma", "M. K. Stalin"],
        correctAnswer: "M. K. Stalin"
      },
      {
        question: "Chief Minister of Gujrat '?",
        options: ["Neiphiu Rio", "Bhupendrabhai Patel", "Conrad Sangma", "Zoramthanga"],
        correctAnswer: "Bhupendrabhai Patel"
      },
      {
        question: "Chief Minister of Orrisa '?",
        options: ["Prem Singh Tamang", "Naveen Patnaik", "Manik Saha", "Ashok Gehlot"],
        correctAnswer: "Naveen Patnaik"
      },
      {
        question: "Chief Minister of West bengal '?",
        options: ["Ashok Gehlot", "N. Rangaswamy", "Bhagwant Mann", "Mamta Banarjee"],
        correctAnswer: "Mamta Banarjee"
      },
      {
        question: "Chief Minister of Maharastra '?",
        options: ["Eknath Shinde", "Mamta Banerjee", "Prem Singh Tamang", "Bhagwant Mann"],
        correctAnswer: "Eknath Shinde"
      },
      {
        question: "Chief Minister of Delhi '?",
        options: ["N. Rangaswamy", "Prem Singh Tamang", "Neiphiu Rio", "Arvind kejrival"],
        correctAnswer: "Arvind kejrival"
      },
   
  
  ];
  
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-btn");
  const scoreDisplay = document.getElementById("score");
  
  submitButton.addEventListener("click", calculateScore);
  
  function calculateScore(event) {
    event.preventDefault();
  
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedOption && selectedOption.value === questions[i].correctAnswer) {
        score++;
      }
    }
  
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
  }
  
  // Populate the form with questions and options
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionHTML = `
      <h3>${i + 1}. ${question.question}</h3>
      ${question.options.map((option, index) => `
        <label>
          <input type="radio" name="q${i}" value="${option}">
          ${option}
        </label><br>
      `).join('')}
    `;
    quizForm.insertAdjacentHTML("beforeend", questionHTML);
  }
  