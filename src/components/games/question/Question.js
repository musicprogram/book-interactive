import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';
function Question(props) {

  return (
    <Card className="mt-1 mr-1 ml-1 mb-1 card-shadow">
      <Card.Header>
        <h2 className={`${'color-' + props.category}`}>{props.quiz.question}</h2>
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
