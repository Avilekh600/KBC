import React, { useEffect, useState  } from 'react';
import useSound from 'use-sound';
import play from '../assets/src_sounds_play.mp3';
import wrong from '../assets/src_sounds_wrong.mp3';
import correct from '../assets/src_sounds_correct.mp3';


export default function Questions({ data , setQnumber , Qnumber, setTimeOut }) {
    const [question,setQuestion] = useState(null);
    const [selectedAns,setSelectedAns] = useState(null);
    const [className,setClassName] = useState("answer");
    const [playing] = useSound(play);
    const [wrongAnswer] = useSound(wrong);
    const [correctAnswer] = useSound(correct);

    useEffect(()=>{
      playing();
    },[playing]);

    useEffect(() => {
                setQuestion(data[Qnumber - 1]);
    },[data,Qnumber]);

    const handleClick = (a) => {
             setSelectedAns(a);
            //  setClassName("answer active");
             setClassName(a.correct ? "answer correct" : "answer wrong");
            setTimeout(() => {
              if(a.correct){
                correctAnswer();
               setTimeout(() => {
                Qnumber < 15 ? setQnumber((prev) => prev + 1) : setQnumber(16);
                setSelectedAns(null);
               }, 3000);
              }
              else{
                wrongAnswer();
                setTimeout(() => {
                  setTimeOut(true);
                }, 3000);
              }
            }, 3000);
    }

  return (
    <div className='Qcontainer'>
        <div className="question">
               {question?.question}
        </div>
        <div className="answers">
            {
              question?.answers.map((ans) =>(
                <div className={ selectedAns === ans ? className : "answer"} onClick={() => handleClick(ans)}>{ans.text}</div>
              ))
            }
        </div>
       
    </div>
  )
}
