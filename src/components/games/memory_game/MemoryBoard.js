import React, {useState, useEffect, useRef} from 'react';
import '../../../assets/css/memory-style.css';
import { imagesGame, imageFront, imagesGameEnglish } from '../../../data/memoryGameData';

import ModalFinish from "../question/ModalFinish";
import {useRecoilValue} from "recoil";
import {linksSvg} from "../../../GlobalState";

import Parallax from 'parallax-js'

import GameBoard from './GameBoard';

import CheckBoxLanguage from "../CheckBoxLanguage";

function Memoryboard() {
  const [imagesMemory, setImagesMemory] = useState([]);
  const [image, setImage] = useState('');

  const [hasFlippedCard, setHasFlippedCard] = useState(false);
  const [firstCard, setFirstCard] = useState('');
  const [firstEventCard, setFirstEventCard] = useState('');
  const [firstSameCard, setFirstSameCard] = useState('');
  const [secondCard, setSecondCard] = useState('');

  const [countFinish, setCountFinish] = useState(6);
  const [countTry, setCountTry] = useState(0);
  const [show, setShow] = useState(true);
  const links = useRecoilValue(linksSvg);

  const [english, setEnglish] = useState(false);
  const [showMemory, setShowMemory] = useState(true);


  const cardImg = useRef();

  useEffect(()=>{
  },[countFinish])

  useEffect(()=>{
    if(cardImg.current){
      const parallax = new Parallax(cardImg.current);
    }
    setImage(imageFront);
    let shuffle;
    if(english){
      shuffle = imagesGameEnglish.sort(() => Math.random() - 0.5)
    }else{
      shuffle = imagesGame.sort(() => Math.random() - 0.5)
    }
    setImagesMemory(shuffle);
  },[english])

  const flipCard = (e) =>{
    e.currentTarget.classList.add('flip');
    const currentTarget = e.currentTarget;
    const currentCard = e.currentTarget.dataset.card;
    const currentSame = e.currentTarget.dataset.same;
    setFirstSameCard(e.currentTarget.dataset.same);
    setFirstEventCard(e.currentTarget);

    if(!hasFlippedCard){
      setHasFlippedCard(true);
      setFirstCard(currentCard);
      //console.log(true, e.currentTarget)
    }else{
      setHasFlippedCard(false);
      setSecondCard(currentCard);
      //console.log(firstCard, currentCard)
      setCountTry(countTry + 1);
      checkForMatch(firstCard,currentCard, currentSame, firstSameCard, e, currentTarget, firstEventCard)

    }
  }


  const checkForMatch = (firstCard,currentCard, currentSame, firstSameCard, e, currentTarget, firstEventCard) =>{
    let isMatch = (firstCard === currentCard) && (currentSame !== firstSameCard);
    isMatch ? disabledCards(firstEventCard, e) : unFlipCards(firstEventCard,currentTarget);
  }

  const disabledCards = (firstEventCard, e) =>{
    // hay coincidencia
    if((countFinish - 1) === 0){
      setTimeout(()=>{
        setCountFinish( countFinish - 1);
      }, 1500)
    }else {
      setCountFinish( countFinish - 1);
    }
    firstEventCard.classList.add('inactive-card');
    e.currentTarget.classList.add('inactive-card');
  };

  const unFlipCards = (firstEventCard,currentTarget) =>{
    setTimeout(()=>{
      firstEventCard.classList.remove('flip');
      currentTarget.classList.remove('flip');
    }, 1000)
  };

  return (

    <div className="animate__animated animate__fadeIn  animate__duration-3s">
      <h1 className="text-center text-capitalize mt-2 ">
          <span className={`font-weight-bold text-title-span-title mr-2 
         color-5
          `}>
            {
              english ? 'Focus': 'Concéntrese'
            }

          </span>
      </h1>

     <CheckBoxLanguage
       setEnglish={setEnglish}
       english={english}
       setShowMemory={setShowMemory}
     />


      <div>
        <div ref={cardImg}>
          <img
            data-depth="0.1"
            src={links[5].bannerMemory}
            className="center-img-memory rounded"/>
        </div>

      </div>
      <div className="body-memory mt-4">
        {
          showMemory && (
            <section className="memory-game animate__animated animate__fadeIn  animate__duration-3s">
              {
                imagesMemory.map((memory, i)=>{
                  return(

                    <GameBoard
                      flipCard={flipCard}
                      memory={memory}
                      image={image}
                      key={i}
                      i={i}/>
                  )
                })
              }
            </section>

          )
        }

        {
          countFinish === 0 && (
            <ModalFinish
              howManyTimes={countTry}
              show={show}
              setShow={setShow}/>
          )
        }
      </div>
    </div>

  );
}

export default Memoryboard;
