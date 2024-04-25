import React from "react";

const Question = React.forwardRef(
  ({ questionId, questionText, onResponse, isAnswered }, ref) => {
    return (
      <section
        className={`border-t border-slate-300 py-10 ${
          isAnswered ? "opacity-50" : ""
        }`}
        ref={ref}
      >
        <h2 className="md:text-xl lg:text-2xl text-center text-slate-600 mb-5">
          {questionText}
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-4 py-5 w-full">
          <h2 className="text-green-700 md:text-xl lg:text-2xl hidden md:block">
            Agree
          </h2>
          <input
            type="radio"
            name={`question_${questionId}`}
            className=" w-14 h-14 md:w-16 md:h-16 cursor-pointer appearance-none border-4 border-green-700 rounded-full hover:bg-green-700 checked:bg-green-700"
            id=""
            value="1"
            onChange={() => onResponse(questionId, "1")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-12 h-12 md:w-14 md:h-14 cursor-pointer appearance-none border-4 border-grad_one rounded-full hover:bg-grad_one checked:bg-grad_one"
            id=""
            value="2"
            onChange={() => onResponse(questionId, "2")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer appearance-none border-4 border-grad_two rounded-full hover:bg-grad_two checked:bg-grad_two"
            id=""
            value="3"
            onChange={() => onResponse(questionId, "3")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer appearance-none border-4 border-grad_three rounded-full hover:bg-grad_three checked:bg-grad_three"
            id=""
            value="4"
            onChange={() => onResponse(questionId, "4")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer appearance-none border-4 border-grad_four rounded-full hover:bg-grad_four checked:bg-grad_four"
            id=""
            value="5"
            onChange={() => onResponse(questionId, "5")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-12 h-12 md:w-14 md:h-14 cursor-pointer appearance-none border-4 border-grad_five rounded-full hover:bg-grad_five checked:bg-grad_five"
            id=""
            value="6"
            onChange={() => onResponse(questionId, "6")}
          />
          <input
            type="radio"
            name={`question_${questionId}`}
            className="w-14 h-14 md:w-16 md:h-16 cursor-pointer appearance-none border-4 border-grad_six rounded-full hover:bg-grad_six checked:bg-grad_six"
            id=""
            value="7"
            onChange={() => onResponse(questionId, "7")}
          />
          <h2 className="text-grad_six md:text-xl lg:text-2xl hidden md:block">
            Disagree
          </h2>
        </div>
      </section>
    );
  }
);

export default Question;
