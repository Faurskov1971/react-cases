import Head from 'next/head';
import Question from './Question';
import utilStyles from '../../styles/utils.module.css';
import { useState } from 'react';

// Se JSON-fils opbygning med Arrays i Arrays
/*
   games 
    --> question_array 
    --> answer_array
*/

interface ICategory {
  key:number;
  category:string;
  gamePointF:Function;
  question_array:Array<IQuestion_array>;
}

interface IQuestion_array{
  question:string;
  info:string;
  answer_array:Array<string>;
}

export default function Category(data:ICategory) {
const [activeCategory, setActiveCategory] = useState<number>(0)
const activeCategoryF=()=>{
  setActiveCategory(activeCategory+1);
}
  return (
    <>
    <Head>
      <title>QUIZ | Question... </title>
    </Head>
    <div className={(activeCategory<5)?utilStyles.category:utilStyles.category+" "+utilStyles.inactive}>
      <h3>{data.category}</h3>
      {data.question_array.map(((q,index)=>{
        return(
          <Question 
            key            = {index}
            text           = {q.question} 
            answer_array   = {q.answer_array}
            info           = {q.info} 
            gamePointF     = {data.gamePointF}
            point          = {(index+1)*100}
            activeCategoryF = {activeCategoryF}
            />
        )    
      }))}
      </div>
    </>
  )
}