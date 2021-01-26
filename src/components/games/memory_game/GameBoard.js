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
          <div className="front-face">
            <div className="mx-auto">
              <img
                className="img-memory"
                src={props.memory.img}
                alt={props.memory.dataKey}
               />
            </div>

            <p className={`mt-2 text-white font-weight-bold text-center ${(props.memory.dataKey === 2 || props.memory.dataKey === 6) ? 'text-special' : 'text-special-small'}`} hidden>{props.memory.word}</p>
          </div>
        ) : (
          <div className="front-face">
            <p className={`mt-5 font-weight-bold text-center ${(props.memory.dataKey === 2 || props.memory.dataKey === 6) ? 'text-special' : 'text-special-small'}`}>
                <span className="align-middle text-memory text-capitalize">
                  {props.memory.word}
                </span>
            </p>
            <p className="text-center">
              <span className="mt-2 chulo-correcto" hidden>✔</span>
            </p>


          </div>
        )
      }

      <img className="back-face" src={props.image} alt="JS Badge"/>
    </div>
  );
}

export default GameBoard;
