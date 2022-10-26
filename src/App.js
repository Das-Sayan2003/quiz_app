import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Startpage from "./components/startpage/Startpage";
import { nanoid } from "nanoid";
import Loader from './components/loader/Loader'

function App() {
  const [questions, setQuestions] = useState(() => []);
  const [answers, setAnswers] = useState(() => []);
  const [randomizedAns, setRandomizedans] = useState(() => []);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [checkedAnsResult, setCheckedAnsResult] = useState(() => []);
  const [gameEnd, setGameEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function loadQuestions() {
    setIsLoading(true);
setGameEnd(false);
    let res = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
    );

    if (res.status === 200) {
      res = await res.json();
      setQuestions(res.results);
      setIsLoading(false);
      setAnswers(() =>
        res.results.map((result) => {
          return [
            {
              correctAnswer: result.correct_answer,
              isSelected: false,
            },
            {
              wrongAnswer1: result.incorrect_answers[0],
              isSelected: false,
            },
            {
              wrongAnswer2: result.incorrect_answers[1],
              isSelected: false,
            },
            {
              wrongAnswer3: result.incorrect_answers[2],
              isSelected: false,
            },
          ];
        })
      );

      setRandomizedans(() =>
        res.results.map((result) => {
          var answers = [result.correct_answer, ...result.incorrect_answers];
          var ranAnswers = [];
          var i = answers.length;
          var j = 0;
          while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranAnswers.push({
              ans: answers[j],
              isSelected: false,
              id: nanoid(),
            });
            answers.splice(j, 1);
          }
          return ranAnswers;
        })
      );
    }
  }

  function handleClick(id, qsetId) {
    setAnswers(() =>
      answers.map((answer, index) => {
        if (index === qsetId) {
          return answer.map((singleAnswer) => {
            var helperobj = { ...singleAnswer, isSelected: false };

            if (singleAnswer.correctAnswer === id) {
              helperobj.isSelected = !singleAnswer.isSelected;
              return helperobj;
            } else if (singleAnswer.wrongAnswer1 === id) {
              helperobj.isSelected = !singleAnswer.isSelected;
              return helperobj;
            } else if (singleAnswer.wrongAnswer2 === id) {
              helperobj.isSelected = !singleAnswer.isSelected;
              return helperobj;
            } else if (singleAnswer.wrongAnswer3 === id) {
              helperobj.isSelected = !singleAnswer.isSelected;
              return helperobj;
            } else {
              return helperobj;
            }
          });
        } else {
          return [...answer];
        }
      })
    );

    setRandomizedans(() =>
      randomizedAns.map((answer, index) => {
        if (index === qsetId) {
          return answer.map((singleAnswer) => {
            var helperobj = { ...singleAnswer, isSelected: false };

            if (singleAnswer.ans === id) {
              helperobj.isSelected = !singleAnswer.isSelected;
              return helperobj;
            } else {
              return helperobj;
            }
          });
        } else {
          return [...answer];
        }
      })
    );
  }

  function checkAnswer() {
    if (gameEnd === false) {
      setCheckedAnsResult(() => {
        const finalArray = [];

        for (let i = 0; i < answers.length; i++) {
          const ansArray = answers[i];
          const ranAnsArray = randomizedAns[i];
          var count = 0;
          for (let x = 0; x < ansArray.length; x++) {
            const ansCheckingArray = [];

            if (x === 0) {
              ansCheckingArray.push(ansArray[0].correctAnswer);
              if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans === ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, true);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              } else if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans !== ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, false);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              }
            } else if (x === 1) {
              ansCheckingArray.push(ansArray[0].correctAnswer);
              if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans === ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, true);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              } else if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans !== ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, false);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              }
            } else if (x === 2) {
              ansCheckingArray.push(ansArray[0].correctAnswer);
              if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans === ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, true);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              } else if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans !== ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, false);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              }
            } else if (x === 3) {
              ansCheckingArray.push(ansArray[0].correctAnswer);
              if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans === ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, true);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              } else if (
                ranAnsArray[x].isSelected === true &&
                ranAnsArray[x].ans !== ansArray[0].correctAnswer
              ) {
                ansCheckingArray.push(ranAnsArray[x].ans, false);
                finalArray.push(ansCheckingArray);
                count = count + 1;
              } else {
                if (count === 0) {
                  ansCheckingArray.push("N/A", false);
                  finalArray.push(ansCheckingArray);
                }
              }
            }
          }
        }
        return finalArray;
      });
      setGameEnd(!gameEnd);
    }
    else
    {
      loadQuestions();
    }
  }

  useEffect(() => {
    setCorrectAnsCount(() => {
      let correct = 0;
      return checkedAnsResult.map((singleResult) => {
        if (singleResult[2] === true) {
          correct = correct + 1;
        }

        return correct;
      })[checkedAnsResult.length - 1];
    });
  }, [checkedAnsResult]);


if(isLoading)
{
  return(<Loader/>)
}
else
{
  if(questions.length === 0)
  {
    return(<Startpage onClick={loadQuestions} />)
  }
  else
  {
    return(  <Main
      randomizedans={randomizedAns}
      value={questions}
      answers={answers}
      onclick={handleClick}
      checkanswer={checkAnswer}
      finalResult={checkedAnsResult}
      gameEnd={gameEnd}
      correctanscount={correctAnsCount}
      startNewGame={loadQuestions}
    />)
  }
}
}

export default App;
