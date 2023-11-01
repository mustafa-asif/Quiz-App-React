
import './App.css';
import Button from "./components/Button/Button"
import { useState } from 'react';

// components are nothing but normal functions
// can be used again whenever required
// proms are used in just as parameters and arguments
// use first word captital to diffrentiate


function App() {
  const questionData = [
    
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: ["1996", "1995", "1994", "None of the Above"],
    },
  ];
const [activeQuestion,setActiveQuestion]=useState(0);
const [showResult,setShowResult]=useState(false);

const [selectedAnswer,setSelectedAnswer]=useState("");
const [score,setScore]=useState({
  correctAnswers:0,
  wrongAnswers :0,
  result :0
})
const questionCounter=()=>
{
   
   setScore((prev)=>
    selectedAnswer ?{
      ...prev,
      result: prev.result+5,
      correctAnswers: prev.correctAnswers + 1,
      
    }:{...prev, wrongAnswers: prev.wrongAnswers +1}
   )
   if(activeQuestion !==questionData.length-1)
   {
    setActiveQuestion((prev)=>prev+1);
   }
   else{
    setShowResult(true);
   }
}
const handleAnswer=(correctAnswer)=>
{
  if(correctAnswer===questionData[activeQuestion].answer){
    setSelectedAnswer(true);
    console.log("true");
    questionCounter();
  }
  else{
    setSelectedAnswer(false);
    console.log("false");
    console.log(correctAnswer);
    questionCounter();
  }
}




  
 

  return( 
  <div className='container'>
    {!showResult ?
     ( <div>
      
    <h1 className='heading'>QUIZ APP</h1>
    
    <div>
      <p> Question :{activeQuestion}/{questionData.length}</p>
    </div>
    <div className='Questions'>
      {
        questionData[activeQuestion].question
      }
    </div>
    <div className='btns'>
      {
        questionData[activeQuestion].options.map((e,i)=>{
          return  <button onClick={()=>handleAnswer(e)} key={i}> {e}</button>
        })
      }
    
    </div>
    <div className='changeBtn'>
  <Button label="Next" onClick={questionCounter}
  {...activeQuestion === questionData.length - 1 ? 'Finish' : 'Next'} />
  </div>
  </div>
  
    ):(
      <div className='result'> 
      <div className='img'>
        <img src="https://www.carlswebgraphics.com/congrats/congrats-smiley-animation-2018.gif" alt="congra" width="100%"/>
      </div>
        <h3>SCORECARD</h3>
        <section>
        <p>Total questions: {questionData.length}</p>

        </section>
        <section>

        <p>Total Score: {score.result}</p>
        </section>
        <section>

        <p>CorrectAnswer: {score.correctAnswers}</p>
        </section>
        <section>

        <p>WrongAnswers: {score.wrongAnswers}</p>
        </section>
      </div>
    
    )}
    

    </div>
    )
  
}
export default App;