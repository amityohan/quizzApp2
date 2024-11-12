import React,{useState} from 'react'
import './QuizzApp.css'
import QuizzData from './Quizz2Data'

function QuizzApp2() {
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0)
  const [answr,setAnswer]=useState(QuizzData[currentIndex].answer)

  function handleSelectedAnswer(answer){
    if (answer===QuizzData[currentIndex].answer){
        setScore(score+1)
    }

  }  
 
function handleQuit(){
    alert("Game Over! Your score is "+score);
}



  return (
    <div className='body'>
      <div>
        <h1>The Question</h1>
      </div>
      <br/>
      <br/>
      <h2>Score:{score}</h2>

      <div>
        <p> 
             {QuizzData[currentIndex].question} {/* THE QUESTION */}
        </p>

        <div className="optionsContainer1">

          <button className='options' onClick={()=>handleSelectedAnswer(QuizzData[currentIndex].optionA)}> {QuizzData[currentIndex].optionA}</button>
          <button className='options' onClick={()=>handleSelectedAnswer(QuizzData[currentIndex].optionB)}> {QuizzData[currentIndex].optionB}</button>
        </div>
        <div className="optionsContainer2">

          <button className='options' onClick={()=>handleSelectedAnswer(QuizzData[currentIndex].optionC)}> {QuizzData[currentIndex].optionC}</button>
          <button className='options' onClick={()=>handleSelectedAnswer(QuizzData[currentIndex].optionD)}>{QuizzData[currentIndex].optionD}</button>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="actionButtons">
        <button className="nextPrevQuit" onClick={()=>setCurrentIndex(currentIndex+1)}> Next</button>
        <button className="nextPrevQuit" onClick={()=>setCurrentIndex(currentIndex-1)}> Prev</button>
        <button className="nextPrevQuit" onClick={handleQuit}> Quit</button>
      </div>
      </div>
    </div>
  )
}

export default QuizzApp2
