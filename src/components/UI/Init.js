import React, {useEffect, useRef, useState} from 'react';
import Parallax from 'parallax-js'
import {Modal, Image} from 'react-bootstrap'

import {
  useRecoilState, useRecoilValue
} from 'recoil';

import {categoryNavigation, linksSvg} from '../../GlobalState'

function Init() {
  const scene = useRef();
  const scenec = useRef();
  const scener = useRef();
  const sceneImgModal = useRef();

  const [show, setShow] = useState(true);

  const [category, setCategory] = useRecoilState(categoryNavigation);

  const links = useRecoilValue(linksSvg);

  useEffect(()=>{
    const modalExist = localStorage.getItem("modalExist");
    if(modalExist){
      setShow(false);
    }else{
      localStorage.setItem("modalExist", "true");
    }


    //inputScene.current
    //new Parallax(inputScene)
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      if(scene.current && scenec.current && scener.current ){
        const parallax = new Parallax(scene.current);
        const parallaxc = new Parallax(scenec.current);
        const parallaxr = new Parallax(scener.current);
        //console.log(parallax);
      }

      if(sceneImgModal.current){
        const parallaxt = new Parallax(sceneImgModal.current);
      }
    }, 1000)

  })


  return (
    <div className="init">
      <div className="mb-4">
        <h1 className="text-title color-main text-center font-weight-bold text-shadow text-lobster text-title-mar">
          Manual Interactivo y Bilingüe
        </h1>
        <h4 className="text-title color-main text-center font-weight-bold">
          <small className="text-shadow text-slogan">para identificar defectos en los procesos de confecciones</small>
        </h4>
      </div>

      <div className="container-fluid mb-5 ">

        <div className="row mr-1 ml-1 ">

          <div
            className="col-xl-4 col-md-4 center-cel"
            onClick={()=> setCategory(1)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-l my-card " ref={scene}>
              <img
                className="pointer img-fluid"
                src={links[0].btn1}
                data-depth="0.5"/>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-4  center-cel"
            onClick={()=> setCategory(2)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-c my-card"  ref={scenec}>
              <img
                className="pointer img-fluid"
                src={links[0].btn2}
                data-depth="0.9"/>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-4 center-cel"
            onClick={()=> setCategory(3)}>
            <div className="mt-2 mb-2 mr-2 ml-2 my-card-r my-card" ref={scener}>
              <img
                className="pointer img-fluid"
                src={links[0].btn3}
                data-depth="0.7"/>
            </div>
          </div>
        </div>
      </div>
      <blockquote className="blockquote text-center">
        <p className="lead mb-0 color-main font-weight-bold text-hand lead">
          <span className="color-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </span>
        </p>
        <footer className="blockquote-footer font-weight-bold color-main">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <span className="color-main text-center font-weight-bold">
            Manual Interactivo y Bilingüe para identificar defectos en los procesos de confección
          </span>

        </Modal.Header>


        <Modal.Body>

          <p className="text-center">
            <span className="color-main font-weight-bold"> Bienvenido </span> Este es un Manual para identificar defectos en procesos de confección. Navega por las tres categorías de defectos y diviértete con las actividades interactivas al final de cada una. Encontrarás todo el contenido del manual en español y en inglés para maximizar tu aprendizaje. ¡Comenzamos!
          </p>

          <div ref={sceneImgModal}>
            <Image
              className="center-img-modal"
              src={links[0].modal}
              roundedCircle
              data-depth="0.5"/>
          </div>

          <p className="text-center">
            <span className="color-main font-weight-bold"> Welcome </span> to the Manual for identifying clothing process defects! Surf through the three categories of defects and enjoy the interactive activities at the end of each. You’ll find that all the content of the manual is in Spanish and English so that you maximize your learning. Let 's get started!

          </p>

        </Modal.Body>
      </Modal>

    </div>

  );
}

export default Init;
