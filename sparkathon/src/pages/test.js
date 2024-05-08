import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './test.css';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const college = queryParams.get('college');
  const department = queryParams.get('department');

  const questionsData = [
    {
      question: "What is Python?",
      options: ["A programming language", "A snake", "A movie title"],
      correctOption: 0
    },
    {
      question: "Which keyword is used for defining a function in Python?",
      options: ["func", "def", "define", "function"],
      correctOption: 1
    },
    {
      question: "What data type is used to store a sequence of characters in Python?",
      options: ["char", "string", "text", "str"],
      correctOption: 3
    },
    {
      question: "Which Python library is commonly used for data visualization?",
      options: ["matplotlib", "numpy", "pandas", "sklearn"],
      correctOption: 0
    },
    {
      question: "Which loop is used to iterate over a sequence in Python?",
      options: ["for", "while", "do-while", "foreach"],
      correctOption: 0
    }
   
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [marksObtained, setMarksObtained] = useState(0);
  const [badge, setBadge] = useState('');
  const [remainingTime, setRemainingTime] = useState(5);
  const [data,setData]=React.useState(localStorage.getItem('id'));

  useEffect(() => {
    if (remainingTime === 0 && currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setRemainingTime(10); // Reset timer for the next question
    }

    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000); // Decrease remaining time every second

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [remainingTime, currentQuestionIndex]);

  const handleStartTest = () => {
    const shuffledQuestions = shuffleArray(questionsData).slice(0, 5);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(5).fill(null));
    setShowResult(false);
    setMarksObtained(0);
    setBadge('');

    // Start the timer for the first question
    setRemainingTime(10);
  };

  const handleAnswerSelect = (selectedOptionIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOptionIndex;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setRemainingTime(10); // Reset timer for the next question
  };

  const Navigate = useNavigate();
  const handleback = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/demo2', {
        method: 'POST',
        body: JSON.stringify({data,badge}),
        // body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
         }
    })
    // Assuming you have the necessary checks before navigating
    const data1= await response.json();
    console.log(data1);
    Navigate("/")
  }
  const handleShowResult = () => {
    const obtainedMarks = userAnswers.reduce((totalMarks, answerIndex, index) => {
      const correctOptionIndex = questions[index].correctOption;
      return answerIndex === correctOptionIndex ? totalMarks + 20 : totalMarks;
    }, 0);
    setMarksObtained(obtainedMarks);

    const percentageMarks = (obtainedMarks / 100) * 100;

    if (percentageMarks >= 50 && percentageMarks < 60) {
      setBadge('BASIC');
    } else if (percentageMarks >= 60 && percentageMarks <= 80) {
      setBadge('INTERMEDIATE');
    } else if (percentageMarks > 80) {
      setBadge('COMPLETE');
    }

    setShowResult(true);
   
    
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
   
  };

  return (
    <div className='body23'>
      <div className="container59">
        <div className='title23'> {showResult ? "Congratulations!" : "ATTEMPT THE TEST"}</div>
   
        <div className='details01'>
          <p>Name: {name}</p>
          <p>College: {college}</p>
          <p>Department: {department}</p>
        </div>
        {!showResult ? (
          <>
            <button className="start-test-button" onClick={handleStartTest}>
              Start Test
            </button>
            {questions.length > 0 && currentQuestionIndex < questions.length && (
              <div className="question-container">
                <h2>Question {currentQuestionIndex + 1}</h2>
                <p>{questions[currentQuestionIndex].question}</p>
                <p className='njn12'>Time Remaining: {remainingTime} seconds</p> {/* Display remaining time */}
                <ul className="options">
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`option ${
                        userAnswers[currentQuestionIndex] === index ? 'selected' : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                {currentQuestionIndex !== questions.length - 1 && (
                  <button onClick={handleNextQuestion} disabled={userAnswers[currentQuestionIndex] === null} className='save09'>
                    Next Question
                  </button>
                )}
              </div>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={handleShowResult} className='save08'>Submit and Show Result</button>
            )}
          </>
        ) : (
          <div className="result-container">
            <h2>TEST RESULT</h2>
            <p>Marks Obtained: {marksObtained}</p>
            {badge && <p>Badge: {badge}</p>}
            <button onClick={handleback}  className="skill-button588">Finish</button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Test;
