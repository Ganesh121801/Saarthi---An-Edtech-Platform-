import React, { useState, useEffect } from 'react';
import './quiz.css';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Madrid', 'Berlin', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timer, setTimer] = useState(15);

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setTimer(15); // Reset the timer to 15 seconds when starting a new question.
  };

  useEffect(() => {
    if (currentQuestion !== -1 && currentQuestion < questions.length) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          handleAnswer(null); // Call handleAnswer with a null value to indicate a timeout.
          clearInterval(countdown);
        }
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [currentQuestion, timer]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(15); // Reset the timer for the next question.
    } else {
      // Quiz is complete
      if (score === 10) {
        alert("Congratulations! You scored 10 out of 10. You got a 50% discount on our courses.");
      } else if (score >= 7 && score <= 9) {
        alert(`Well done! You scored ${score} out of 10. You got a 30% discount on our courses.`);
      } else {
        alert(`Bad luck! You scored ${score} out of 10.`);
      }
      setCurrentQuestion(-1);
    }
  };

  return (
    <div className='quiz'>
      <nav className='main-navbar'>
        <div className='logo'>
          <h2>
            <span>S</span>aarthi
          </h2>
        </div>
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <Link to='/Home'>HOME</Link>
            </li>
            <li
              className={showDropdown ? 'course-dropdown active' : 'course-dropdown'}
              onClick={toggleDropdown}
            >
              <span>COURSES</span>
              <ul className='course-list'>
                <li>
                  <a href='#'>MY COURSES</a>
                </li>
                <li>
                  <a href='#'>ALL COURSES</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'> COMMUNITY </a>
            </li>
            <li>
              <Link to='/Counselling'>COUNSELLING</Link>
            </li>
          </ul>
        </div>
        <div className='Account-link'>
          <ul className='Account-link-desktop'>
            <li>
              <Link to='/AboutUs'>ABOUT US</Link>
            </li>
            <li>
              <Link to='/Signup'>SIGNUP/LOGIN</Link>
            </li>
            <li>
              <a href='/Profile'> ACCOUNT </a>
            </li>
            <div className='account-logo' href='#'>
              <a href='#'>
                <VscAccount />
              </a>
            </div>
          </ul>
          <div className='hamburger-menu'>
            <a href='#' onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <div className="quiz-container">
        {!quizStarted ? (
          <div>
            <h2>Welcome to the Quiz</h2>
            <button onClick={startQuiz}>Start Quiz</button>
          </div>
        ) : currentQuestion !== -1 ? (
          <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <p>Time remaining: {timer} seconds</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Quiz Complete!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
