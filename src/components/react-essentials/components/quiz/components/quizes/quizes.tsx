import { useState } from 'react';
import { QUIZ_ITEMS } from '../../../../../../data';
import Button from '../../../../../../custom/button';
import { QuestionTimer } from '../question-timer';
import { Completed } from '../completed';

export default function Quizes() {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const activeQuestionsIndex = userAnswers?.length ?? 0;

  const handelSkipAnwer = () => {
    setUserAnswers((prev) => [...(prev || []), null]);
  };

  const correctCount = QUIZ_ITEMS.reduce((count, item, index) => {
    const userAnswer = userAnswers[index];
    return userAnswer === item.correctAnswer ? count + 1 : count;
  }, 0);

  return (
    <>
      {activeQuestionsIndex === QUIZ_ITEMS.length ? (
        <Completed onClick={() => setUserAnswers([])} correctCount={correctCount} total={QUIZ_ITEMS.length} />
      ) : (
        <div className="flex flex-col border w-1/2 bg-indigo-600/50 backdrop-filter backdrop-blur-md gap-4 p-2 rounded-lg duration-300 ">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-white text-xl">{QUIZ_ITEMS[activeQuestionsIndex]?.text}</span>
            <QuestionTimer key={activeQuestionsIndex} onTimer={handelSkipAnwer} timeout={10000} />
          </div>
          <div className="flex flex-col gap-2">
            {QUIZ_ITEMS[activeQuestionsIndex].answers.map((it, index) => (
              <Button
                key={index}
                onClick={() => {
                  setUserAnswers((prev) => [...(prev || []), it]);
                }}
                className="bg-purple-600 p-2 text-white rounded-lg active:scale-90 duration-300 hover:bg-purple-400"
              >
                {it}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
