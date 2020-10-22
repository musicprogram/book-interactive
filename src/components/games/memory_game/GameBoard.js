import React from 'react';

function GameBoard(props) {

  return (
    <div
      className="memory-card pointer"
      data-card={`card-${props.memory.dataKey}`}
      data-same={`${props.i}`}
      onClick={(e) => props.flipCard(e)}>
      {
        props.memory.img ? (
          <img className="front-face" src={props.memory.img} alt={props.memory.dataKey}/>
        ) : (
          <div className="front-face">
            <p className={`text-box-memory mt-5 font-weight-bold ${props.memory.dataKey === 1 && 'text-special'}`}>
                <span className="align-middle text-memory text-capitalize">
                  {props.memory.word}
                </span>
            </p>
          </div>
        )
      }

      <img className="back-face" src={props.image} alt="JS Badge"/>
    </div>
  );
}

export default GameBoard;
