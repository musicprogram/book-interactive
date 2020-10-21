import React, {Fragment, useEffect, useState, useRef} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Question from "./Question";

import ModalFinish from "./ModalFinish";

import {myQuestions} from '../../../data/question_data'
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryNavigation, linksSvg} from "../../../GlobalState";

function AlphabetSoupComponent() {
  const [questions,setQuestions] = useState(myQuestions);
  const [newAnswers,setNewAnswers] = useState([]);
  const [missingInfo, setMissingInfo] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [show, setShow] = useState(true);
  const links = useRecoilValue(linksSvg);


  const [category, setCategory] = useRecoilState(categoryNavigation);


  const [howManyTimes, setHowManyTimes] = useState(0);

  const list = useRef()

  useEffect(()=>{
  },[]);

  const handleSubmit = ()=>{

    let validateArr = []
    let obj = {}

    newAnswers.map((answer,i)=>{
      questions.map((question,i)=>{
        if(answer.question === question.id){
         if(answer.answer === question.correctAnswer){
           changeStyles(`check-${question.id}`, "black");
           obj = {
             question: answer.question,
             correct: true
           }
           validateArr.push(obj);
         }else{
           changeStyles(`check-${question.id}`, "red", "bold");
           obj = {
             question: answer.question,
             correct: false
           }
           validateArr.push(obj);
         }
        }
      })
    })


    const arr = validateArr.find(question => question.correct === false);
    console.log(arr);
    debugger
    if(arr){
      setIsComplete(false);
    }else{
      setIsComplete(true);
      setShow(true);
    }
    setHowManyTimes(howManyTimes + 1);
  }

  const changeStyles = (css, color, bold) =>{
    let x = document.getElementsByClassName(css);
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = color;
      if(bold){
        x[i].style.fontWeight = 'bold';
      }else{
        x[i].style.fontWeight = '';
      }

    }
  }

  const handleChange = (e) =>{
    setIsComplete(false);
    let question = parseInt(e.target.name);
    let answer = parseInt(e.target.value);

    const obj = {
      question,
      answer
    }
    let newAnswer = newAnswers;

    newAnswer = newAnswer.filter(function(el){
      return el.question !== question;
    });

    newAnswer.push(obj);
    setNewAnswers(newAnswer);

    if(newAnswer.length === questions.length){
      setMissingInfo(false);
    }

  }

  return (
    <div className="container  card-msg">
      <div className="mt-4 mb-4 pb-4 pt-4 pl-4" ref={list}>
        <div className="mb-3">
          <img src={links[0].bannerQuestion} className="center-img-modal"/>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 600: 2, 900: 3}}
        >
          <Masonry>
            {
              questions.map((quiz, i)=>{
                return(
                  <Question
                    howManyTimes={howManyTimes}
                    handleChange={handleChange}
                    category={category}
                    quiz={quiz}/>
                )
              })
            }
          </Masonry>
        </ResponsiveMasonry>
        <button
          onClick={handleSubmit}
          type="button"
          disabled={missingInfo}
          className={`btn btn-lg btn-block text-white mt-2 btn-dark`}>
          {isComplete ? 'Muy Bien' : 'Enviar'}
        </button>
        {
          isComplete && (
            <ModalFinish
              howManyTimes={howManyTimes}
              show={show}
              setShow={setShow}/>
          )
        }

      </div>
    </div>
  );
}

export default AlphabetSoupComponent;
