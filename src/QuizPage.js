import React, { useState } from 'react';
import './QuizPage.css';
import './Background.css'
import { questions } from './Questions';
import { Link } from 'react-router-dom';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const selectedAnswer = questions[currentQuestion].options.find(
      (option) => option.answerText === selectedOption
    );
    
    if (selectedAnswer && selectedAnswer.isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  const getFeedbackMessage = () => {
    const percentage = (score / questions.length) * 100;
    
    if (percentage === 100) {
      return <p className="feedback-perfect">Perfect score!</p>;
    } else if (percentage >= 60) {
      return <p className="feedback-great">Great job!</p>;
    } else {
      return <p className="feedback-study">Study harder.</p>;
    }
  };

  return (
    <div className="quiz-container">
        <div className="shape circle"></div>
        <div className="shape diamond"></div>
        <div className="shape triangle"></div>
      {showResult ? (
        <div className="result-section">
          <h1>Quiz Completed!</h1>
          <p>Your score: {score} out of {questions.length}</p>
          <p>{getFeedbackMessage()}</p>
          <button onClick={handleRetakeQuiz}>
            Retake
          </button>
          <Link to="/">
            <button>
              Return
            </button>
          </Link>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-number">
            <p>Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <h2>{questions[currentQuestion].questionText}</h2>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={option.answerText}
                    checked={selectedOption === option.answerText}
                    onChange={handleOptionChange}
                  />
                  {option.answerText}
                </label>
              </div>
            ))}
          </form>
          <button onClick={handleSubmit} disabled={!selectedOption}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
