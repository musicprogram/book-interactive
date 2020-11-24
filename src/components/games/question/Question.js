import React, {Fragment} from 'react';
import {Card, Image} from 'react-bootstrap';
import Zoom from "react-medium-image-zoom";
function Question(props) {

  return (
    <Card className="mt-1 mr-1 ml-1 mb-1 card-shadow">
      <Card.Header>
        {
          props.quiz.img && (
            <Zoom>
              <Image src={props.quiz.img} fluid />
            </Zoom>
          )
        }
        <h2 className={`color-3 text-center`} >{props.quiz.question}</h2>
      </Card.Header>
      <Card.Body>
        { Object.keys(props.quiz.answers).map((answer, i) => (
          <Fragment>
            <label class={`check-${props.quiz.id} check-label`}>
              {props.quiz.answers[answer]}
              <input
                type="radio"
                name={`${props.quiz.id}`}
                value={answer}
                onClick={props.handleChange}
                className="check-question"
              />
              <span className={`checkmark`}>{''}</span>
            </label>
            <br/>
          </Fragment>
        ))}
      </Card.Body>

    </Card>
  );
}

export default Question;
