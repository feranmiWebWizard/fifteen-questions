import questionData from "../../data/surveyQuestions.json";
import Questions from "./Questions";
import { useState, useRef } from "react";

function Questionnaire() {
  // Initialize state to store responses
  const [responses, setResponses] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const questionsRef = useRef([]);

  // Function to handle user response
  const handleResponse = (questionId, response) => {
    setAnsweredQuestions((prevState) => [...prevState, questionId]);
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
    // Navigate to the next question
    if (questionId < questionsRef.current.length - 1) {
      questionsRef.current[questionId + 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="bg-stone-100 p-4 text-center">
        {questionData.questions.map((question, index) => (
          <Questions
            key={index}
            questionId={index}
            onResponse={handleResponse}
            questionText={question}
            isAnswered={answeredQuestions.includes(index)}
            ref={(element) => {
              questionsRef.current[index] = element;
            }}
          />
        ))}
        <button
          className="bg-grad_four text-slate-100 border w-full max-w-[30rem] py-4"
          onClick={() => console.log(responses)}
        >
          View Results
        </button>
      </div>
    </>
  );
}

export default Questionnaire;
