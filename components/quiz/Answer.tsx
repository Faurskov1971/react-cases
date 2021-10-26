import utilStyles from '../../styles/utils.module.css';




interface IAnswer {
  text: string;
  answerF:Function;
}

export default function Question(data:IAnswer) {
  return (
    <>
      <div>
        <button 
          className={utilStyles.buttonAnswer}
          onClick={()=>{data.answerF(data.text)}}
          >
          {data.text}
        </button>
      </div>
    </>
  )
}
