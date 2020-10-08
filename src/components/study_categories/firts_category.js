import React, {useState} from 'react';
import { Container, Card } from 'react-bootstrap';


import TalkOne from '../../assets/img/firts_category/talkOne.svg';
import TalkSecond from '../../assets/img/firts_category/talkSecond.svg';

function FirstCategory() {
  const [talk, setTalk] = useState(TalkOne)

  const handleTalk = () =>{
    console.log('talk');
    setTalk(TalkSecond);
  }
  return (
    <Container>
      <div className="row">
        <div className="col-2 col-md-4">


          <Card>
            <Card.Header>
              <h2 onClick={handleTalk}>
                Hear
              </h2>

            </Card.Header>
            <Card.Body>
              <object

                type="image/svg+xml"
                data={talk}>
              </object>
            </Card.Body>
          </Card>




        </div>
        <div className="col-10 col-md-4">

        </div>
      </div>


    </Container>
  );
}

export default FirstCategory;
