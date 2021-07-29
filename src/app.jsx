// https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/

import React, { useState } from "react";

export default function App() {
  const questions = [
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
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
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

  return (
    <div className="wrapper">
      <div className="intro">
        <h1>Welcome</h1>
        <img
          src="https://images.unsplash.com/photo-1579724037206-e0a2fa4e0718?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="African Grey Parrot"
          height="680"
        />
        <p>
          My name is Lily. I am an African Grey parrot. I love trivia! Can you
          pass my quiz?
        </p>
      </div>
      <h2>QUIZ</h2>
      <div className="app">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {false ? (
          <div className="score-section">
            You scored 1 out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question 1</span>/{questions.length}
              </div>
              <div className="question-text">
                This is where the question text should go
              </div>
            </div>
            <div className="answer-section">
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
            </div>
          </>
        )}
      </div>
      <div className="footer">
        <p>
          Visit my friends{" "}
          <a
            href="https://rhetorical-radical-animals.glitch.me/"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
