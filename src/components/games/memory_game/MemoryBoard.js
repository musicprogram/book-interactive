import React, {useState, useEffect } from 'react';
import '../../../assets/css/memory-style.css';
import { imagesGame, imageFront } from '../../../data/memoryGameData';

import ModalFinish from "../question/ModalFinish";
import {useRecoilValue} from "recoil";
import {linksSvg} from "../../../GlobalState";

import GameBoard from './GameBoard';

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


  useEffect(()=>{
  },[countFinish])

  useEffect(()=>{
    setImage(imageFront);
    let shuffle = imagesGame.sort(() => Math.random() - 0.5)
    setImagesMemory(shuffle);
  },[])

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
    setCountFinish( countFinish - 1);
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

    <div>
      <h1 className="text-center text-capitalize mt-2">
          <span className={`font-weight-bold text-title-span-title mr-2 
         color-5
          `}>
            Concéntrese
          </span>
      </h1>
      <div>
        <img src={links[5].bannerMemory} className="center-img-memory rounded"/>
      </div>
      <div className="body-memory mt-4">
        <section className="memory-game">
          {
            imagesMemory.map((memory, i)=>{
              return(

                <GameBoard
                  flipCard={flipCard}
                  memory={memory}
                  image={image}
                  i={i}/>
              )
            })
          }
        </section>

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
