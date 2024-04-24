// import questionData from "../../data/surveyQuestions.json";
import Questions from "./Questions";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Questionnaire() {
  // Initialize state to store responses
  const [responses, setResponses] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const questionsRef = useRef([]);

  // function to pull questions from backend
  useEffect(() => {
    // Fetch questions from backend when component mounts
    axios
      .get("http://localhost:3500/api/v1/questions")
      .then((response) => {
        setQuestions(response.data.question);
      })
      .catch((error) => {
        console.error("Error fetching questions", error);
      });
  }, []);

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
        {questions.map((question, index) => (
          <Questions
            key={index}
            questionId={index}
            onResponse={handleResponse}
            questionText={question.questionText}
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
