import React from 'react';

function GameBoard(props) {

  return (
    <div
      className="memory-card"
      data-card={`card-${props.memory.dataKey}`}
      data-same={`${props.i}`}
      onClick={(e) => props.flipCard(e)}>
      {
        props.memory.img ? (
          <img className="front-face" src={props.memory.img} alt={props.memory.dataKey}/>
        ) : (
          <div className="front-face">
            <p className={`color-5 text-box-memory mt-5 font-weight-bold`}>
                        <span className="align-middle">
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
