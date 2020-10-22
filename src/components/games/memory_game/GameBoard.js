import React, {useEffect, useRef} from 'react';
import Parallax from 'parallax-js'

function GameBoard(props) {
  const cardImg = useRef();

  useEffect(()=>{
      if(cardImg.current){
        const parallax = new Parallax(cardImg.current);
      }
  },[])


  return (
    <div
      className="memory-card pointer"
      data-card={`card-${props.memory.dataKey}`}
      data-same={`${props.i}`}
      onClick={(e) => props.flipCard(e)}>
      {
        props.memory.img ? (
          <div className="front-face text-center">
            <div ref={cardImg}>
              <img
                data-depth="0.8"
                src={props.memory.img}
                alt={props.memory.dataKey}
               />
            </div>

            <p className={`mt-2 text-img-front text-white font-weight-bold ${props.memory.dataKey === 1 ? 'text-special' : ''}`} hidden>{props.memory.word}</p>
          </div>
        ) : (
          <div className="front-face">
            <p className={`text-box-memory mt-5 font-weight-bold ${props.memory.dataKey === 1 ? 'text-special' : ''}`}>
                <span className="align-middle text-memory text-capitalize">
                  {props.memory.word}
                </span> <br/>
              <span className="text-center chulo-correcto" hidden>✔</span>
            </p>

          </div>
        )
      }

      <img className="back-face" src={props.image} alt="JS Badge"/>
    </div>
  );
}

export default GameBoard;
