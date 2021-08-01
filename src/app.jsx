// https://www.freecodecamp.org/news/author/chris/

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "Which mammal is known to have the most powerful bite in the world?",
      answerOptions: [
        { answerText: "Lion", isCorrect: false },
        { answerText: "Alligator", isCorrect: false },
        { answerText: "Hippopotamus", isCorrect: true },
        { answerText: "Rhinoceros", isCorrect: false }
      ]
    },
    {
      questionText: "What object does a male penguin often gift to a female penguin to win her over?",
      answerOptions: [
        { answerText: "Twig", isCorrect: false },
        { answerText: "Rock", isCorrect: true },
        { answerText: "Leaf", isCorrect: false },
        { answerText: "Fish", isCorrect: false }
      ]
    },
    {
      questionText: "Which bird is known to have the largest wingspan on the planet?",
      answerOptions: [
        { answerText: "Albatross", isCorrect: true },
        { answerText: "African Grey", isCorrect: false },
        { answerText: "Turkey Vulture", isCorrect: false },
        { answerText: "Bald Eagle", isCorrect: false }
      ]
    },
    {
      questionText: "Which popular sea creature has the ability to clone itself?",
      answerOptions: [
        { answerText: "Sponge", isCorrect: false },
        { answerText: "Seahorse", isCorrect: false },
        { answerText: "Crab", isCorrect: false },
        { answerText: "Jellyfish", isCorrect: true }
      ]
    },
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Which bird is unable to move their eyes?",
      answerOptions: [
        { answerText: "Cockatoo", isCorrect: false },
        { answerText: "Owl", isCorrect: true },
        { answerText: "Hawk", isCorrect: false },
        { answerText: "Ostrich", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const handleAnswerButtonClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Lily's Animal Quiz</h1>
        <img
          src="https://images.unsplash.com/photo-1579724037206-e0a2fa4e0718?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="African Grey Parrot"
        />
        <p>
          My name is Lily. I am an African Grey parrot from Massachusetts. I
          love trivia! Can you pass my quiz?
        </p>
      </header>
      <h2>QUIZ</h2>
      <div className="app">
        {showScore ? (
          <>
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <div className="refresh">
              <p>Try again?</p>
              <button className="icon" onClick={() => handleReset()}>
                <FontAwesomeIcon icon={faSync} className="refresh" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
      <footer>
        <p>
          Visit my friends{" "}
          <a
            href="https://rhetorical-radical-animals.glitch.me/"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </footer>
    </div>
  );
}
