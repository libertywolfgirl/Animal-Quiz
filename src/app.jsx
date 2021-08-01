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
      questionText:
        "Which mammal is known to have the most powerful bite in the world?",
      answerOptions: [
        { answerText: "Lion", isCorrect: false },
        { answerText: "Alligator", isCorrect: false },
        { answerText: "Hippopotamus", isCorrect: true },
        { answerText: "Rhinoceros", isCorrect: false }
      ]
    },
    {
      questionText:
        "What object does a male penguin often gift to a female penguin to win her over?",
      answerOptions: [
        { answerText: "Twig", isCorrect: false },
        { answerText: "Rock", isCorrect: true },
        { answerText: "Leaf", isCorrect: false },
        { answerText: "Fish", isCorrect: false }
      ]
    },
    {
      questionText:
        "Which bird is known to have the largest wingspan on the planet?",
      answerOptions: [
        { answerText: "Albatross", isCorrect: true },
        { answerText: "African Grey", isCorrect: false },
        { answerText: "Turkey Vulture", isCorrect: false },
        { answerText: "Bald Eagle", isCorrect: false }
      ]
    },
    {
      questionText:
        "Which popular sea creature has the ability to clone itself?",
      answerOptions: [
        { answerText: "Sponge", isCorrect: false },
        { answerText: "Seahorse", isCorrect: false },
        { answerText: "Crab", isCorrect: false },
        { answerText: "Jellyfish", isCorrect: true }
      ]
    },
    {
      questionText:
        "What is the only continent in the world known to be snake-free?",
      answerOptions: [
        { answerText: "Australia", isCorrect: false },
        { answerText: "Asia", isCorrect: false },
        { answerText: "Antartica", isCorrect: true },
        { answerText: "Europe", isCorrect: false }
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
      questionText:
        "In North America, which rodent is known to be the largest?",
      answerOptions: [
        { answerText: "Beaver", isCorrect: true },
        { answerText: "Badger", isCorrect: false },
        { answerText: "Gerbil", isCorrect: false },
        { answerText: "Muskrat", isCorrect: false }
      ]
    },
    {
      questionText:
        "In what year did the bald eagle become the national emblem and mascot of the United States of America?",
      answerOptions: [
        { answerText: "1776", isCorrect: false },
        { answerText: "1787", isCorrect: false },
        { answerText: "1860", isCorrect: false },
        { answerText: "1789", isCorrect: true }
      ]
    },
    {
      questionText: "TWhat is the proper name for a group of kittens?",
      answerOptions: [
        { answerText: "Kindle", isCorrect: true },
        { answerText: "Clan", isCorrect: false },
        { answerText: "Herd", isCorrect: false },
        { answerText: "Pack", isCorrect: false }
      ]
    },
    {
      questionText: "Which parrot has the biggest vocabulary?",
      answerOptions: [
        { answerText: "Budgie", isCorrect: false },
        { answerText: "Quaker Parrot", isCorrect: false },
        { answerText: "Amazon Parrot", isCorrect: false },
        { answerText: "African Grey", isCorrect: true }
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
