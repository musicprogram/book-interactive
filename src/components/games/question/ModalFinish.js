import React, {Fragment, useEffect, useRef} from 'react';
import {Image, Modal} from "react-bootstrap";
import {useRecoilState, useRecoilValue} from "recoil";
import Parallax from 'parallax-js'
import {categoryNavigation, linksSvg} from "../../../GlobalState";


function ModalFinish(props) {
  const sceneImgModal = useRef();
  const links = useRecoilValue(linksSvg);
  const category = useRecoilValue(categoryNavigation);
  useEffect(()=>{
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
          {
            !props.howManyTimes === 0 && (
                <Fragment>
                  <br/>
                      <span className="text-modal-how"> LO HICISTE EN {
                        props.howManyTimes > 1 ?
                          `${props.howManyTimes} VECES !!!` :
                          `UNA SOLA VEZ !!!`
                      }
                  </span>
                </Fragment>
            )
          }
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





