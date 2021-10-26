import Answer from './Answer';
import utilStyles from '../../styles/utils.module.css'
import { useState} from 'react';
import { AiOutlineCheck } from "react-icons/ai";

interface IQuestion {
  text: string;
  info:string;
  answer_array:string[];
  gamePointF:Function;
  activeCategoryF:Function;
  point:number;
}

export default function Question(data:IQuestion) {
  const [active, setActive]=useState<number>(1);
  const [result,setResult]=useState<string>("");
  // Question is responsible for the test of true answer
  // I pass answerF down to the answers, which calls this function
  // to test rigth or wrong
  // Then I reset the gamePoint (Game-state)
  const answerF=(answer:string)=>{
    // The right answer is allways the first answer in the JSON-file (before random order)
    if(answer===data.answer_array[0]){
      data.gamePointF(data.point);
      setResult("right");
    }else{
      data.gamePointF(-data.point);
      setResult("wrong");
    }
    setActive(3);
    data.activeCategoryF();
  }
  // call the function with an array and it returns the array in a random order
  const randomF=(answers:string[])=> {
    const count:number = answers.length;
    const startArray = [];
    const slutArray = [];
    for (let i = 0; i < count; i++) {
      startArray[i] = i;
    }
    while (startArray.length > 0) {
      let tmpTal = Math.random() * startArray.length;
      tmpTal = Math.floor(tmpTal);
      slutArray.push(answers[startArray[tmpTal]]);
      startArray.splice(tmpTal, 1);
    }
    return slutArray;
  }
  // The order off answers is shufled
  const tmpAnswersArray=randomF(data.answer_array);
  return(
      <>
      <div className={(result!=="")?(result==="right")?utilStyles.right:utilStyles.inactive:""}>
        <button 
          className={(active===3 && result==="wrong")?utilStyles.button+" ":utilStyles.button} 
          // The question is activated and show answers
          onClick={()=>{(active===1)?setActive(2):""}}>
          {data.point}
        </button>
        </div>

        <div className={(active!=2)?utilStyles.hideQuestion:""}>
          <div className={utilStyles.questionText}>{data.text}</div>
        
          {tmpAnswersArray.map((a,index)=>{
            return(
              <Answer
                key={index}
                text={a}
                answerF={answerF}
              />)
          })}
        </div>
      </>
        )  
}
