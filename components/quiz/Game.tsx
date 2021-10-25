import * as React from "react";
import Head from 'next/head';
import Category from './Category';
import { useState } from 'react';
import {data} from '../../public/data/quizData';
let jeopardyData = data;
export default function Game() {
  
  const [gamePoint, setGamePoint] = useState<number>(0);  
  const gamePointF=(point:number)=>{
    setGamePoint(gamePoint+point);
  }
  
  return (
    <>
    <Head>
      <title>QUIZ | GAME</title>
    </Head>
      <p>Point: {gamePoint}</p>
      {
      jeopardyData.map((game, index:number) => {
        return(
        <Category 
          key             = {index}
          category        = {game.category}
          question_array  = {game.question_array}
          gamePointF      = {gamePointF}
          />
        )  
      }
    )}
    </>
  )
}