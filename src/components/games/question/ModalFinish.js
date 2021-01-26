import React, {Fragment, useEffect, useRef} from 'react';
import {Image, Modal} from "react-bootstrap";
import {useRecoilState, useRecoilValue} from "recoil";
import Parallax from 'parallax-js'
import {categoryNavigation, linksSvg, resultTest} from "../../../GlobalState";
import ButtonsModalFinish from "./ButtonsModalFinish";
import ButtonsModalCategories from "./ButtonsModalCategories";


function ModalFinish(props) {
  const sceneImgModal = useRef();
  const links = useRecoilValue(linksSvg);
  const [category, setCategory] = useRecoilState(categoryNavigation);
  const [result, setResult] = useRecoilState(resultTest);
  useEffect(()=>{
    const scene = new Parallax(sceneImgModal.current);
  },[]);

  const handleClick = (cat) =>{
    setCategory(cat);
  }

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <div ref={sceneImgModal}>
        <Image src={links[0].modalCongratulations} roundedCircle data-depth="0.5"/>
      </div>

      <Modal.Body>
        <h1 className={`color-${category} text-center font-weight-bold `}>
          Felicitaciones
        </h1>

        <ButtonsModalFinish
          handleClick={handleClick}
        />
        <hr/>
        <p className="text-center">
          ¿Quieres seguir estudiando los defectos?
        </p>
        <ButtonsModalCategories/>

      </Modal.Body>
    </Modal>
  );
}

export default ModalFinish;





