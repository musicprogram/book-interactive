import React, {useEffect, useRef, useState} from 'react';
import Parallax from 'parallax-js'
import {Modal, Image, ListGroup} from 'react-bootstrap'

import {
  useRecoilState
} from 'recoil';

import {categoryNavigation} from '../../GlobalState'

import imgFirst from '../../assets/img/Drawing.svg'
import imgSecond from '../../assets/img/Support team.svg'
import imgThird from '../../assets/img/Design.svg'
import team from '../../assets/img/Team.svg'

function Init() {
  const scene = useRef();
  const scenec = useRef();
  const scener = useRef();
  const sceneImgModal = useRef();

  const [show, setShow] = useState(true);

  const [category, setCategory] = useRecoilState(categoryNavigation);


  useEffect(()=>{
    const modalExist = localStorage.getItem("modalExist");
    if(modalExist){
      setShow(false);
    }else{
      localStorage.setItem("modalExist", "true");
    }

    setTimeout(()=>{
      if(scene.current && scenec.current && scener.current){
        const parallax = new Parallax(scene.current);
        const parallaxc = new Parallax(scenec.current);
        const parallaxr = new Parallax(scener.current);
        //console.log(parallax);
      }

      if(sceneImgModal.current){
        const parallaxt = new Parallax(sceneImgModal.current);
      }
    }, 1000)
    //inputScene.current
    //new Parallax(inputScene)
  },[])


  return (
    <div>
      <h1 className="text-title color-main text-center font-weight-bold text-shadow">
        Book Interactive
      </h1>
      <div className="container-fluid mb-5">

        <div className="row mr-1 ml-1">
          <div
            className="col-md-4"
            onClick={()=> setCategory(1)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-l my-card" ref={scene}>
              <img
                src={imgFirst}
                data-depth="0.5"/>
            </div>
          </div>
          <div
            className="col-md-4"
            onClick={()=> setCategory(2)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-c my-card"  ref={scenec}>
              <img
                src={imgSecond}
                data-depth="0.5"/>
            </div>
          </div>
          <div
            className="col-md-4"
            onClick={()=> setCategory(3)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-r my-card" ref={scener}>
              <img
                src={imgThird}
                data-depth="0.5"/>
            </div>
          </div>
        </div>
      </div>
      <blockquote className="blockquote text-center">
        <p className="lead mb-0 color-main font-weight-bold text-hand">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <div ref={sceneImgModal}>
          <Image src={team} roundedCircle data-depth="0.5"/>
        </div>



        <Modal.Body>
          <h1 className="color-main text-center font-weight-bold">
            Welcome!!!
          </h1>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque.
          </p>

          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>

    </div>

  );
}

export default Init;
