import React, {Fragment, useEffect, useRef} from 'react';
import {Image, Modal} from "react-bootstrap";
import {useRecoilState, useRecoilValue} from "recoil";
import Parallax from 'parallax-js'
import {categoryNavigation, linksSvg, resultTest} from "../../../GlobalState";
import {thirdCategoryData} from "../../../data/thirdCategoryData";


function ModalFinish(props) {
  const sceneImgModal = useRef();
  const links = useRecoilValue(linksSvg);
  const category = useRecoilValue(categoryNavigation);
  const [result, setResult] = useRecoilState(resultTest);
  useEffect(()=>{

    let categoryName = '';
    if(category === 5){
      categoryName = 'Concéntrese'
    }else if(category === 4){
      categoryName = 'Selección múltiple'
    }else if(category === 6){
      categoryName = 'Complete'
    }

    const data = {
      name: categoryName,
      category: category
    }
    const resultArr = result
    resultArr.push(data);
    setResult(resultArr)
    localStorage.setItem('result', JSON.stringify(resultArr));
    const scene = new Parallax(sceneImgModal.current);
  },[])

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
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalFinish;





